import { useEffect, useMemo, useState } from "react";
import AdminGuard from "@/components/admin/AdminGuard";
import AdminLayout from "@/components/admin/AdminLayout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Atom,
  BadgeInfo,
  Beaker,
  Brain,
  Eye,
  EyeOff,
  PauseCircle,
  PlayCircle,
  Rotate3D,
  RotateCcw,
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

type AtomPoint = {
  label: string;
  element: string;
  position: Vec3;
};

type LonePairPoint = {
  label: string;
  position: Vec3;
};

type MoleculeGeometry = {
  formula: string;
  name: string;
  centralAtom: string;
  vsepr: string;
  electronGeometry: string;
  molecularGeometry: string;
  idealAngle: string;
  realAngle: string;
  bondingPairs: number;
  lonePairs: number;
  atoms: AtomPoint[];
  lonePairPositions: LonePairPoint[];
  shortExplanation: string;
  angleExplanation: string;
  vestibularNote: string;
  commonMistake: string;
};

type RenderObject =
  | {
      type: "central";
      key: string;
      z: number;
      point: ProjectedPoint;
    }
  | {
      type: "atom";
      key: string;
      z: number;
      atom: AtomPoint;
      point: ProjectedPoint;
    }
  | {
      type: "lonePair";
      key: string;
      z: number;
      pair: LonePairPoint;
      point: ProjectedPoint;
    };

const MOLECULES: MoleculeGeometry[] = [
  {
    formula: "H₂O",
    name: "Água",
    centralAtom: "O",
    vsepr: "AX₂E₂",
    electronGeometry: "Tetraédrica",
    molecularGeometry: "Angular",
    idealAngle: "109,5°",
    realAngle: "≈ 104,5°",
    bondingPairs: 2,
    lonePairs: 2,
    atoms: [
      {
        label: "H",
        element: "H",
        position: { x: -1.08, y: -0.72, z: 0.62 },
      },
      {
        label: "H",
        element: "H",
        position: { x: 1.08, y: -0.72, z: 0.62 },
      },
    ],
    lonePairPositions: [
      {
        label: "par livre",
        position: { x: -0.92, y: 1.0, z: -0.55 },
      },
      {
        label: "par livre",
        position: { x: 0.92, y: 1.0, z: -0.55 },
      },
    ],
    shortExplanation:
      "O oxigênio tem quatro regiões eletrônicas ao redor: duas ligações O-H e dois pares livres.",
    angleExplanation:
      "A distribuição eletrônica ideal é tetraédrica, com ângulo de 109,5°. Porém, os pares livres ocupam mais espaço e repelem mais fortemente do que os pares ligantes. Essa repulsão comprime as ligações O-H, reduzindo o ângulo para aproximadamente 104,5°.",
    vestibularNote:
      "Em prova, o ponto central é perceber que a geometria eletrônica é tetraédrica, mas a geometria molecular é angular, porque os pares livres não aparecem como átomos ligados.",
    commonMistake:
      "Achar que H₂O seria linear porque tem apenas dois hidrogênios ligados ao oxigênio. O erro é ignorar os dois pares livres do oxigênio.",
  },
  {
    formula: "NH₃",
    name: "Amônia",
    centralAtom: "N",
    vsepr: "AX₃E",
    electronGeometry: "Tetraédrica",
    molecularGeometry: "Piramidal trigonal",
    idealAngle: "109,5°",
    realAngle: "≈ 107°",
    bondingPairs: 3,
    lonePairs: 1,
    atoms: [
      {
        label: "H",
        element: "H",
        position: { x: -1.15, y: -0.78, z: 0.46 },
      },
      {
        label: "H",
        element: "H",
        position: { x: 1.15, y: -0.78, z: 0.46 },
      },
      {
        label: "H",
        element: "H",
        position: { x: 0, y: -1.05, z: -1.05 },
      },
    ],
    lonePairPositions: [
      {
        label: "par livre",
        position: { x: 0, y: 1.15, z: 0 },
      },
    ],
    shortExplanation:
      "O nitrogênio tem quatro regiões eletrônicas: três ligações N-H e um par livre.",
    angleExplanation:
      "A geometria eletrônica é tetraédrica, mas como uma das regiões é um par livre, a forma molecular observada fica piramidal trigonal. O par livre repele os pares ligantes e comprime o ângulo H-N-H de 109,5° para aproximadamente 107°.",
    vestibularNote:
      "A sequência clássica é CH₄, NH₃ e H₂O: tetraédrica, piramidal trigonal e angular. O ângulo diminui conforme aumenta o número de pares livres.",
    commonMistake:
      "Confundir geometria eletrônica com geometria molecular. Em NH₃, a distribuição eletrônica é tetraédrica, mas a forma da molécula é piramidal trigonal.",
  },
  {
    formula: "CH₄",
    name: "Metano",
    centralAtom: "C",
    vsepr: "AX₄",
    electronGeometry: "Tetraédrica",
    molecularGeometry: "Tetraédrica",
    idealAngle: "109,5°",
    realAngle: "109,5°",
    bondingPairs: 4,
    lonePairs: 0,
    atoms: [
      {
        label: "H",
        element: "H",
        position: { x: 1, y: 1, z: 1 },
      },
      {
        label: "H",
        element: "H",
        position: { x: -1, y: -1, z: 1 },
      },
      {
        label: "H",
        element: "H",
        position: { x: -1, y: 1, z: -1 },
      },
      {
        label: "H",
        element: "H",
        position: { x: 1, y: -1, z: -1 },
      },
    ],
    lonePairPositions: [],
    shortExplanation:
      "O carbono tem quatro regiões eletrônicas, todas correspondentes a ligações C-H.",
    angleExplanation:
      "Como não há pares livres no carbono, as quatro ligações se distribuem da forma mais afastada possível no espaço, formando um tetraedro regular. Por isso, o ângulo H-C-H é de aproximadamente 109,5°.",
    vestibularNote:
      "CH₄ é o exemplo clássico de geometria tetraédrica sem distorção por pares livres.",
    commonMistake:
      "Desenhar o metano como se fosse plano. A molécula é tridimensional, com os hidrogênios apontando para os vértices de um tetraedro.",
  },
  {
    formula: "CO₂",
    name: "Dióxido de carbono",
    centralAtom: "C",
    vsepr: "AX₂",
    electronGeometry: "Linear",
    molecularGeometry: "Linear",
    idealAngle: "180°",
    realAngle: "180°",
    bondingPairs: 2,
    lonePairs: 0,
    atoms: [
      {
        label: "O",
        element: "O",
        position: { x: -1.7, y: 0, z: 0 },
      },
      {
        label: "O",
        element: "O",
        position: { x: 1.7, y: 0, z: 0 },
      },
    ],
    lonePairPositions: [],
    shortExplanation:
      "O carbono central possui duas regiões eletrônicas ao redor, correspondentes às duas ligações duplas C=O.",
    angleExplanation:
      "Na teoria VSEPR, uma ligação dupla conta como uma região eletrônica. Assim, o carbono tem duas regiões ao redor dele. A maior separação possível entre duas regiões é 180°, por isso a molécula é linear.",
    vestibularNote:
      "Mesmo tendo ligações duplas, o CO₂ é tratado como AX₂ para geometria molecular.",
    commonMistake:
      "Contar cada ligação dupla como duas direções diferentes. Para geometria molecular, cada ligação dupla ocupa uma região eletrônica.",
  },
  {
    formula: "BF₃",
    name: "Trifluoreto de boro",
    centralAtom: "B",
    vsepr: "AX₃",
    electronGeometry: "Trigonal plana",
    molecularGeometry: "Trigonal plana",
    idealAngle: "120°",
    realAngle: "120°",
    bondingPairs: 3,
    lonePairs: 0,
    atoms: [
      {
        label: "F",
        element: "F",
        position: { x: 0, y: 1.45, z: 0 },
      },
      {
        label: "F",
        element: "F",
        position: { x: -1.25, y: -0.72, z: 0 },
      },
      {
        label: "F",
        element: "F",
        position: { x: 1.25, y: -0.72, z: 0 },
      },
    ],
    lonePairPositions: [],
    shortExplanation:
      "O boro possui três regiões eletrônicas ligantes e nenhum par livre no átomo central.",
    angleExplanation:
      "Três regiões eletrônicas se afastam ao máximo em um plano, formando ângulos de 120° entre si. Por isso, BF₃ apresenta geometria trigonal plana.",
    vestibularNote:
      "BF₃ é um exemplo importante de molécula trigonal plana e também aparece em discussões sobre exceções ao octeto.",
    commonMistake:
      "Forçar uma geometria tetraédrica por pensar apenas no octeto. O boro em BF₃ tem três regiões eletrônicas ao redor.",
  },
  {
    formula: "SO₂",
    name: "Dióxido de enxofre",
    centralAtom: "S",
    vsepr: "AX₂E",
    electronGeometry: "Trigonal plana",
    molecularGeometry: "Angular",
    idealAngle: "120°",
    realAngle: "≈ 119°",
    bondingPairs: 2,
    lonePairs: 1,
    atoms: [
      {
        label: "O",
        element: "O",
        position: { x: -1.25, y: -0.55, z: 0 },
      },
      {
        label: "O",
        element: "O",
        position: { x: 1.25, y: -0.55, z: 0 },
      },
    ],
    lonePairPositions: [
      {
        label: "par livre",
        position: { x: 0, y: 1.25, z: 0 },
      },
    ],
    shortExplanation:
      "O enxofre tem três regiões eletrônicas: duas regiões ligantes S-O e um par livre.",
    angleExplanation:
      "A geometria eletrônica é trigonal plana, com ângulo ideal próximo de 120°. Como uma das três regiões é um par livre, a molécula fica angular. O par livre repele mais fortemente as ligações, gerando pequena compressão no ângulo.",
    vestibularNote:
      "SO₂ é um exemplo clássico de molécula angular derivada de uma geometria eletrônica trigonal plana.",
    commonMistake:
      "Achar que toda molécula com dois átomos ligados ao central é linear. Pares livres mudam a forma molecular.",
  },
  {
    formula: "PCl₅",
    name: "Pentacloreto de fósforo",
    centralAtom: "P",
    vsepr: "AX₅",
    electronGeometry: "Bipiramidal trigonal",
    molecularGeometry: "Bipiramidal trigonal",
    idealAngle: "90°, 120° e 180°",
    realAngle: "90°, 120° e 180°",
    bondingPairs: 5,
    lonePairs: 0,
    atoms: [
      {
        label: "Cl",
        element: "Cl",
        position: { x: 0, y: 1.65, z: 0 },
      },
      {
        label: "Cl",
        element: "Cl",
        position: { x: 0, y: -1.65, z: 0 },
      },
      {
        label: "Cl",
        element: "Cl",
        position: { x: 1.45, y: 0, z: 0 },
      },
      {
        label: "Cl",
        element: "Cl",
        position: { x: -0.72, y: 0, z: 1.25 },
      },
      {
        label: "Cl",
        element: "Cl",
        position: { x: -0.72, y: 0, z: -1.25 },
      },
    ],
    lonePairPositions: [],
    shortExplanation:
      "O fósforo central tem cinco regiões eletrônicas ligantes e nenhum par livre.",
    angleExplanation:
      "Cinco regiões eletrônicas se organizam em uma bipirâmide trigonal: duas posições axiais e três posições equatoriais. Por isso, aparecem ângulos de 90°, 120° e 180°.",
    vestibularNote:
      "PCl₅ é exemplo clássico de expansão do octeto e geometria bipiramidal trigonal.",
    commonMistake:
      "Tentar encaixar cinco ligações em uma geometria tetraédrica. Com cinco regiões, o arranjo correto é bipiramidal trigonal.",
  },
  {
    formula: "SF₆",
    name: "Hexafluoreto de enxofre",
    centralAtom: "S",
    vsepr: "AX₆",
    electronGeometry: "Octaédrica",
    molecularGeometry: "Octaédrica",
    idealAngle: "90° e 180°",
    realAngle: "90° e 180°",
    bondingPairs: 6,
    lonePairs: 0,
    atoms: [
      {
        label: "F",
        element: "F",
        position: { x: 1.5, y: 0, z: 0 },
      },
      {
        label: "F",
        element: "F",
        position: { x: -1.5, y: 0, z: 0 },
      },
      {
        label: "F",
        element: "F",
        position: { x: 0, y: 1.5, z: 0 },
      },
      {
        label: "F",
        element: "F",
        position: { x: 0, y: -1.5, z: 0 },
      },
      {
        label: "F",
        element: "F",
        position: { x: 0, y: 0, z: 1.5 },
      },
      {
        label: "F",
        element: "F",
        position: { x: 0, y: 0, z: -1.5 },
      },
    ],
    lonePairPositions: [],
    shortExplanation:
      "O enxofre central apresenta seis regiões eletrônicas ligantes ao redor.",
    angleExplanation:
      "Seis regiões eletrônicas se afastam ao máximo formando uma geometria octaédrica. As ligações ficam orientadas em três eixos perpendiculares, gerando ângulos de 90° e 180°.",
    vestibularNote:
      "SF₆ é exemplo típico de geometria octaédrica e expansão do octeto.",
    commonMistake:
      "Pensar que seis ligantes ficariam em uma estrutura plana. A geometria octaédrica é tridimensional.",
  },
  {
    formula: "XeF₄",
    name: "Tetrafluoreto de xenônio",
    centralAtom: "Xe",
    vsepr: "AX₄E₂",
    electronGeometry: "Octaédrica",
    molecularGeometry: "Quadrado planar",
    idealAngle: "90° e 180°",
    realAngle: "90° e 180°",
    bondingPairs: 4,
    lonePairs: 2,
    atoms: [
      {
        label: "F",
        element: "F",
        position: { x: 1.45, y: 0, z: 0 },
      },
      {
        label: "F",
        element: "F",
        position: { x: -1.45, y: 0, z: 0 },
      },
      {
        label: "F",
        element: "F",
        position: { x: 0, y: 1.45, z: 0 },
      },
      {
        label: "F",
        element: "F",
        position: { x: 0, y: -1.45, z: 0 },
      },
    ],
    lonePairPositions: [
      {
        label: "par livre",
        position: { x: 0, y: 0, z: 1.45 },
      },
      {
        label: "par livre",
        position: { x: 0, y: 0, z: -1.45 },
      },
    ],
    shortExplanation:
      "O xenônio tem seis regiões eletrônicas: quatro ligações Xe-F e dois pares livres.",
    angleExplanation:
      "A geometria eletrônica é octaédrica. Os dois pares livres ocupam posições opostas para reduzir a repulsão entre eles. Assim, os quatro átomos de flúor ficam no mesmo plano, formando uma geometria quadrado planar.",
    vestibularNote:
      "XeF₄ é um caso muito bom para mostrar a diferença entre geometria eletrônica e geometria molecular.",
    commonMistake:
      "Achar que quatro ligantes sempre significam geometria tetraédrica. Em XeF₄ existem dois pares livres no átomo central, e o arranjo vem de uma geometria eletrônica octaédrica.",
  },
];

function rotatePoint(point: Vec3, angleX: number, angleY: number): Vec3 {
  const xRad = (angleX * Math.PI) / 180;
  const yRad = (angleY * Math.PI) / 180;

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

function projectPoint(point: Vec3): ProjectedPoint {
  const distance = 6;
  const scale = 110;
  const perspective = distance / (distance - point.z);

  return {
    x: 380 + point.x * scale * perspective,
    y: 280 - point.y * scale * perspective,
    z: point.z,
    perspective,
  };
}

function normalizeAngleDifference(angle: number) {
  let value = angle;

  while (value > Math.PI) value -= Math.PI * 2;
  while (value < -Math.PI) value += Math.PI * 2;

  return value;
}

function buildAngleArcPath(
  center: ProjectedPoint,
  first: ProjectedPoint,
  second: ProjectedPoint,
  radius = 76
) {
  const vectorA = {
    x: first.x - center.x,
    y: first.y - center.y,
  };

  const vectorB = {
    x: second.x - center.x,
    y: second.y - center.y,
  };

  const lengthA = Math.hypot(vectorA.x, vectorA.y);
  const lengthB = Math.hypot(vectorB.x, vectorB.y);

  if (lengthA === 0 || lengthB === 0) {
    return {
      path: "",
      labelX: center.x,
      labelY: center.y,
    };
  }

  const startAngle = Math.atan2(vectorA.y, vectorA.x);
  const endAngle = Math.atan2(vectorB.y, vectorB.x);
  const delta = normalizeAngleDifference(endAngle - startAngle);

  const sweepFlag = delta >= 0 ? 1 : 0;
  const largeArcFlag = Math.abs(delta) > Math.PI ? 1 : 0;

  const start = {
    x: center.x + Math.cos(startAngle) * radius,
    y: center.y + Math.sin(startAngle) * radius,
  };

  const end = {
    x: center.x + Math.cos(endAngle) * radius,
    y: center.y + Math.sin(endAngle) * radius,
  };

  const midAngle = startAngle + delta / 2;

  const label = {
    x: center.x + Math.cos(midAngle) * (radius + 46),
    y: center.y + Math.sin(midAngle) * (radius + 46),
  };

  return {
    path: `M ${start.x} ${start.y} A ${radius} ${radius} 0 ${largeArcFlag} ${sweepFlag} ${end.x} ${end.y}`,
    labelX: label.x,
    labelY: label.y,
  };
}

function getElementVisual(element: string) {
  switch (element) {
    case "H":
      return {
        fill: "#f8fafc",
        stroke: "#cbd5e1",
        text: "#0f172a",
      };
    case "O":
      return {
        fill: "#ef4444",
        stroke: "#fecaca",
        text: "#ffffff",
      };
    case "N":
      return {
        fill: "#3b82f6",
        stroke: "#bfdbfe",
        text: "#ffffff",
      };
    case "C":
      return {
        fill: "#0f172a",
        stroke: "#64748b",
        text: "#ffffff",
      };
    case "F":
      return {
        fill: "#10b981",
        stroke: "#a7f3d0",
        text: "#ffffff",
      };
    case "Cl":
      return {
        fill: "#16a34a",
        stroke: "#bbf7d0",
        text: "#ffffff",
      };
    case "B":
      return {
        fill: "#f97316",
        stroke: "#fed7aa",
        text: "#ffffff",
      };
    case "P":
      return {
        fill: "#7c3aed",
        stroke: "#ddd6fe",
        text: "#ffffff",
      };
    case "S":
      return {
        fill: "#eab308",
        stroke: "#fef08a",
        text: "#0f172a",
      };
    case "Xe":
      return {
        fill: "#6d28d9",
        stroke: "#ddd6fe",
        text: "#ffffff",
      };
    default:
      return {
        fill: "#06b6d4",
        stroke: "#a5f3fc",
        text: "#ffffff",
      };
  }
}

export default function AdminMolecularGeometryPrototypePage() {
  const [selectedFormula, setSelectedFormula] = useState("H₂O");
  const [rotationX, setRotationX] = useState(20);
  const [rotationY, setRotationY] = useState(-25);
  const [showLonePairs, setShowLonePairs] = useState(true);
  const [autoRotate, setAutoRotate] = useState(false);

  const molecule = useMemo(() => {
    return (
      MOLECULES.find((item) => item.formula === selectedFormula) ??
      MOLECULES[0]
    );
  }, [selectedFormula]);

  useEffect(() => {
    if (!autoRotate) return;

    const intervalId = window.setInterval(() => {
      setRotationY((current) => {
        const next = current + 1.2;
        return next > 180 ? -180 : next;
      });
    }, 60);

    return () => window.clearInterval(intervalId);
  }, [autoRotate]);

  const centralPoint = projectPoint(
    rotatePoint({ x: 0, y: 0, z: 0 }, rotationX, rotationY)
  );

  const projectedAtoms = molecule.atoms.map((atom, index) => {
    const rotated = rotatePoint(atom.position, rotationX, rotationY);

    return {
      atom,
      point: projectPoint(rotated),
      key: `${atom.element}-${atom.label}-${index}`,
    };
  });

  const projectedLonePairs = molecule.lonePairPositions.map((pair, index) => {
    const rotated = rotatePoint(pair.position, rotationX, rotationY);

    return {
      pair,
      point: projectPoint(rotated),
      key: `lone-pair-${index}`,
    };
  });

  const angleArc =
    projectedAtoms.length >= 2
      ? buildAngleArcPath(
          centralPoint,
          projectedAtoms[0].point,
          projectedAtoms[1].point
        )
      : null;

  const discoverySteps = [
    {
      title: "1. Escolher o átomo central",
      description: `O átomo central considerado é ${molecule.centralAtom}. É ao redor dele que analisamos as regiões eletrônicas.`,
    },
    {
      title: "2. Contar regiões eletrônicas",
      description: `A molécula possui ${molecule.bondingPairs} região(ões) ligante(s) e ${molecule.lonePairs} par(es) livre(s) ao redor do átomo central.`,
    },
    {
      title: "3. Montar o modelo VSEPR",
      description: `Com esses dados, o modelo fica ${molecule.vsepr}. A letra A representa o átomo central, X representa átomos ligados e E representa pares livres.`,
    },
    {
      title: "4. Determinar a geometria eletrônica",
      description: `Considerando ligações e pares livres, a geometria eletrônica é ${molecule.electronGeometry.toLowerCase()}.`,
    },
    {
      title: "5. Determinar a geometria molecular",
      description: `Observando apenas os átomos ligados, a geometria molecular é ${molecule.molecularGeometry.toLowerCase()}.`,
    },
    {
      title: "6. Entender o ângulo",
      description: `O ângulo ideal seria ${molecule.idealAngle}, mas o ângulo observado/aproximado é ${molecule.realAngle}. A diferença aparece por causa da repulsão entre as regiões eletrônicas, especialmente quando há pares livres.`,
    },
  ];

  const renderObjects: RenderObject[] = [
    ...projectedAtoms.map((item): RenderObject => {
      return {
        type: "atom",
        key: item.key,
        z: item.point.z,
        atom: item.atom,
        point: item.point,
      };
    }),
    ...(showLonePairs
      ? projectedLonePairs.map((item): RenderObject => {
          return {
            type: "lonePair",
            key: item.key,
            z: item.point.z,
            pair: item.pair,
            point: item.point,
          };
        })
      : []),
    {
      type: "central",
      key: "central",
      z: centralPoint.z,
      point: centralPoint,
    },
  ].sort((a, b) => a.z - b.z);

  function resetRotation() {
    setRotationX(20);
    setRotationY(-25);
    setAutoRotate(false);
  }

  return (
    <AdminGuard allowedRoles={["admin"]}>
      <AdminLayout
        title="Protótipo: Geometria molecular"
        subtitle="Visualização interna para testar moléculas 3D, ângulos, pares livres e explicações didáticas."
      >
        <div className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
          <Card className="overflow-hidden border-slate-200 bg-white">
            <div className="border-b border-slate-100 p-5">
              <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                <div>
                  <div className="flex items-center gap-2 text-sm font-semibold text-purple-700">
                    <Atom className="h-4 w-4" />
                    Visualização 3D didática
                  </div>

                  <h2 className="mt-1 text-2xl font-black text-slate-900">
                    {molecule.formula} · {molecule.name}
                  </h2>

                  <p className="mt-1 text-sm text-slate-500">
                    Modelo {molecule.vsepr}, geometria molecular{" "}
                    {molecule.molecularGeometry.toLowerCase()}.
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  <select
                    value={selectedFormula}
                    onChange={(event) => setSelectedFormula(event.target.value)}
                    className="rounded-2xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 outline-none focus:border-slate-900"
                  >
                    {MOLECULES.map((item) => (
                      <option key={item.formula} value={item.formula}>
                        {item.formula} · {item.name}
                      </option>
                    ))}
                  </select>

                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setShowLonePairs((current) => !current)}
                    className="gap-2 rounded-2xl"
                  >
                    {showLonePairs ? (
                      <EyeOff className="h-4 w-4" />
                    ) : (
                      <Eye className="h-4 w-4" />
                    )}
                    {showLonePairs ? "Ocultar pares" : "Mostrar pares"}
                  </Button>
                </div>
              </div>
            </div>

            <div className="grid gap-0 lg:grid-cols-[1fr_280px]">
              <div className="relative min-h-[560px] overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-purple-950">
                <div className="absolute left-6 top-6 z-20 rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-white backdrop-blur">
                  <p className="text-xs font-semibold uppercase tracking-wide text-purple-200">
                    Ângulo
                  </p>
                  <p className="mt-1 text-2xl font-black">
                    {molecule.realAngle}
                  </p>
                </div>

                <div className="absolute bottom-6 left-6 z-20 rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-white backdrop-blur">
                  <p className="text-xs font-semibold uppercase tracking-wide text-purple-200">
                    Tipo VSEPR
                  </p>
                  <p className="mt-1 text-xl font-black">{molecule.vsepr}</p>
                </div>

                <svg
                  className="absolute inset-0 h-full w-full"
                  viewBox="0 0 760 560"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <defs>
                    <radialGradient id="centralGlow" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#67e8f9" stopOpacity="0.8" />
                      <stop offset="100%" stopColor="#06b6d4" stopOpacity="0" />
                    </radialGradient>

                    <filter
                      id="softShadow"
                      x="-50%"
                      y="-50%"
                      width="200%"
                      height="200%"
                    >
                      <feDropShadow
                        dx="0"
                        dy="8"
                        stdDeviation="8"
                        floodColor="#000000"
                        floodOpacity="0.35"
                      />
                    </filter>
                  </defs>

                  <rect width="760" height="560" fill="transparent" />

                  <g opacity="0.18">
                    <circle cx="120" cy="100" r="90" fill="#a855f7" />
                    <circle cx="660" cy="460" r="120" fill="#06b6d4" />
                    <circle cx="420" cy="80" r="60" fill="#22c55e" />
                  </g>

                  {projectedAtoms.map((item) => (
                    <line
                      key={`bond-${item.key}`}
                      x1={centralPoint.x}
                      y1={centralPoint.y}
                      x2={item.point.x}
                      y2={item.point.y}
                      stroke="#a5f3fc"
                      strokeWidth={Math.max(4, 7 * item.point.perspective)}
                      strokeLinecap="round"
                      opacity="0.88"
                    />
                  ))}

                  {angleArc?.path && (
                    <g>
                      <path
                        d={angleArc.path}
                        fill="none"
                        stroke="#facc15"
                        strokeWidth="5"
                        strokeLinecap="round"
                        opacity="0.95"
                      />

                      <circle
                        cx={angleArc.labelX}
                        cy={angleArc.labelY}
                        r="34"
                        fill="#facc15"
                        opacity="0.95"
                      />

                      <text
                        x={angleArc.labelX}
                        y={angleArc.labelY + 5}
                        textAnchor="middle"
                        fontSize="13"
                        fontWeight="900"
                        fill="#1e293b"
                      >
                        {molecule.realAngle}
                      </text>
                    </g>
                  )}

                  {showLonePairs &&
                    projectedLonePairs.map((item) => (
                      <line
                        key={`lone-line-${item.key}`}
                        x1={centralPoint.x}
                        y1={centralPoint.y}
                        x2={item.point.x}
                        y2={item.point.y}
                        stroke="#e9d5ff"
                        strokeWidth="3"
                        strokeDasharray="9 9"
                        strokeLinecap="round"
                        opacity="0.58"
                      />
                    ))}

                  {renderObjects.map((object) => {
                    if (object.type === "central") {
                      const radius = 42;

                      return (
                        <g key={object.key} filter="url(#softShadow)">
                          <circle
                            cx={object.point.x}
                            cy={object.point.y}
                            r={radius + 18}
                            fill="url(#centralGlow)"
                          />

                          <circle
                            cx={object.point.x}
                            cy={object.point.y}
                            r={radius}
                            fill="#06b6d4"
                            stroke="#a5f3fc"
                            strokeWidth="5"
                          />

                          <text
                            x={object.point.x}
                            y={object.point.y + 8}
                            textAnchor="middle"
                            fontSize="24"
                            fontWeight="900"
                            fill="#ffffff"
                          >
                            {molecule.centralAtom}
                          </text>
                        </g>
                      );
                    }

                    if (object.type === "lonePair") {
                      const radius = 26 * object.point.perspective;

                      return (
                        <g key={object.key} filter="url(#softShadow)">
                          <circle
                            cx={object.point.x}
                            cy={object.point.y}
                            r={radius + 10}
                            fill="#a855f7"
                            opacity="0.18"
                          />

                          <circle
                            cx={object.point.x - radius * 0.28}
                            cy={object.point.y}
                            r={radius * 0.32}
                            fill="#e9d5ff"
                            stroke="#ffffff"
                            strokeWidth="2"
                            opacity="0.9"
                          />

                          <circle
                            cx={object.point.x + radius * 0.28}
                            cy={object.point.y}
                            r={radius * 0.32}
                            fill="#e9d5ff"
                            stroke="#ffffff"
                            strokeWidth="2"
                            opacity="0.9"
                          />

                          <text
                            x={object.point.x}
                            y={object.point.y + radius + 18}
                            textAnchor="middle"
                            fontSize="11"
                            fontWeight="800"
                            fill="#f5d0fe"
                          >
                            par livre
                          </text>
                        </g>
                      );
                    }

                    const visual = getElementVisual(object.atom.element);
                    const radius = Math.max(24, 32 * object.point.perspective);

                    return (
                      <g key={object.key} filter="url(#softShadow)">
                        <circle
                          cx={object.point.x}
                          cy={object.point.y}
                          r={radius}
                          fill={visual.fill}
                          stroke={visual.stroke}
                          strokeWidth="4"
                        />

                        <text
                          x={object.point.x}
                          y={object.point.y + 6}
                          textAnchor="middle"
                          fontSize={object.atom.element.length > 1 ? 17 : 20}
                          fontWeight="900"
                          fill={visual.text}
                        >
                          {object.atom.label}
                        </text>
                      </g>
                    );
                  })}
                </svg>
              </div>

              <div className="border-l border-slate-100 bg-slate-50 p-5">
                <div className="flex items-center gap-2 text-sm font-bold text-slate-900">
                  <Rotate3D className="h-4 w-4" />
                  Controle de rotação
                </div>

                <div className="mt-5 space-y-5">
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
                      onChange={(event) =>
                        setRotationX(Number(event.target.value))
                      }
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
                      onChange={(event) =>
                        setRotationY(Number(event.target.value))
                      }
                      className="w-full"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-2">
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
                  </div>

                  <div className="rounded-2xl border border-purple-100 bg-white p-4">
                    <p className="text-xs font-semibold uppercase tracking-wide text-purple-700">
                      Leitura rápida
                    </p>

                    <div className="mt-3 space-y-3 text-sm">
                      <div className="flex justify-between gap-3">
                        <span className="text-slate-500">Pares ligantes</span>
                        <strong className="text-slate-900">
                          {molecule.bondingPairs}
                        </strong>
                      </div>

                      <div className="flex justify-between gap-3">
                        <span className="text-slate-500">Pares livres</span>
                        <strong className="text-slate-900">
                          {molecule.lonePairs}
                        </strong>
                      </div>

                      <div className="flex justify-between gap-3">
                        <span className="text-slate-500">
                          Geometria eletrônica
                        </span>
                        <strong className="text-right text-slate-900">
                          {molecule.electronGeometry}
                        </strong>
                      </div>

                      <div className="flex justify-between gap-3">
                        <span className="text-slate-500">
                          Geometria molecular
                        </span>
                        <strong className="text-right text-slate-900">
                          {molecule.molecularGeometry}
                        </strong>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-2xl border border-slate-200 bg-white p-4">
                    <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                      Legenda visual
                    </p>

                    <div className="mt-3 space-y-3 text-xs text-slate-700">
                      <div className="flex items-center gap-3">
                        <span className="h-4 w-4 rounded-full bg-cyan-500 ring-2 ring-cyan-200" />
                        <span>Átomo central</span>
                      </div>

                      <div className="flex items-center gap-3">
                        <span className="h-4 w-4 rounded-full bg-emerald-500 ring-2 ring-emerald-200" />
                        <span>Átomo ligado</span>
                      </div>

                      <div className="flex items-center gap-3">
                        <span className="flex gap-1">
                          <span className="h-3 w-3 rounded-full bg-purple-300 ring-1 ring-purple-100" />
                          <span className="h-3 w-3 rounded-full bg-purple-300 ring-1 ring-purple-100" />
                        </span>
                        <span>Par livre de elétrons</span>
                      </div>

                      <div className="flex items-center gap-3">
                        <span className="h-[3px] w-8 rounded-full bg-cyan-300" />
                        <span>Ligação química</span>
                      </div>

                      <div className="flex items-center gap-3">
                        <span className="h-[3px] w-8 rounded-full bg-yellow-400" />
                        <span>Ângulo destacado</span>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-2xl border border-cyan-100 bg-cyan-50 p-4">
                    <p className="text-xs font-semibold uppercase tracking-wide text-cyan-700">
                      Protótipo interno
                    </p>

                    <p className="mt-2 text-xs leading-5 text-cyan-900">
                      Esta visualização é didática. Átomos, ligações, pares
                      livres e ângulos ficam no mesmo SVG, então o alinhamento
                      não quebra quando a tela muda de tamanho.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          <div className="space-y-6">
            <Card className="border-slate-200 p-6">
              <div className="flex items-center gap-2 text-sm font-semibold text-cyan-700">
                <Brain className="h-4 w-4" />
                Como descobrir essa geometria?
              </div>

              <h2 className="mt-2 text-2xl font-black text-slate-900">
                Raciocínio passo a passo
              </h2>

              <div className="mt-5 space-y-3">
                {discoverySteps.map((step) => (
                  <div
                    key={step.title}
                    className="rounded-2xl border border-slate-200 bg-slate-50 p-4"
                  >
                    <p className="text-sm font-black text-slate-900">
                      {step.title}
                    </p>

                    <p className="mt-2 text-sm leading-6 text-slate-700">
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="border-slate-200 p-6">
              <div className="flex items-center gap-2 text-sm font-semibold text-purple-700">
                <BadgeInfo className="h-4 w-4" />
                Explicação da geometria
              </div>

              <h2 className="mt-2 text-2xl font-black text-slate-900">
                Por que {molecule.formula} tem esse formato?
              </h2>

              <p className="mt-4 text-sm leading-7 text-slate-700">
                {molecule.shortExplanation}
              </p>

              <div className="mt-5 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Relação entre pares eletrônicos e ângulo
                </p>

                <p className="mt-2 text-sm leading-7 text-slate-700">
                  {molecule.angleExplanation}
                </p>
              </div>
            </Card>

            <Card className="border-slate-200 p-6">
              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                    Ângulo ideal
                  </p>

                  <p className="mt-2 text-2xl font-black text-slate-900">
                    {molecule.idealAngle}
                  </p>
                </div>

                <div className="rounded-2xl border border-cyan-200 bg-cyan-50 p-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-cyan-700">
                    Ângulo real/aproximado
                  </p>

                  <p className="mt-2 text-2xl font-black text-cyan-900">
                    {molecule.realAngle}
                  </p>
                </div>
              </div>

              <div className="mt-5 rounded-2xl border border-purple-200 bg-purple-50 p-4">
                <div className="flex items-start gap-3">
                  <Brain className="mt-0.5 h-5 w-5 text-purple-700" />

                  <div>
                    <p className="font-bold text-purple-950">
                      Como pensar em vestibular
                    </p>

                    <p className="mt-2 text-sm leading-7 text-purple-900">
                      {molecule.vestibularNote}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-5 rounded-2xl border border-orange-200 bg-orange-50 p-4">
                <div className="flex items-start gap-3">
                  <Sparkles className="mt-0.5 h-5 w-5 text-orange-600" />

                  <div>
                    <p className="font-bold text-orange-950">Erro comum</p>

                    <p className="mt-2 text-sm leading-7 text-orange-900">
                      {molecule.commonMistake}
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="border-slate-200 p-6">
              <div className="flex items-center gap-2 text-sm font-semibold text-slate-700">
                <Beaker className="h-4 w-4" />
                Padrão usado
              </div>

              <div className="mt-4 grid gap-3 text-sm">
                <div className="flex justify-between rounded-2xl bg-slate-50 px-4 py-3">
                  <span className="text-slate-500">Fórmula</span>
                  <strong className="text-slate-900">{molecule.formula}</strong>
                </div>

                <div className="flex justify-between rounded-2xl bg-slate-50 px-4 py-3">
                  <span className="text-slate-500">Átomo central</span>
                  <strong className="text-slate-900">
                    {molecule.centralAtom}
                  </strong>
                </div>

                <div className="flex justify-between rounded-2xl bg-slate-50 px-4 py-3">
                  <span className="text-slate-500">Modelo VSEPR</span>
                  <strong className="text-slate-900">{molecule.vsepr}</strong>
                </div>

                <div className="flex justify-between rounded-2xl bg-slate-50 px-4 py-3">
                  <span className="text-slate-500">Geometria eletrônica</span>
                  <strong className="text-right text-slate-900">
                    {molecule.electronGeometry}
                  </strong>
                </div>

                <div className="flex justify-between rounded-2xl bg-slate-50 px-4 py-3">
                  <span className="text-slate-500">Geometria molecular</span>
                  <strong className="text-right text-slate-900">
                    {molecule.molecularGeometry}
                  </strong>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </AdminLayout>
    </AdminGuard>
  );
}
