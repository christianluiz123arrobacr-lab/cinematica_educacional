import { useMemo, useState } from "react";
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
  Rotate3D,
  Sparkles,
} from "lucide-react";

type Vec3 = {
  x: number;
  y: number;
  z: number;
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
        position: { x: -1.1, y: -0.75, z: 0.65 },
      },
      {
        label: "H",
        element: "H",
        position: { x: 1.1, y: -0.75, z: 0.65 },
      },
    ],
    lonePairPositions: [
      {
        label: "par livre",
        position: { x: -0.95, y: 1.0, z: -0.55 },
      },
      {
        label: "par livre",
        position: { x: 0.95, y: 1.0, z: -0.55 },
      },
    ],
    shortExplanation:
      "O oxigênio tem quatro regiões eletrônicas ao redor: duas ligações O-H e dois pares livres.",
    angleExplanation:
      "A distribuição eletrônica ideal é tetraédrica, com ângulo de 109,5°. Porém, os pares livres ocupam mais espaço e repelem mais fortemente do que os pares ligantes. Essa repulsão maior comprime as ligações O-H, reduzindo o ângulo para aproximadamente 104,5°.",
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
        position: { x: -1.2, y: -0.8, z: 0.45 },
      },
      {
        label: "H",
        element: "H",
        position: { x: 1.2, y: -0.8, z: 0.45 },
      },
      {
        label: "H",
        element: "H",
        position: { x: 0, y: -1.1, z: -1.1 },
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
        position: { x: -1.65, y: 0, z: 0 },
      },
      {
        label: "O",
        element: "O",
        position: { x: 1.65, y: 0, z: 0 },
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
        position: { x: -1.25, y: -0.75, z: 0 },
      },
      {
        label: "F",
        element: "F",
        position: { x: 1.25, y: -0.75, z: 0 },
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

  const y1 = point.y * cosX - point.z * sinX;
  const z1 = point.y * sinX + point.z * cosX;

  const x2 = point.x * cosY + z1 * sinY;
  const z2 = -point.x * sinY + z1 * cosY;

  return {
    x: x2,
    y: y1,
    z: z2,
  };
}

function projectPoint(point: Vec3) {
  const distance = 5;
  const scale = 118;
  const perspective = distance / (distance - point.z);

  return {
    x: 280 + point.x * scale * perspective,
    y: 245 - point.y * scale * perspective,
    z: point.z,
    perspective,
  };
}

function getAtomStyle(element: string) {
  switch (element) {
    case "H":
      return "bg-slate-100 text-slate-900 border-slate-300";
    case "O":
      return "bg-red-500 text-white border-red-300";
    case "N":
      return "bg-blue-500 text-white border-blue-300";
    case "C":
      return "bg-slate-900 text-white border-slate-700";
    case "F":
      return "bg-emerald-500 text-white border-emerald-300";
    case "Cl":
      return "bg-green-600 text-white border-green-300";
    case "B":
      return "bg-orange-500 text-white border-orange-300";
    case "P":
      return "bg-violet-600 text-white border-violet-300";
    case "S":
      return "bg-yellow-500 text-slate-950 border-yellow-300";
    case "Xe":
      return "bg-purple-700 text-white border-purple-300";
    default:
      return "bg-cyan-500 text-white border-cyan-300";
  }
}

export default function AdminMolecularGeometryPrototypePage() {
  const [selectedFormula, setSelectedFormula] = useState("H₂O");
  const [rotationX, setRotationX] = useState(20);
  const [rotationY, setRotationY] = useState(-25);
  const [showLonePairs, setShowLonePairs] = useState(true);

  const molecule = useMemo(() => {
    return (
      MOLECULES.find((item) => item.formula === selectedFormula) ??
      MOLECULES[0]
    );
  }, [selectedFormula]);

  const centralProjected = projectPoint(
    rotatePoint({ x: 0, y: 0, z: 0 }, rotationX, rotationY)
  );

  const projectedAtoms = molecule.atoms.map((atom) => {
    const rotated = rotatePoint(atom.position, rotationX, rotationY);
    return {
      ...atom,
      projected: projectPoint(rotated),
    };
  });

  const projectedLonePairs = molecule.lonePairPositions.map((pair) => {
    const rotated = rotatePoint(pair.position, rotationX, rotationY);
    return {
      ...pair,
      projected: projectPoint(rotated),
    };
  });

  const sortedObjects = [
    ...projectedAtoms.map((atom) => ({
      type: "atom" as const,
      key: `${atom.label}-${atom.projected.x}-${atom.projected.y}`,
      z: atom.projected.z,
      data: atom,
    })),
    ...(showLonePairs
      ? projectedLonePairs.map((pair) => ({
          type: "lonePair" as const,
          key: `${pair.label}-${pair.projected.x}-${pair.projected.y}`,
          z: pair.projected.z,
          data: pair,
        }))
      : []),
    {
      type: "central" as const,
      key: "central",
      z: centralProjected.z,
      data: {
        projected: centralProjected,
      },
    },
  ].sort((a, b) => a.z - b.z);

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
                    Visualização 3D simplificada
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

            <div className="grid gap-0 lg:grid-cols-[1fr_260px]">
              <div className="relative min-h-[540px] overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-purple-950">
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
                  viewBox="0 0 560 500"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <defs>
                    <linearGradient
                      id="bondGradient"
                      x1="0"
                      y1="0"
                      x2="1"
                      y2="1"
                    >
                      <stop offset="0%" stopColor="#a5f3fc" stopOpacity="0.8" />
                      <stop
                        offset="100%"
                        stopColor="#c4b5fd"
                        stopOpacity="0.9"
                      />
                    </linearGradient>
                  </defs>

                  {projectedAtoms.map((atom) => (
                    <line
                      key={`bond-${atom.label}-${atom.projected.x}`}
                      x1={centralProjected.x}
                      y1={centralProjected.y}
                      x2={atom.projected.x}
                      y2={atom.projected.y}
                      stroke="url(#bondGradient)"
                      strokeWidth={Math.max(5, 7 + atom.projected.z)}
                      strokeLinecap="round"
                      opacity={0.86}
                    />
                  ))}

                  {showLonePairs &&
                    projectedLonePairs.map((pair) => (
                      <line
                        key={`lone-bond-${pair.projected.x}`}
                        x1={centralProjected.x}
                        y1={centralProjected.y}
                        x2={pair.projected.x}
                        y2={pair.projected.y}
                        stroke="#e9d5ff"
                        strokeWidth="3"
                        strokeDasharray="8 8"
                        strokeLinecap="round"
                        opacity={0.55}
                      />
                    ))}
                </svg>

                <div className="absolute inset-0">
                  {sortedObjects.map((object) => {
                    if (object.type === "central") {
                      const size = 76;
                      const point = object.data.projected;

                      return (
                        <div
                          key={object.key}
                          className="absolute flex items-center justify-center rounded-full border-4 border-cyan-200 bg-cyan-500 text-xl font-black text-white shadow-2xl shadow-cyan-500/30"
                          style={{
                            width: size,
                            height: size,
                            left: point.x - size / 2,
                            top: point.y - size / 2,
                            zIndex: 40 + Math.round(point.z * 10),
                          }}
                        >
                          {molecule.centralAtom}
                        </div>
                      );
                    }

                    if (object.type === "lonePair") {
                      const point = object.data.projected;
                      const size = 58 * point.perspective;

                      return (
                        <div
                          key={object.key}
                          className="absolute flex items-center justify-center rounded-full border border-purple-200/70 bg-purple-300/30 text-[10px] font-bold uppercase leading-tight text-purple-50 shadow-xl backdrop-blur"
                          style={{
                            width: size,
                            height: size,
                            left: point.x - size / 2,
                            top: point.y - size / 2,
                            zIndex: 30 + Math.round(point.z * 10),
                          }}
                        >
                          <span className="px-2 text-center">par livre</span>
                        </div>
                      );
                    }

                    const atom = object.data;
                    const point = atom.projected;
                    const size = 62 * point.perspective;

                    return (
                      <div
                        key={object.key}
                        className={[
                          "absolute flex items-center justify-center rounded-full border-4 text-base font-black shadow-2xl",
                          getAtomStyle(atom.element),
                        ].join(" ")}
                        style={{
                          width: size,
                          height: size,
                          left: point.x - size / 2,
                          top: point.y - size / 2,
                          zIndex: 35 + Math.round(point.z * 10),
                        }}
                      >
                        {atom.label}
                      </div>
                    );
                  })}
                </div>
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
                      onChange={(event) => setRotationX(Number(event.target.value))}
                      className="w-full"
                    />
                  </div>

                  <div>
                    <div className="mb-2 flex items-center justify-between text-xs font-semibold text-slate-500">
                      <span>Rotação horizontal</span>
                      <span>{rotationY}°</span>
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

                  <div className="rounded-2xl border border-cyan-100 bg-cyan-50 p-4">
                    <p className="text-xs font-semibold uppercase tracking-wide text-cyan-700">
                      Protótipo interno
                    </p>

                    <p className="mt-2 text-xs leading-5 text-cyan-900">
                      Esta visualização é didática, não é um modelo químico
                      computacional de alta precisão. A ideia é validar a
                      experiência antes de virar uma ferramenta pública.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          <div className="space-y-6">
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
