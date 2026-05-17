import { useEffect, useMemo, useState } from "react";
import AdminGuard from "@/components/admin/AdminGuard";
import AdminLayout from "@/components/admin/AdminLayout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MathFormula } from "@/components/MathFormula";
import {
  BadgeInfo,
  Box,
  Calculator,
  Eye,
  EyeOff,
  Layers,
  MousePointerClick,
  PauseCircle,
  PlayCircle,
  Rotate3D,
  RotateCcw,
  Ruler,
  Sparkles,
} from "lucide-react";

type Vec3 = {
  x: number;
  y: number;
  z: number;
};

type ProjectedPoint = {
  x: number;
  y: number;
  z: number;
  perspective: number;
};

type SolidType =
  | "cube"
  | "box"
  | "regularPrism"
  | "pyramid"
  | "cylinder"
  | "cone"
  | "sphere";

type SceneMode = "simple" | "inscribed";

type SolidDefinition = {
  type: SolidType;
  label: string;
  shortLabel: string;
  description: string;
};

type PolyFace = {
  points: Vec3[];
  opacity?: number;
};

type SolidMesh = {
  faces: PolyFace[];
  edges: Vec3[][];
};

type SolidMetrics = {
  volume: number;
  baseArea?: number;
  lateralArea?: number;
  totalArea: number;
  formulas: {
    volume: string;
    area: string;
  };
  substitution: {
    volume: string;
    area: string;
  };
  explanation: string;
};

type RenderTheme = {
  face: string;
  edge: string;
  dashed?: boolean;
  opacity: number;
  label: string;
};

type InspectorFormula = {
  label: string;
  formula: string;
  substitution: string;
};

type InspectorData = {
  title: string;
  description: string;
  formulas: InspectorFormula[];
};

const VIEWBOX_WIDTH = 980;
const VIEWBOX_HEIGHT = 720;
const CENTER_X = VIEWBOX_WIDTH / 2;
const CENTER_Y = VIEWBOX_HEIGHT / 2;
const PROJECT_SCALE = 138;

const SOLIDS: SolidDefinition[] = [
  {
    type: "cube",
    label: "Cubo",
    shortLabel: "Cubo",
    description: "Todas as arestas possuem a mesma medida.",
  },
  {
    type: "box",
    label: "Paralelepípedo",
    shortLabel: "Paral.",
    description: "Possui comprimento, largura e altura independentes.",
  },
  {
    type: "regularPrism",
    label: "Prisma regular",
    shortLabel: "Prisma",
    description: "Prisma com base poligonal regular de n lados.",
  },
  {
    type: "pyramid",
    label: "Pirâmide regular",
    shortLabel: "Pirâmide",
    description: "Pirâmide com base regular e vértice alinhado ao centro.",
  },
  {
    type: "cylinder",
    label: "Cilindro",
    shortLabel: "Cilindro",
    description: "Sólido com duas bases circulares paralelas.",
  },
  {
    type: "cone",
    label: "Cone",
    shortLabel: "Cone",
    description: "Sólido com base circular e um vértice.",
  },
  {
    type: "sphere",
    label: "Esfera",
    shortLabel: "Esfera",
    description: "Conjunto de pontos a uma mesma distância do centro.",
  },
];

const INSCRIBED_PRESETS = [
  {
    label: "Prisma regular inscrito em cilindro",
    outer: "cylinder" as SolidType,
    inner: "regularPrism" as SolidType,
    sides: 6,
  },
  {
    label: "Esfera inscrita em cubo",
    outer: "cube" as SolidType,
    inner: "sphere" as SolidType,
    sides: 6,
  },
  {
    label: "Cubo inscrito em esfera",
    outer: "sphere" as SolidType,
    inner: "cube" as SolidType,
    sides: 4,
  },
  {
    label: "Cone inscrito em cilindro",
    outer: "cylinder" as SolidType,
    inner: "cone" as SolidType,
    sides: 32,
  },
];

function formatNumber(value: number) {
  if (!Number.isFinite(value)) return "0";

  return value.toLocaleString("pt-BR", {
    maximumFractionDigits: 2,
    minimumFractionDigits: Number.isInteger(value) ? 0 : 2,
  });
}

function degToRad(value: number) {
  return (value * Math.PI) / 180;
}

function rotatePoint(point: Vec3, angleX: number, angleY: number): Vec3 {
  const xRad = degToRad(angleX);
  const yRad = degToRad(angleY);

  const cosX = Math.cos(xRad);
  const sinX = Math.sin(xRad);
  const cosY = Math.cos(yRad);
  const sinY = Math.sin(yRad);

  const yAfterX = point.y * cosX - point.z * sinX;
  const zAfterX = point.y * sinX + point.z * cosX;

  const xAfterY = point.x * cosY + zAfterX * sinY;
  const zAfterY = -point.x * sinY + zAfterX * cosY;

  return {
    x: xAfterY,
    y: yAfterX,
    z: zAfterY,
  };
}

function projectPoint(
  point: Vec3,
  angleX: number,
  angleY: number
): ProjectedPoint {
  const rotated = rotatePoint(point, angleX, angleY);
  const distance = 7;
  const perspective = distance / (distance - rotated.z);

  return {
    x: CENTER_X + rotated.x * PROJECT_SCALE * perspective,
    y: CENTER_Y - rotated.y * PROJECT_SCALE * perspective,
    z: rotated.z,
    perspective,
  };
}

function transformPoint(point: Vec3, scale: number, offset: Vec3): Vec3 {
  return {
    x: point.x * scale + offset.x,
    y: point.y * scale + offset.y,
    z: point.z * scale + offset.z,
  };
}

function createRegularPolygon(sides: number, radius: number, y: number) {
  return Array.from({ length: sides }, (_, index) => {
    const angle = -Math.PI / 2 + (index * Math.PI * 2) / sides;

    return {
      x: Math.cos(angle) * radius,
      y,
      z: Math.sin(angle) * radius,
    };
  });
}

function createBoxMesh(width: number, height: number, depth: number): SolidMesh {
  const x = width / 2;
  const y = height / 2;
  const z = depth / 2;

  const p = {
    a: { x: -x, y: -y, z: -z },
    b: { x, y: -y, z: -z },
    c: { x, y, z: -z },
    d: { x: -x, y, z: -z },
    e: { x: -x, y: -y, z },
    f: { x, y: -y, z },
    g: { x, y, z },
    h: { x: -x, y, z },
  };

  return {
    faces: [
      { points: [p.a, p.b, p.c, p.d], opacity: 0.14 },
      { points: [p.e, p.f, p.g, p.h], opacity: 0.2 },
      { points: [p.a, p.e, p.h, p.d], opacity: 0.16 },
      { points: [p.b, p.f, p.g, p.c], opacity: 0.18 },
      { points: [p.d, p.c, p.g, p.h], opacity: 0.22 },
      { points: [p.a, p.b, p.f, p.e], opacity: 0.12 },
    ],
    edges: [
      [p.a, p.b],
      [p.b, p.c],
      [p.c, p.d],
      [p.d, p.a],
      [p.e, p.f],
      [p.f, p.g],
      [p.g, p.h],
      [p.h, p.e],
      [p.a, p.e],
      [p.b, p.f],
      [p.c, p.g],
      [p.d, p.h],
    ],
  };
}

function createPrismMesh(
  sides: number,
  radius: number,
  height: number
): SolidMesh {
  const bottom = createRegularPolygon(sides, radius, -height / 2);
  const top = createRegularPolygon(sides, radius, height / 2);

  const faces: PolyFace[] = [
    { points: top, opacity: 0.22 },
    { points: [...bottom].reverse(), opacity: 0.12 },
  ];

  const edges: Vec3[][] = [];

  for (let index = 0; index < sides; index += 1) {
    const next = (index + 1) % sides;

    faces.push({
      points: [bottom[index], bottom[next], top[next], top[index]],
      opacity: 0.16,
    });

    edges.push(
      [bottom[index], bottom[next]],
      [top[index], top[next]],
      [bottom[index], top[index]]
    );
  }

  return { faces, edges };
}

function createPyramidMesh(
  sides: number,
  radius: number,
  height: number
): SolidMesh {
  const base = createRegularPolygon(sides, radius, -height / 2);
  const apex = { x: 0, y: height / 2, z: 0 };

  const faces: PolyFace[] = [{ points: [...base].reverse(), opacity: 0.16 }];
  const edges: Vec3[][] = [];

  for (let index = 0; index < sides; index += 1) {
    const next = (index + 1) % sides;

    faces.push({
      points: [base[index], base[next], apex],
      opacity: 0.18,
    });

    edges.push([base[index], base[next]], [base[index], apex]);
  }

  return { faces, edges };
}

function createCylinderMesh(
  radius: number,
  height: number,
  segments = 64
): SolidMesh {
  const bottom = createRegularPolygon(segments, radius, -height / 2);
  const top = createRegularPolygon(segments, radius, height / 2);

  const faces: PolyFace[] = [
    { points: top, opacity: 0.18 },
    { points: [...bottom].reverse(), opacity: 0.1 },
  ];

  const edges: Vec3[][] = [];

  for (let index = 0; index < segments; index += 1) {
    const next = (index + 1) % segments;

    if (index % 4 === 0) {
      edges.push([bottom[index], top[index]]);
    }

    edges.push([bottom[index], bottom[next]], [top[index], top[next]]);
  }

  return { faces, edges };
}

function createConeMesh(
  radius: number,
  height: number,
  segments = 64
): SolidMesh {
  const base = createRegularPolygon(segments, radius, -height / 2);
  const apex = { x: 0, y: height / 2, z: 0 };

  const faces: PolyFace[] = [{ points: [...base].reverse(), opacity: 0.12 }];
  const edges: Vec3[][] = [];

  for (let index = 0; index < segments; index += 1) {
    const next = (index + 1) % segments;

    if (index % 4 === 0) {
      edges.push([base[index], apex]);
    }

    edges.push([base[index], base[next]]);
  }

  return { faces, edges };
}

function getMeshForSolid(type: SolidType, sides: number): SolidMesh {
  switch (type) {
    case "cube":
      return createBoxMesh(2.35, 2.35, 2.35);
    case "box":
      return createBoxMesh(3.05, 2.15, 1.85);
    case "regularPrism":
      return createPrismMesh(sides, 1.35, 2.4);
    case "pyramid":
      return createPyramidMesh(sides, 1.45, 2.65);
    case "cylinder":
      return createCylinderMesh(1.35, 2.45);
    case "cone":
      return createConeMesh(1.35, 2.55);
    default:
      return { faces: [], edges: [] };
  }
}

function polygonPath(points: ProjectedPoint[]) {
  return (
    points
      .map((point, index) => `${index === 0 ? "M" : "L"} ${point.x} ${point.y}`)
      .join(" ") + " Z"
  );
}

function renderMesh({
  mesh,
  angleX,
  angleY,
  scale,
  offset,
  theme,
  onGeometryClick,
}: {
  mesh: SolidMesh;
  angleX: number;
  angleY: number;
  scale: number;
  offset: Vec3;
  theme: RenderTheme;
  onGeometryClick?: () => void;
}) {
  const transformedFaces = mesh.faces.map((face, index) => {
    const transformed = face.points.map((point) =>
      transformPoint(point, scale, offset)
    );

    const projected = transformed.map((point) =>
      projectPoint(point, angleX, angleY)
    );

    const avgZ =
      projected.reduce((sum, point) => sum + point.z, 0) / projected.length;

    return { ...face, index, projected, avgZ };
  });

  const transformedEdges = mesh.edges.map((edge, index) => {
    const transformed = edge.map((point) =>
      transformPoint(point, scale, offset)
    );

    const projected = transformed.map((point) =>
      projectPoint(point, angleX, angleY)
    );

    const avgZ =
      projected.reduce((sum, point) => sum + point.z, 0) / projected.length;

    return { index, projected, avgZ };
  });

  return (
    <g>
      {[...transformedFaces]
        .sort((a, b) => a.avgZ - b.avgZ)
        .map((face) => (
          <path
            key={`face-${theme.label}-${face.index}`}
            d={polygonPath(face.projected)}
            fill={theme.face}
            opacity={face.opacity ?? theme.opacity}
            stroke="none"
          />
        ))}

      {[...transformedEdges]
        .sort((a, b) => a.avgZ - b.avgZ)
        .map((edge) => (
          <g key={`edge-group-${theme.label}-${edge.index}`}>
            <line
              x1={edge.projected[0].x}
              y1={edge.projected[0].y}
              x2={edge.projected[1].x}
              y2={edge.projected[1].y}
              stroke={theme.edge}
              strokeWidth="3"
              strokeLinecap="round"
              strokeDasharray={theme.dashed ? "8 8" : undefined}
              opacity={theme.dashed ? 0.75 : 0.95}
            />

            {onGeometryClick ? (
              <line
                x1={edge.projected[0].x}
                y1={edge.projected[0].y}
                x2={edge.projected[1].x}
                y2={edge.projected[1].y}
                stroke="transparent"
                strokeWidth="20"
                strokeLinecap="round"
                className="cursor-pointer"
                onClick={(event) => {
                  event.stopPropagation();
                  onGeometryClick();
                }}
              />
            ) : null}
          </g>
        ))}
    </g>
  );
}

function renderSphere({
  angleX,
  angleY,
  scale,
  offset,
  theme,
  onGeometryClick,
}: {
  angleX: number;
  angleY: number;
  scale: number;
  offset: Vec3;
  theme: RenderTheme;
  onGeometryClick?: () => void;
}) {
  const center = projectPoint(offset, angleX, angleY);
  const radius = 145 * scale * center.perspective;

  return (
    <g
      onClick={(event) => {
        if (!onGeometryClick) return;
        event.stopPropagation();
        onGeometryClick();
      }}
      className={onGeometryClick ? "cursor-pointer" : undefined}
    >
      <circle
        cx={center.x}
        cy={center.y}
        r={radius}
        fill={theme.face}
        opacity={theme.opacity}
        stroke={theme.edge}
        strokeWidth="3"
      />

      <ellipse
        cx={center.x}
        cy={center.y}
        rx={radius}
        ry={radius * 0.28}
        fill="none"
        stroke={theme.edge}
        strokeWidth="3"
        strokeDasharray={theme.dashed ? "8 8" : undefined}
        opacity="0.75"
      />

      <ellipse
        cx={center.x}
        cy={center.y}
        rx={radius * 0.34}
        ry={radius}
        fill="none"
        stroke={theme.edge}
        strokeWidth="3"
        strokeDasharray={theme.dashed ? "8 8" : undefined}
        opacity="0.45"
      />

      <circle
        cx={center.x - radius * 0.28}
        cy={center.y - radius * 0.28}
        r={radius * 0.12}
        fill="#ffffff"
        opacity="0.25"
      />
    </g>
  );
}

function baseAreaRegularPolygon(sides: number, side: number) {
  return (sides * side * side) / (4 * Math.tan(Math.PI / sides));
}

function apothemRegularPolygon(sides: number, side: number) {
  return side / (2 * Math.tan(Math.PI / sides));
}

function circumradiusRegularPolygon(sides: number, side: number) {
  return side / (2 * Math.sin(Math.PI / sides));
}

function getSolidMetrics({
  type,
  sides,
  side,
  width,
  depth,
  height,
  radius,
}: {
  type: SolidType;
  sides: number;
  side: number;
  width: number;
  depth: number;
  height: number;
  radius: number;
}): SolidMetrics {
  if (type === "cube") {
    return {
      volume: side ** 3,
      totalArea: 6 * side ** 2,
      formulas: {
        volume: String.raw`V = a^3`,
        area: String.raw`A_T = 6a^2`,
      },
      substitution: {
        volume: String.raw`V = ${formatNumber(side)}^3 = ${formatNumber(
          side ** 3
        )}`,
        area: String.raw`A_T = 6 \cdot ${formatNumber(
          side
        )}^2 = ${formatNumber(6 * side ** 2)}`,
      },
      explanation:
        "No cubo, todas as arestas são iguais. A base é um quadrado de lado a, e a altura também mede a.",
    };
  }

  if (type === "box") {
    return {
      volume: width * depth * height,
      totalArea: 2 * (width * depth + width * height + depth * height),
      formulas: {
        volume: String.raw`V = c \cdot l \cdot h`,
        area: String.raw`A_T = 2(cl + ch + lh)`,
      },
      substitution: {
        volume: String.raw`V = ${formatNumber(width)} \cdot ${formatNumber(
          depth
        )} \cdot ${formatNumber(height)} = ${formatNumber(
          width * depth * height
        )}`,
        area: String.raw`A_T = 2(${formatNumber(
          width * depth
        )} + ${formatNumber(width * height)} + ${formatNumber(
          depth * height
        )}) = ${formatNumber(
          2 * (width * depth + width * height + depth * height)
        )}`,
      },
      explanation:
        "O paralelepípedo pode ser visto como um prisma de base retangular. Volume é área da base vezes altura.",
    };
  }

  if (type === "regularPrism") {
    const baseArea = baseAreaRegularPolygon(sides, side);
    const perimeter = sides * side;
    const lateralArea = perimeter * height;

    return {
      volume: baseArea * height,
      baseArea,
      lateralArea,
      totalArea: 2 * baseArea + lateralArea,
      formulas: {
        volume: String.raw`V = A_b \cdot h`,
        area: String.raw`A_T = 2A_b + A_L`,
      },
      substitution: {
        volume: String.raw`V = ${formatNumber(baseArea)} \cdot ${formatNumber(
          height
        )} = ${formatNumber(baseArea * height)}`,
        area: String.raw`A_T = 2 \cdot ${formatNumber(
          baseArea
        )} + ${formatNumber(lateralArea)} = ${formatNumber(
          2 * baseArea + lateralArea
        )}`,
      },
      explanation:
        "Em qualquer prisma, o volume é área da base vezes altura. Se a base é um polígono regular, calculamos a área da base pela relação entre lado, apótema e perímetro.",
    };
  }

  if (type === "pyramid") {
    const baseArea = baseAreaRegularPolygon(sides, side);
    const perimeter = sides * side;
    const apothem = apothemRegularPolygon(sides, side);
    const slant = Math.sqrt(height ** 2 + apothem ** 2);
    const lateralArea = (perimeter * slant) / 2;

    return {
      volume: (baseArea * height) / 3,
      baseArea,
      lateralArea,
      totalArea: baseArea + lateralArea,
      formulas: {
        volume: String.raw`V = \frac{A_b \cdot h}{3}`,
        area: String.raw`A_T = A_b + A_L`,
      },
      substitution: {
        volume: String.raw`V = \frac{${formatNumber(
          baseArea
        )} \cdot ${formatNumber(height)}}{3} = ${formatNumber(
          (baseArea * height) / 3
        )}`,
        area: String.raw`A_T = ${formatNumber(baseArea)} + ${formatNumber(
          lateralArea
        )} = ${formatNumber(baseArea + lateralArea)}`,
      },
      explanation:
        "A pirâmide tem volume igual a um terço do prisma de mesma base e mesma altura. A área total soma a base com as faces laterais triangulares.",
    };
  }

  if (type === "cylinder") {
    return {
      volume: Math.PI * radius ** 2 * height,
      baseArea: Math.PI * radius ** 2,
      lateralArea: 2 * Math.PI * radius * height,
      totalArea: 2 * Math.PI * radius * (radius + height),
      formulas: {
        volume: String.raw`V = \pi r^2h`,
        area: String.raw`A_T = 2\pi r(r+h)`,
      },
      substitution: {
        volume: String.raw`V = \pi \cdot ${formatNumber(
          radius
        )}^2 \cdot ${formatNumber(height)} = ${formatNumber(
          Math.PI * radius ** 2 * height
        )}`,
        area: String.raw`A_T = 2\pi \cdot ${formatNumber(
          radius
        )}(${formatNumber(radius)}+${formatNumber(height)}) = ${formatNumber(
          2 * Math.PI * radius * (radius + height)
        )}`,
      },
      explanation:
        "O cilindro é um prisma de base circular. Por isso, o volume continua sendo área da base vezes altura.",
    };
  }

  if (type === "cone") {
    const geratriz = Math.sqrt(radius ** 2 + height ** 2);

    return {
      volume: (Math.PI * radius ** 2 * height) / 3,
      baseArea: Math.PI * radius ** 2,
      lateralArea: Math.PI * radius * geratriz,
      totalArea: Math.PI * radius * (radius + geratriz),
      formulas: {
        volume: String.raw`V = \frac{\pi r^2h}{3}`,
        area: String.raw`A_T = \pi r(r+g)`,
      },
      substitution: {
        volume: String.raw`V = \frac{\pi \cdot ${formatNumber(
          radius
        )}^2 \cdot ${formatNumber(height)}}{3} = ${formatNumber(
          (Math.PI * radius ** 2 * height) / 3
        )}`,
        area: String.raw`A_T = \pi \cdot ${formatNumber(
          radius
        )}(${formatNumber(radius)}+${formatNumber(geratriz)}) = ${formatNumber(
          Math.PI * radius * (radius + geratriz)
        )}`,
      },
      explanation:
        "O cone tem volume igual a um terço do cilindro de mesma base e mesma altura. A área lateral depende da geratriz.",
    };
  }

  return {
    volume: (4 * Math.PI * radius ** 3) / 3,
    totalArea: 4 * Math.PI * radius ** 2,
    formulas: {
      volume: String.raw`V = \frac{4}{3}\pi r^3`,
      area: String.raw`A = 4\pi r^2`,
    },
    substitution: {
      volume: String.raw`V = \frac{4}{3}\pi \cdot ${formatNumber(
        radius
      )}^3 = ${formatNumber((4 * Math.PI * radius ** 3) / 3)}`,
      area: String.raw`A = 4\pi \cdot ${formatNumber(
        radius
      )}^2 = ${formatNumber(4 * Math.PI * radius ** 2)}`,
    },
    explanation:
      "Na esfera, todo ponto da superfície está à mesma distância do centro. O raio controla tanto o volume quanto a área.",
  };
}

function getInspectorForSolid({
  type,
  sides,
  side,
  width,
  depth,
  height,
  radius,
}: {
  type: SolidType;
  sides: number;
  side: number;
  width: number;
  depth: number;
  height: number;
  radius: number;
}): InspectorData {
  if (type === "cube") {
    const faceDiagonal = side * Math.sqrt(2);
    const spaceDiagonal = side * Math.sqrt(3);

    return {
      title: "Aresta do cubo selecionada",
      description:
        "No cubo, uma aresta determina tudo: diagonal da face, diagonal espacial, área e volume. Sim, o cubo é organizado, diferente da maioria dos projetos de frontend.",
      formulas: [
        {
          label: "Diagonal da face",
          formula: String.raw`d_f = a\sqrt{2}`,
          substitution: String.raw`d_f = ${formatNumber(
            side
          )}\sqrt{2} = ${formatNumber(faceDiagonal)}`,
        },
        {
          label: "Diagonal espacial",
          formula: String.raw`D = a\sqrt{3}`,
          substitution: String.raw`D = ${formatNumber(
            side
          )}\sqrt{3} = ${formatNumber(spaceDiagonal)}`,
        },
      ],
    };
  }

  if (type === "box") {
    const baseDiagonal = Math.sqrt(width ** 2 + depth ** 2);
    const spaceDiagonal = Math.sqrt(width ** 2 + depth ** 2 + height ** 2);

    return {
      title: "Aresta do paralelepípedo selecionada",
      description:
        "No paralelepípedo, as diagonais aparecem por Pitágoras: primeiro na base, depois no espaço.",
      formulas: [
        {
          label: "Diagonal da base",
          formula: String.raw`d_b = \sqrt{c^2 + l^2}`,
          substitution: String.raw`d_b = \sqrt{${formatNumber(
            width
          )}^2 + ${formatNumber(depth)}^2} = ${formatNumber(baseDiagonal)}`,
        },
        {
          label: "Diagonal espacial",
          formula: String.raw`D = \sqrt{c^2 + l^2 + h^2}`,
          substitution: String.raw`D = \sqrt{${formatNumber(
            width
          )}^2 + ${formatNumber(depth)}^2 + ${formatNumber(
            height
          )}^2} = ${formatNumber(spaceDiagonal)}`,
        },
      ],
    };
  }

  if (type === "regularPrism") {
    const apothem = apothemRegularPolygon(sides, side);
    const circumradius = circumradiusRegularPolygon(sides, side);
    const baseArea = baseAreaRegularPolygon(sides, side);

    return {
      title: "Aresta da base do prisma selecionada",
      description:
        "Em prismas regulares, a aresta da base permite descobrir apótema, raio circunscrito e área da base. Isso é ouro em questão de sólido inscrito.",
      formulas: [
        {
          label: "Apótema da base",
          formula: String.raw`a_p = \frac{l}{2\tan\left(\frac{\pi}{n}\right)}`,
          substitution: String.raw`a_p = \frac{${formatNumber(
            side
          )}}{2\tan\left(\frac{\pi}{${sides}}\right)} = ${formatNumber(
            apothem
          )}`,
        },
        {
          label: "Raio circunscrito",
          formula: String.raw`R = \frac{l}{2\sin\left(\frac{\pi}{n}\right)}`,
          substitution: String.raw`R = \frac{${formatNumber(
            side
          )}}{2\sin\left(\frac{\pi}{${sides}}\right)} = ${formatNumber(
            circumradius
          )}`,
        },
        {
          label: "Área da base",
          formula: String.raw`A_b = \frac{nla_p}{2}`,
          substitution: String.raw`A_b = \frac{${sides}\cdot ${formatNumber(
            side
          )}\cdot ${formatNumber(apothem)}}{2} = ${formatNumber(baseArea)}`,
        },
      ],
    };
  }

  if (type === "pyramid") {
    const apothem = apothemRegularPolygon(sides, side);
    const geratriz = Math.sqrt(height ** 2 + apothem ** 2);

    return {
      title: "Aresta da pirâmide selecionada",
      description:
        "Na pirâmide regular, o triângulo formado pela altura, apótema da base e geratriz manda na maioria das contas.",
      formulas: [
        {
          label: "Apótema da base",
          formula: String.raw`a_p = \frac{l}{2\tan\left(\frac{\pi}{n}\right)}`,
          substitution: String.raw`a_p = ${formatNumber(apothem)}`,
        },
        {
          label: "Geratriz",
          formula: String.raw`g = \sqrt{h^2 + a_p^2}`,
          substitution: String.raw`g = \sqrt{${formatNumber(
            height
          )}^2 + ${formatNumber(apothem)}^2} = ${formatNumber(geratriz)}`,
        },
      ],
    };
  }

  if (type === "cylinder") {
    return {
      title: "Geratriz/aresta visual do cilindro selecionada",
      description:
        "No cilindro, o ponto principal é perceber que ele funciona como um prisma de base circular.",
      formulas: [
        {
          label: "Diâmetro da base",
          formula: String.raw`d = 2r`,
          substitution: String.raw`d = 2\cdot ${formatNumber(
            radius
          )} = ${formatNumber(2 * radius)}`,
        },
        {
          label: "Área da base",
          formula: String.raw`A_b = \pi r^2`,
          substitution: String.raw`A_b = \pi \cdot ${formatNumber(
            radius
          )}^2 = ${formatNumber(Math.PI * radius ** 2)}`,
        },
      ],
    };
  }

  if (type === "cone") {
    const geratriz = Math.sqrt(radius ** 2 + height ** 2);

    return {
      title: "Geratriz do cone selecionada",
      description:
        "No cone reto, raio, altura e geratriz formam um triângulo retângulo. É Pitágoras usando chapéu de festa.",
      formulas: [
        {
          label: "Geratriz",
          formula: String.raw`g = \sqrt{r^2+h^2}`,
          substitution: String.raw`g = \sqrt{${formatNumber(
            radius
          )}^2 + ${formatNumber(height)}^2} = ${formatNumber(geratriz)}`,
        },
        {
          label: "Área lateral",
          formula: String.raw`A_L = \pi rg`,
          substitution: String.raw`A_L = \pi \cdot ${formatNumber(
            radius
          )}\cdot ${formatNumber(geratriz)} = ${formatNumber(
            Math.PI * radius * geratriz
          )}`,
        },
      ],
    };
  }

  return {
    title: "Esfera selecionada",
    description:
      "A esfera não possui arestas. Aqui, a medida central é o raio, que determina diâmetro, área e volume.",
    formulas: [
      {
        label: "Diâmetro",
        formula: String.raw`d = 2r`,
        substitution: String.raw`d = 2\cdot ${formatNumber(
          radius
        )} = ${formatNumber(2 * radius)}`,
      },
      {
        label: "Círculo máximo",
        formula: String.raw`A = \pi r^2`,
        substitution: String.raw`A = \pi \cdot ${formatNumber(
          radius
        )}^2 = ${formatNumber(Math.PI * radius ** 2)}`,
      },
    ],
  };
}

function getInscribedRelationship({
  outerSolid,
  innerSolid,
  polygonSides,
  radius,
  side,
  innerScale,
}: {
  outerSolid: SolidType;
  innerSolid: SolidType;
  polygonSides: number;
  radius: number;
  side: number;
  height: number;
  innerScale: number;
}) {
  if (outerSolid === "cylinder" && innerSolid === "regularPrism") {
    const innerRadius = radius * innerScale;
    const innerSide = 2 * innerRadius * Math.sin(Math.PI / polygonSides);

    return {
      title: "Prisma regular inscrito em cilindro",
      formula: String.raw`l = 2R\sin\left(\frac{\pi}{n}\right)`,
      substitution: String.raw`l = 2 \cdot ${formatNumber(
        innerRadius
      )} \cdot \sin\left(\frac{\pi}{${polygonSides}}\right) = ${formatNumber(
        innerSide
      )}`,
      text:
        "A base do prisma fica inscrita no círculo da base do cilindro. Então o raio do cilindro é o raio circunscrito do polígono regular da base do prisma.",
    };
  }

  if (outerSolid === "cube" && innerSolid === "sphere") {
    return {
      title: "Esfera inscrita em cubo",
      formula: String.raw`r = \frac{a}{2}`,
      substitution: String.raw`r = \frac{${formatNumber(
        side
      )}}{2} = ${formatNumber(side / 2)}`,
      text:
        "A esfera toca as seis faces do cubo. Por isso, o diâmetro da esfera é igual à aresta do cubo.",
    };
  }

  if (outerSolid === "sphere" && innerSolid === "cube") {
    const cubeSide = (2 * radius * innerScale) / Math.sqrt(3);

    return {
      title: "Cubo inscrito em esfera",
      formula: String.raw`d_{\text{cubo}} = a\sqrt{3} = 2R`,
      substitution: String.raw`a = \frac{2R}{\sqrt{3}} = \frac{2 \cdot ${formatNumber(
        radius * innerScale
      )}}{\sqrt{3}} = ${formatNumber(cubeSide)}`,
      text:
        "A diagonal espacial do cubo é igual ao diâmetro da esfera. É essa relação que manda na conta.",
    };
  }

  if (outerSolid === "cylinder" && innerSolid === "cone") {
    return {
      title: "Cone inscrito em cilindro",
      formula: String.raw`V_{\text{cone}} = \frac{1}{3}V_{\text{cilindro}}`,
      substitution: String.raw`V_{\text{cone}} = \frac{\pi r^2h}{3}`,
      text:
        "Quando o cone tem a mesma base e a mesma altura do cilindro, seu volume é exatamente um terço do volume do cilindro.",
    };
  }

  return {
    title: "Modo livre de inscrição",
    formula: String.raw`V_{\text{ocupado}} = \frac{V_{\text{interno}}}{V_{\text{externo}}}\cdot 100\%`,
    substitution: String.raw`\text{percentual} = \frac{V_i}{V_e}\cdot 100\%`,
    text:
      "Neste modo, o sólido interno pode ser deslocado e escalado livremente. Para uma inscrição perfeita, normalmente ele precisa ficar centralizado e respeitar uma relação entre raio, aresta, altura ou diagonal.",
  };
}

export default function AdminSpatialGeometryPrototypePage() {
  const [mode, setMode] = useState<SceneMode>("simple");
  const [selectedSolid, setSelectedSolid] = useState<SolidType>("regularPrism");
  const [outerSolid, setOuterSolid] = useState<SolidType>("cylinder");
  const [innerSolid, setInnerSolid] = useState<SolidType>("regularPrism");
  const [polygonSides, setPolygonSides] = useState(6);
  const [side, setSide] = useState(4);
  const [width, setWidth] = useState(6);
  const [depth, setDepth] = useState(3);
  const [height, setHeight] = useState(7);
  const [radius, setRadius] = useState(3);
  const [innerScale, setInnerScale] = useState(0.78);
  const [innerOffsetX, setInnerOffsetX] = useState(0);
  const [innerOffsetY, setInnerOffsetY] = useState(0);
  const [innerOffsetZ, setInnerOffsetZ] = useState(0);
  const [rotationX, setRotationX] = useState(18);
  const [rotationY, setRotationY] = useState(-28);
  const [autoRotate, setAutoRotate] = useState(false);
  const [showInnerSolid, setShowInnerSolid] = useState(true);
  const [showFaces, setShowFaces] = useState(true);
  const [inspector, setInspector] = useState<InspectorData | null>(null);

  useEffect(() => {
    if (!autoRotate) return;

    const intervalId = window.setInterval(() => {
      setRotationY((current) => {
        const next = current + 1.1;
        return next > 180 ? -180 : next;
      });
    }, 60);

    return () => window.clearInterval(intervalId);
  }, [autoRotate]);

  const activeSolid = mode === "simple" ? selectedSolid : outerSolid;

  const activeDefinition =
    SOLIDS.find((solid) => solid.type === activeSolid) ?? SOLIDS[0];

  const outerMetrics = useMemo(
    () =>
      getSolidMetrics({
        type: activeSolid,
        sides: polygonSides,
        side,
        width,
        depth,
        height,
        radius,
      }),
    [activeSolid, polygonSides, side, width, depth, height, radius]
  );

  const innerMetrics = useMemo(() => {
    const innerRadius = radius * innerScale;
    const innerHeight = height * innerScale;

    const innerSide =
      outerSolid === "cylinder" && innerSolid === "regularPrism"
        ? 2 * innerRadius * Math.sin(Math.PI / polygonSides)
        : side * innerScale;

    return getSolidMetrics({
      type: innerSolid,
      sides: polygonSides,
      side: innerSide,
      width: width * innerScale,
      depth: depth * innerScale,
      height: innerHeight,
      radius: innerRadius,
    });
  }, [
    innerSolid,
    outerSolid,
    polygonSides,
    side,
    width,
    depth,
    height,
    radius,
    innerScale,
  ]);

  const relationship = getInscribedRelationship({
    outerSolid,
    innerSolid,
    polygonSides,
    radius,
    side,
    height,
    innerScale,
  });

  const occupation =
    outerMetrics.volume > 0 ? (innerMetrics.volume / outerMetrics.volume) * 100 : 0;

  const outerMesh = getMeshForSolid(activeSolid, polygonSides);
  const innerMesh = getMeshForSolid(innerSolid, polygonSides);

  function resetRotation() {
    setRotationX(18);
    setRotationY(-28);
    setAutoRotate(false);
  }

  function centralizeInner() {
    setInnerOffsetX(0);
    setInnerOffsetY(0);
    setInnerOffsetZ(0);
    setInnerScale(0.78);
  }

  function applyPreset(preset: (typeof INSCRIBED_PRESETS)[number]) {
    setMode("inscribed");
    setOuterSolid(preset.outer);
    setInnerSolid(preset.inner);
    setPolygonSides(preset.sides);
    setInnerOffsetX(0);
    setInnerOffsetY(0);
    setInnerOffsetZ(0);
    setInnerScale(0.78);
    setInspector(null);
  }

  function inspectSolid(type: SolidType) {
    const data = getInspectorForSolid({
      type,
      sides: polygonSides,
      side,
      width,
      depth,
      height,
      radius,
    });

    setInspector(data);
  }

  return (
    <AdminGuard allowedRoles={["admin"]}>
      <AdminLayout
        title="Protótipo: Geometria espacial"
        subtitle="Visualização 3D interna para sólidos, volumes, áreas e relações de inscrição."
      >
        <div className="grid gap-6 xl:grid-cols-[1.25fr_0.75fr]">
          <Card className="overflow-hidden border-slate-200 bg-white">
            <div className="border-b border-slate-100 p-5">
              <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                <div>
                  <div className="flex items-center gap-2 text-sm font-semibold text-indigo-700">
                    <Box className="h-4 w-4" />
                    Visualização 3D didática
                  </div>

                  <h2 className="mt-1 text-2xl font-black text-slate-900">
                    {mode === "simple"
                      ? activeDefinition.label
                      : `${
                          SOLIDS.find((item) => item.type === innerSolid)?.label
                        } dentro de ${
                          SOLIDS.find((item) => item.type === outerSolid)?.label
                        }`}
                  </h2>

                  <p className="mt-1 text-sm text-slate-500">
                    {mode === "simple"
                      ? activeDefinition.description
                      : relationship.text}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  <Button
                    type="button"
                    variant={mode === "simple" ? "default" : "outline"}
                    className="rounded-2xl"
                    onClick={() => {
                      setMode("simple");
                      setInspector(null);
                    }}
                  >
                    Sólido simples
                  </Button>

                  <Button
                    type="button"
                    variant={mode === "inscribed" ? "default" : "outline"}
                    className="rounded-2xl"
                    onClick={() => {
                      setMode("inscribed");
                      setInspector(null);
                    }}
                  >
                    Sólido inscrito
                  </Button>
                </div>
              </div>
            </div>

            <div className="relative min-h-[700px] overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950">
              <div className="absolute left-6 top-6 z-20 rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-white backdrop-blur">
                <p className="text-xs font-semibold uppercase tracking-wide text-indigo-200">
                  Volume externo
                </p>
                <p className="mt-1 text-2xl font-black">
                  {formatNumber(outerMetrics.volume)} u³
                </p>
              </div>

              <div className="absolute right-6 top-6 z-20 rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-white backdrop-blur">
                <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-cyan-200">
                  <MousePointerClick className="h-4 w-4" />
                  Clique nas arestas
                </p>
                <p className="mt-1 max-w-[220px] text-xs leading-5 text-slate-200">
                  Selecione uma aresta ou sólido para abrir relações de diagonal,
                  apótema, raio e geratriz.
                </p>
              </div>

              {mode === "inscribed" ? (
                <div className="absolute bottom-6 left-6 z-20 rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-white backdrop-blur">
                  <p className="text-xs font-semibold uppercase tracking-wide text-orange-200">
                    Ocupação
                  </p>
                  <p className="mt-1 text-xl font-black">
                    {formatNumber(occupation)}%
                  </p>
                </div>
              ) : null}

              <svg
                className="absolute inset-0 h-full w-full"
                viewBox={`0 0 ${VIEWBOX_WIDTH} ${VIEWBOX_HEIGHT}`}
                preserveAspectRatio="xMidYMid meet"
              >
                <defs>
                  <radialGradient id="spatialGlow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#818cf8" stopOpacity="0.5" />
                    <stop offset="100%" stopColor="#312e81" stopOpacity="0" />
                  </radialGradient>
                </defs>

                <rect width={VIEWBOX_WIDTH} height={VIEWBOX_HEIGHT} fill="transparent" />
                <circle cx={CENTER_X} cy={CENTER_Y} r="310" fill="url(#spatialGlow)" />

                {activeSolid === "sphere"
                  ? renderSphere({
                      angleX: rotationX,
                      angleY: rotationY,
                      scale: 1,
                      offset: { x: 0, y: 0, z: 0 },
                      onGeometryClick: () => inspectSolid(activeSolid),
                      theme: {
                        face: "#38bdf8",
                        edge: "#bae6fd",
                        opacity: showFaces ? 0.18 : 0.04,
                        label: "outer-sphere",
                      },
                    })
                  : renderMesh({
                      mesh: outerMesh,
                      angleX: rotationX,
                      angleY: rotationY,
                      scale: 1,
                      offset: { x: 0, y: 0, z: 0 },
                      onGeometryClick: () => inspectSolid(activeSolid),
                      theme: {
                        face: "#38bdf8",
                        edge: "#bae6fd",
                        opacity: showFaces ? 0.18 : 0.04,
                        label: "outer",
                      },
                    })}

                {mode === "inscribed" && showInnerSolid
                  ? innerSolid === "sphere"
                    ? renderSphere({
                        angleX: rotationX,
                        angleY: rotationY,
                        scale: innerScale,
                        offset: {
                          x: innerOffsetX,
                          y: innerOffsetY,
                          z: innerOffsetZ,
                        },
                        onGeometryClick: () => inspectSolid(innerSolid),
                        theme: {
                          face: "#f97316",
                          edge: "#fed7aa",
                          opacity: showFaces ? 0.34 : 0.08,
                          dashed: true,
                          label: "inner-sphere",
                        },
                      })
                    : renderMesh({
                        mesh: innerMesh,
                        angleX: rotationX,
                        angleY: rotationY,
                        scale: innerScale,
                        offset: {
                          x: innerOffsetX,
                          y: innerOffsetY,
                          z: innerOffsetZ,
                        },
                        onGeometryClick: () => inspectSolid(innerSolid),
                        theme: {
                          face: "#f97316",
                          edge: "#fed7aa",
                          opacity: showFaces ? 0.3 : 0.08,
                          dashed: true,
                          label: "inner",
                        },
                      })
                  : null}
              </svg>
            </div>

            <div className="border-t border-slate-100 bg-slate-50 p-5">
              <div className="mb-4 flex items-center gap-2 text-sm font-bold text-slate-900">
                <Rotate3D className="h-4 w-4" />
                Controles do simulador
              </div>

              <div className="grid gap-4 lg:grid-cols-4">
                <div>
                  <label className="mb-2 block text-xs font-bold uppercase tracking-wide text-slate-500">
                    {mode === "simple" ? "Sólido" : "Sólido externo"}
                  </label>

                  <select
                    value={mode === "simple" ? selectedSolid : outerSolid}
                    onChange={(event) => {
                      mode === "simple"
                        ? setSelectedSolid(event.target.value as SolidType)
                        : setOuterSolid(event.target.value as SolidType);
                      setInspector(null);
                    }}
                    className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700 outline-none focus:border-slate-900"
                  >
                    {SOLIDS.map((solid) => (
                      <option key={solid.type} value={solid.type}>
                        {solid.label}
                      </option>
                    ))}
                  </select>
                </div>

                {mode === "inscribed" ? (
                  <div>
                    <label className="mb-2 block text-xs font-bold uppercase tracking-wide text-slate-500">
                      Sólido interno
                    </label>

                    <select
                      value={innerSolid}
                      onChange={(event) => {
                        setInnerSolid(event.target.value as SolidType);
                        setInspector(null);
                      }}
                      className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700 outline-none focus:border-slate-900"
                    >
                      {SOLIDS.map((solid) => (
                        <option key={solid.type} value={solid.type}>
                          {solid.label}
                        </option>
                      ))}
                    </select>
                  </div>
                ) : null}

                <div>
                  <div className="mb-2 flex items-center justify-between text-xs font-semibold text-slate-500">
                    <span>Rotação vertical</span>
                    <span>{rotationX}°</span>
                  </div>
                  <input
                    type="range"
                    min="-80"
                    max="80"
                    value={rotationX}
                    onChange={(event) => setRotationX(Number(event.target.value))}
                    className="w-full"
                  />
                </div>

                <div>
                  <div className="mb-2 flex items-center justify-between text-xs font-semibold text-slate-500">
                    <span>Rotação horizontal</span>
                    <span>{Math.round(rotationY)}°</span>
                  </div>
                  <input
                    type="range"
                    min="-180"
                    max="180"
                    value={rotationY}
                    onChange={(event) => setRotationY(Number(event.target.value))}
                    className="w-full"
                  />
                </div>
              </div>

              <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setAutoRotate((current) => !current)}
                  className="gap-2 rounded-2xl"
                >
                  {autoRotate ? (
                    <PauseCircle className="h-4 w-4" />
                  ) : (
                    <PlayCircle className="h-4 w-4" />
                  )}
                  {autoRotate ? "Pausar" : "Girar"}
                </Button>

                <Button
                  type="button"
                  variant="outline"
                  onClick={resetRotation}
                  className="gap-2 rounded-2xl"
                >
                  <RotateCcw className="h-4 w-4" />
                  Resetar
                </Button>

                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setShowFaces((current) => !current)}
                  className="gap-2 rounded-2xl"
                >
                  {showFaces ? (
                    <EyeOff className="h-4 w-4" />
                  ) : (
                    <Eye className="h-4 w-4" />
                  )}
                  {showFaces ? "Ocultar faces" : "Mostrar faces"}
                </Button>

                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setShowInnerSolid((current) => !current)}
                  disabled={mode !== "inscribed"}
                  className="gap-2 rounded-2xl"
                >
                  {showInnerSolid ? (
                    <EyeOff className="h-4 w-4" />
                  ) : (
                    <Eye className="h-4 w-4" />
                  )}
                  Interno
                </Button>
              </div>
            </div>

            <div className="border-t border-slate-100 bg-slate-50/80 p-5">
              <div className="grid gap-5 xl:grid-cols-[0.9fr_1.1fr]">
                <div>
                  <div className="flex items-center gap-2 text-sm font-semibold text-slate-800">
                    <Ruler className="h-4 w-4" />
                    Medidas do sólido
                  </div>

                  <h3 className="mt-2 text-xl font-black text-slate-900">
                    Ajuste os parâmetros
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Use esses controles para testar como volume, área e relações
                    de inscrição mudam. Depois clique nas arestas do sólido para
                    ver relações geométricas específicas.
                  </p>
                </div>

                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  <div>
                    <label className="mb-2 block text-xs font-bold uppercase tracking-wide text-slate-500">
                      Lado / aresta
                    </label>
                    <input
                      type="number"
                      min="1"
                      value={side}
                      onChange={(event) => {
                        setSide(Number(event.target.value));
                        setInspector(null);
                      }}
                      className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700 outline-none focus:border-slate-900"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-xs font-bold uppercase tracking-wide text-slate-500">
                      Altura
                    </label>
                    <input
                      type="number"
                      min="1"
                      value={height}
                      onChange={(event) => {
                        setHeight(Number(event.target.value));
                        setInspector(null);
                      }}
                      className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700 outline-none focus:border-slate-900"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-xs font-bold uppercase tracking-wide text-slate-500">
                      Raio
                    </label>
                    <input
                      type="number"
                      min="1"
                      value={radius}
                      onChange={(event) => {
                        setRadius(Number(event.target.value));
                        setInspector(null);
                      }}
                      className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700 outline-none focus:border-slate-900"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-xs font-bold uppercase tracking-wide text-slate-500">
                      Nº lados da base
                    </label>
                    <select
                      value={polygonSides}
                      onChange={(event) => {
                        setPolygonSides(Number(event.target.value));
                        setInspector(null);
                      }}
                      className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700 outline-none focus:border-slate-900"
                    >
                      {[3, 4, 5, 6, 8, 12].map((value) => (
                        <option key={value} value={value}>
                          {value} lados
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="mb-2 block text-xs font-bold uppercase tracking-wide text-slate-500">
                      Comprimento
                    </label>
                    <input
                      type="number"
                      min="1"
                      value={width}
                      onChange={(event) => {
                        setWidth(Number(event.target.value));
                        setInspector(null);
                      }}
                      className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700 outline-none focus:border-slate-900"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-xs font-bold uppercase tracking-wide text-slate-500">
                      Profundidade
                    </label>
                    <input
                      type="number"
                      min="1"
                      value={depth}
                      onChange={(event) => {
                        setDepth(Number(event.target.value));
                        setInspector(null);
                      }}
                      className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700 outline-none focus:border-slate-900"
                    />
                  </div>
                </div>
              </div>
            </div>
          </Card>

          <div className="space-y-6">
            <Card className="border-slate-200 p-6">
              <div className="flex items-center gap-2 text-sm font-semibold text-indigo-700">
                <Calculator className="h-4 w-4" />
                Fórmulas e resultados
              </div>

              <h2 className="mt-2 text-2xl font-black text-slate-900">
                Como calcular {activeDefinition.label.toLowerCase()}
              </h2>

              <div className="mt-5 grid gap-4">
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <p className="text-xs font-bold uppercase tracking-wide text-slate-500">
                    Volume
                  </p>
                  <div className="mt-2">
                    <MathFormula formula={outerMetrics.formulas.volume} display={true} />
                  </div>
                  <div className="mt-2">
                    <MathFormula
                      formula={outerMetrics.substitution.volume}
                      display={true}
                    />
                  </div>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <p className="text-xs font-bold uppercase tracking-wide text-slate-500">
                    Área total
                  </p>
                  <div className="mt-2">
                    <MathFormula formula={outerMetrics.formulas.area} display={true} />
                  </div>
                  <div className="mt-2">
                    <MathFormula
                      formula={outerMetrics.substitution.area}
                      display={true}
                    />
                  </div>
                </div>
              </div>

              <p className="mt-5 text-sm leading-7 text-slate-700">
                {outerMetrics.explanation}
              </p>
            </Card>

            <Card className="border-slate-200 p-6">
              <div className="flex items-center gap-2 text-sm font-semibold text-cyan-700">
                <MousePointerClick className="h-4 w-4" />
                Inspetor geométrico
              </div>

              <h2 className="mt-2 text-2xl font-black text-slate-900">
                Clique numa aresta
              </h2>

              {inspector ? (
                <div className="mt-5 rounded-2xl border border-cyan-200 bg-cyan-50 p-4">
                  <p className="text-sm font-black text-cyan-950">
                    {inspector.title}
                  </p>

                  <p className="mt-2 text-sm leading-7 text-cyan-900">
                    {inspector.description}
                  </p>

                  <div className="mt-4 space-y-3">
                    {inspector.formulas.map((item) => (
                      <div
                        key={item.label}
                        className="rounded-2xl border border-cyan-100 bg-white p-4"
                      >
                        <p className="text-xs font-bold uppercase tracking-wide text-cyan-700">
                          {item.label}
                        </p>
                        <div className="mt-2">
                          <MathFormula formula={item.formula} display={true} />
                        </div>
                        <div className="mt-2">
                          <MathFormula formula={item.substitution} display={true} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="mt-5 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm leading-7 text-slate-700">
                    Clique em uma aresta do sólido no painel 3D. O simulador vai
                    mostrar relações como diagonal da face, diagonal espacial,
                    apótema, raio circunscrito, geratriz ou diâmetro. Ou seja,
                    finalmente a aresta deixa de ser só um risquinho bonito.
                  </p>
                </div>
              )}
            </Card>

            <Card className="border-slate-200 p-6">
              <div className="flex items-center gap-2 text-sm font-semibold text-orange-700">
                <Layers className="h-4 w-4" />
                Sólidos inscritos
              </div>

              <h2 className="mt-2 text-2xl font-black text-slate-900">
                Relação entre formas
              </h2>

              <div className="mt-5 grid gap-2">
                {INSCRIBED_PRESETS.map((preset) => (
                  <button
                    key={preset.label}
                    type="button"
                    onClick={() => applyPreset(preset)}
                    className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-left text-sm font-bold text-slate-700 transition hover:border-orange-300 hover:bg-orange-50 hover:text-orange-950"
                  >
                    {preset.label}
                  </button>
                ))}
              </div>

              {mode === "inscribed" ? (
                <div className="mt-5 rounded-2xl border border-orange-200 bg-orange-50 p-4">
                  <p className="text-sm font-black text-orange-950">
                    {relationship.title}
                  </p>
                  <p className="mt-2 text-sm leading-7 text-orange-900">
                    {relationship.text}
                  </p>
                  <div className="mt-3">
                    <MathFormula formula={relationship.formula} display={true} />
                  </div>
                  <div className="mt-2">
                    <MathFormula
                      formula={relationship.substitution}
                      display={true}
                    />
                  </div>
                </div>
              ) : (
                <p className="mt-4 text-sm leading-7 text-slate-600">
                  Ative o modo de sólido inscrito para comparar volumes e ver
                  relações como raio, aresta, diagonal e altura compartilhada.
                </p>
              )}
            </Card>

            {mode === "inscribed" ? (
              <Card className="border-slate-200 p-6">
                <div className="flex items-center gap-2 text-sm font-semibold text-slate-700">
                  <Sparkles className="h-4 w-4" />
                  Mover sólido interno
                </div>

                <h2 className="mt-2 text-2xl font-black text-slate-900">
                  Controle de posição interna
                </h2>

                <div className="mt-5 space-y-4">
                  <div>
                    <div className="mb-2 flex items-center justify-between text-xs font-semibold text-slate-500">
                      <span>Escala interna</span>
                      <span>{formatNumber(innerScale * 100)}%</span>
                    </div>
                    <input
                      type="range"
                      min="0.2"
                      max="1.05"
                      step="0.01"
                      value={innerScale}
                      onChange={(event) =>
                        setInnerScale(Number(event.target.value))
                      }
                      className="w-full"
                    />
                  </div>

                  <div>
                    <div className="mb-2 flex items-center justify-between text-xs font-semibold text-slate-500">
                      <span>Deslocamento X</span>
                      <span>{innerOffsetX.toFixed(2)}</span>
                    </div>
                    <input
                      type="range"
                      min="-0.8"
                      max="0.8"
                      step="0.01"
                      value={innerOffsetX}
                      onChange={(event) =>
                        setInnerOffsetX(Number(event.target.value))
                      }
                      className="w-full"
                    />
                  </div>

                  <div>
                    <div className="mb-2 flex items-center justify-between text-xs font-semibold text-slate-500">
                      <span>Deslocamento Y</span>
                      <span>{innerOffsetY.toFixed(2)}</span>
                    </div>
                    <input
                      type="range"
                      min="-0.8"
                      max="0.8"
                      step="0.01"
                      value={innerOffsetY}
                      onChange={(event) =>
                        setInnerOffsetY(Number(event.target.value))
                      }
                      className="w-full"
                    />
                  </div>

                  <div>
                    <div className="mb-2 flex items-center justify-between text-xs font-semibold text-slate-500">
                      <span>Deslocamento Z</span>
                      <span>{innerOffsetZ.toFixed(2)}</span>
                    </div>
                    <input
                      type="range"
                      min="-0.8"
                      max="0.8"
                      step="0.01"
                      value={innerOffsetZ}
                      onChange={(event) =>
                        setInnerOffsetZ(Number(event.target.value))
                      }
                      className="w-full"
                    />
                  </div>

                  <Button
                    type="button"
                    onClick={centralizeInner}
                    className="w-full rounded-2xl"
                  >
                    Centralizar e ajustar inscrição
                  </Button>
                </div>

                <div className="mt-5 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <p className="text-xs font-bold uppercase tracking-wide text-slate-500">
                    Comparação de volumes
                  </p>
                  <div className="mt-3 space-y-2 text-sm text-slate-700">
                    <div className="flex justify-between gap-3">
                      <span>Volume externo</span>
                      <strong>{formatNumber(outerMetrics.volume)} u³</strong>
                    </div>
                    <div className="flex justify-between gap-3">
                      <span>Volume interno</span>
                      <strong>{formatNumber(innerMetrics.volume)} u³</strong>
                    </div>
                    <div className="flex justify-between gap-3">
                      <span>Ocupação</span>
                      <strong>{formatNumber(occupation)}%</strong>
                    </div>
                  </div>
                </div>
              </Card>
            ) : null}

            <Card className="border-slate-200 p-6">
              <div className="flex items-center gap-2 text-sm font-semibold text-purple-700">
                <BadgeInfo className="h-4 w-4" />
                Como usar em questão
              </div>

              <h2 className="mt-2 text-2xl font-black text-slate-900">
                Raciocínio de prova
              </h2>

              <div className="mt-5 space-y-3">
                {[
                  "Identifique o sólido externo e o sólido interno.",
                  "Descubra qual medida é compartilhada: raio, altura, aresta, diâmetro ou diagonal.",
                  "Escreva a fórmula da área da base antes de tentar o volume.",
                  "Só depois compare volumes ou áreas. Pular etapa aqui é pedir para errar bonito.",
                ].map((step, index) => (
                  <div
                    key={step}
                    className="rounded-2xl border border-slate-200 bg-slate-50 p-4"
                  >
                    <p className="text-sm font-black text-slate-900">
                      Passo {index + 1}
                    </p>
                    <p className="mt-1 text-sm leading-6 text-slate-700">
                      {step}
                    </p>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </AdminLayout>
    </AdminGuard>
  );
}
