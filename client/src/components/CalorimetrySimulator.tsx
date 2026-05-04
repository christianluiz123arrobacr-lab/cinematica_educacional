import React, { useMemo, useState } from "react";
import { Slider } from "@/components/ui/slider";
import { MathFormula } from "@/components/MathFormula";
import { Card } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { formatNumber, formatUnit } from "@/lib/utils";
import { AdvancedTheory } from "@/components/AdvancedTheory";
import { ITAThermologyTheory } from "@/content/thermology/ita_thermology_theory";

type CalorimetryMode = "single" | "mixture";

const materials: Record<
  string,
  {
    label: string;
    specificHeat: number;
    color: string;
  }
> = {
  agua: {
    label: "Água",
    specificHeat: 4186,
    color: "#3b82f6",
  },
  gelo: {
    label: "Gelo",
    specificHeat: 2100,
    color: "#93c5fd",
  },
  vapor: {
    label: "Vapor de água",
    specificHeat: 2010,
    color: "#cbd5e1",
  },
  ferro: {
    label: "Ferro",
    specificHeat: 448,
    color: "#64748b",
  },
  aluminio: {
    label: "Alumínio",
    specificHeat: 897,
    color: "#94a3b8",
  },
  cobre: {
    label: "Cobre",
    specificHeat: 385,
    color: "#b45309",
  },
  chumbo: {
    label: "Chumbo",
    specificHeat: 128,
    color: "#475569",
  },
};

function getThermalColor(temp: number) {
  const clamped = Math.max(-30, Math.min(150, temp));
  const hue = 230 - ((clamped + 30) / 180) * 230;
  return `hsl(${hue}, 90%, 52%)`;
}

function getHeatInterpretation(q: number) {
  if (Math.abs(q) < 1e-9) return "Sem troca líquida de calor";
  if (q > 0) return "O corpo recebe calor";
  return "O corpo perde calor";
}

export const CalorimetrySimulator: React.FC = () => {
  const [mode, setMode] = useState<CalorimetryMode>("single");

  // modo calor sensível
  const [material, setMaterial] = useState("agua");
  const [mass, setMass] = useState(1);
  const [initialTemp, setInitialTemp] = useState(20);
  const [finalTemp, setFinalTemp] = useState(80);

  // modo mistura térmica
  const [material1, setMaterial1] = useState("agua");
  const [material2, setMaterial2] = useState("ferro");
  const [mass1, setMass1] = useState(1);
  const [mass2, setMass2] = useState(0.5);
  const [temp1, setTemp1] = useState(20);
  const [temp2, setTemp2] = useState(100);

  const selectedMaterial = materials[material];
  const c = selectedMaterial.specificHeat;

  const deltaT = useMemo(() => finalTemp - initialTemp, [finalTemp, initialTemp]);

  const thermalCapacity = useMemo(() => mass * c, [mass, c]);

  const heat = useMemo(() => mass * c * deltaT, [mass, c, deltaT]);

  const heatKJ = useMemo(() => heat / 1000, [heat]);

  const processType = useMemo(() => {
    if (deltaT > 0) return "Aquecimento";
    if (deltaT < 0) return "Resfriamento";
    return "Temperatura constante";
  }, [deltaT]);

  const c1 = materials[material1].specificHeat;
  const c2 = materials[material2].specificHeat;

  const thermalCapacity1 = useMemo(() => mass1 * c1, [mass1, c1]);
  const thermalCapacity2 = useMemo(() => mass2 * c2, [mass2, c2]);

  const equilibriumTemp = useMemo(() => {
    const denominator = thermalCapacity1 + thermalCapacity2;
    if (denominator <= 0) return 0;

    return (thermalCapacity1 * temp1 + thermalCapacity2 * temp2) / denominator;
  }, [thermalCapacity1, thermalCapacity2, temp1, temp2]);

  const q1 = useMemo(() => {
    return mass1 * c1 * (equilibriumTemp - temp1);
  }, [mass1, c1, equilibriumTemp, temp1]);

  const q2 = useMemo(() => {
    return mass2 * c2 * (equilibriumTemp - temp2);
  }, [mass2, c2, equilibriumTemp, temp2]);

  const energyBalance = useMemo(() => q1 + q2, [q1, q2]);

  const hotterBody = useMemo(() => {
    if (Math.abs(temp1 - temp2) < 1e-9) return "Os dois corpos já estão na mesma temperatura.";
    if (temp1 > temp2) return "O corpo 1 perde calor e o corpo 2 recebe calor.";
    return "O corpo 2 perde calor e o corpo 1 recebe calor.";
  }, [temp1, temp2]);

  return (
    <div className="w-full space-y-6">
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-12">
        <div className="space-y-4 xl:col-span-4">
          <Card className="border border-slate-200 shadow-sm">
            <div className="border-b border-slate-200 px-5 py-4">
              <h3 className="text-lg font-bold text-slate-900">
                Calorimetria
              </h3>
              <p className="mt-1 text-sm text-slate-600">
                Analise calor sensível, capacidade térmica e equilíbrio térmico
                entre corpos.
              </p>
            </div>

            <div className="space-y-5 p-5">
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                <p className="mb-2 text-xs font-bold uppercase tracking-wide text-slate-500">
                  Modo
                </p>
                <Select value={mode} onValueChange={(value) => setMode(value as CalorimetryMode)}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="single">Calor sensível</SelectItem>
                    <SelectItem value="mixture">Mistura térmica</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {mode === "single" ? (
                <>
                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                    <p className="mb-2 text-xs font-bold uppercase tracking-wide text-slate-500">
                      Material
                    </p>
                    <Select value={material} onValueChange={setMaterial}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {Object.entries(materials).map(([key, item]) => (
                          <SelectItem key={key} value={key}>
                            {item.label} — c = {formatNumber(item.specificHeat)} J/kg·K
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <ControlRow
                    label="Massa"
                    symbol="m"
                    value={formatUnit(mass, "kg")}
                  >
                    <Slider
                      value={[mass]}
                      onValueChange={(value) => setMass(value[0])}
                      min={0.1}
                      max={10}
                      step={0.1}
                      className="w-full"
                    />
                  </ControlRow>

                  <ControlRow
                    label="Temperatura inicial"
                    symbol="T_i"
                    value={formatUnit(initialTemp, "°C")}
                  >
                    <Slider
                      value={[initialTemp]}
                      onValueChange={(value) => setInitialTemp(value[0])}
                      min={-30}
                      max={150}
                      step={1}
                      className="w-full"
                    />
                  </ControlRow>

                  <ControlRow
                    label="Temperatura final"
                    symbol="T_f"
                    value={formatUnit(finalTemp, "°C")}
                  >
                    <Slider
                      value={[finalTemp]}
                      onValueChange={(value) => setFinalTemp(value[0])}
                      min={-30}
                      max={150}
                      step={1}
                      className="w-full"
                    />
                  </ControlRow>
                </>
              ) : (
                <>
                  <div className="rounded-xl border border-blue-200 bg-blue-50/60 p-4">
                    <p className="mb-4 text-sm font-bold uppercase tracking-wide text-blue-700">
                      Corpo 1
                    </p>

                    <div className="space-y-5">
                      <div>
                        <p className="mb-2 text-xs font-bold uppercase tracking-wide text-slate-500">
                          Material
                        </p>
                        <Select value={material1} onValueChange={setMaterial1}>
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            {Object.entries(materials).map(([key, item]) => (
                              <SelectItem key={key} value={key}>
                                {item.label} — c = {formatNumber(item.specificHeat)} J/kg·K
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <ControlRow
                        label="Massa"
                        symbol="m_1"
                        value={formatUnit(mass1, "kg")}
                      >
                        <Slider
                          value={[mass1]}
                          onValueChange={(value) => setMass1(value[0])}
                          min={0.1}
                          max={10}
                          step={0.1}
                          className="w-full"
                        />
                      </ControlRow>

                      <ControlRow
                        label="Temperatura inicial"
                        symbol="T_1"
                        value={formatUnit(temp1, "°C")}
                      >
                        <Slider
                          value={[temp1]}
                          onValueChange={(value) => setTemp1(value[0])}
                          min={-30}
                          max={150}
                          step={1}
                          className="w-full"
                        />
                      </ControlRow>
                    </div>
                  </div>

                  <div className="rounded-xl border border-red-200 bg-red-50/60 p-4">
                    <p className="mb-4 text-sm font-bold uppercase tracking-wide text-red-700">
                      Corpo 2
                    </p>

                    <div className="space-y-5">
                      <div>
                        <p className="mb-2 text-xs font-bold uppercase tracking-wide text-slate-500">
                          Material
                        </p>
                        <Select value={material2} onValueChange={setMaterial2}>
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            {Object.entries(materials).map(([key, item]) => (
                              <SelectItem key={key} value={key}>
                                {item.label} — c = {formatNumber(item.specificHeat)} J/kg·K
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <ControlRow
                        label="Massa"
                        symbol="m_2"
                        value={formatUnit(mass2, "kg")}
                      >
                        <Slider
                          value={[mass2]}
                          onValueChange={(value) => setMass2(value[0])}
                          min={0.1}
                          max={10}
                          step={0.1}
                          className="w-full"
                        />
                      </ControlRow>

                      <ControlRow
                        label="Temperatura inicial"
                        symbol="T_2"
                        value={formatUnit(temp2, "°C")}
                      >
                        <Slider
                          value={[temp2]}
                          onValueChange={(value) => setTemp2(value[0])}
                          min={-30}
                          max={150}
                          step={1}
                          className="w-full"
                        />
                      </ControlRow>
                    </div>
                  </div>
                </>
              )}
            </div>
          </Card>

          <Card className="border border-slate-200 shadow-sm">
            <div className="border-b border-slate-200 px-5 py-4">
              <h4 className="text-base font-bold text-slate-900">
                Resultados Principais
              </h4>
            </div>

            <div className="space-y-3 p-5">
              {mode === "single" ? (
                <>
                  <MetricCard
                    label={
                      <>
                        Variação de temperatura{" "}
                        <MathFormula inline formula={String.raw`\Delta T`} />
                      </>
                    }
                    value={formatUnit(deltaT, "°C")}
                    valueClassName={deltaT >= 0 ? "text-red-700" : "text-blue-700"}
                  />

                  <MetricCard
                    label={
                      <>
                        Calor específico{" "}
                        <MathFormula inline formula={String.raw`c`} />
                      </>
                    }
                    value={`${formatNumber(c)} J/kg·K`}
                  />

                  <MetricCard
                    label={
                      <>
                        Capacidade térmica{" "}
                        <MathFormula inline formula={String.raw`C`} />
                      </>
                    }
                    value={`${formatNumber(thermalCapacity)} J/K`}
                  />

                  <MetricCard
                    label={
                      <>
                        Calor trocado{" "}
                        <MathFormula inline formula={String.raw`Q`} />
                      </>
                    }
                    value={formatUnit(heat, "J")}
                    valueClassName={heat >= 0 ? "text-red-700" : "text-blue-700"}
                  />

                  <MetricCard
                    label="Interpretação"
                    value={getHeatInterpretation(heat)}
                    valueClassName={heat >= 0 ? "text-red-700" : "text-blue-700"}
                  />
                </>
              ) : (
                <>
                  <MetricCard
                    label={
                      <>
                        Temperatura de equilíbrio{" "}
                        <MathFormula inline formula={String.raw`T_e`} />
                      </>
                    }
                    value={formatUnit(equilibriumTemp, "°C")}
                    valueClassName="text-green-700"
                  />

                  <MetricCard
                    label={
                      <>
                        Calor do corpo 1{" "}
                        <MathFormula inline formula={String.raw`Q_1`} />
                      </>
                    }
                    value={formatUnit(q1, "J")}
                    valueClassName={q1 >= 0 ? "text-red-700" : "text-blue-700"}
                  />

                  <MetricCard
                    label={
                      <>
                        Calor do corpo 2{" "}
                        <MathFormula inline formula={String.raw`Q_2`} />
                      </>
                    }
                    value={formatUnit(q2, "J")}
                    valueClassName={q2 >= 0 ? "text-red-700" : "text-blue-700"}
                  />

                  <MetricCard
                    label="Balanço energético"
                    value={formatUnit(energyBalance, "J")}
                    valueClassName="text-slate-900"
                  />

                  <MetricCard
                    label="Interpretação"
                    value={hotterBody}
                  />
                </>
              )}
            </div>
          </Card>
        </div>

        <div className="space-y-4 xl:col-span-8">
          <Card className="overflow-hidden border border-slate-200 shadow-sm">
            <div className="border-b border-slate-200 px-5 py-4">
              <h4 className="text-base font-bold text-slate-900">
                Simulação Visual
              </h4>
            </div>

            <div className="bg-slate-50 p-4 md:p-5">
              <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                {mode === "single" ? (
                  <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                    <TemperatureBeaker
                      title="Estado inicial"
                      material={selectedMaterial.label}
                      temperature={initialTemp}
                      color={selectedMaterial.color}
                    />

                    <TemperatureBeaker
                      title="Estado final"
                      material={selectedMaterial.label}
                      temperature={finalTemp}
                      color={selectedMaterial.color}
                    />
                  </div>
                ) : (
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
                      <TemperatureBeaker
                        title="Corpo 1"
                        material={materials[material1].label}
                        temperature={temp1}
                        color={materials[material1].color}
                      />

                      <div className="flex flex-col items-center justify-center rounded-xl border border-slate-200 bg-slate-50 p-4 text-center">
                        <p className="text-sm font-bold text-slate-700">
                          Mistura térmica
                        </p>
                        <p className="mt-2 text-xs text-slate-500">
                          O calor flui espontaneamente do corpo mais quente para
                          o mais frio. Parece óbvio, mas ainda tem questão
                          tentando fazer gente cair nisso.
                        </p>
                        <div className="mt-4 text-3xl font-bold text-slate-800">
                          →
                        </div>
                      </div>

                      <TemperatureBeaker
                        title="Corpo 2"
                        material={materials[material2].label}
                        temperature={temp2}
                        color={materials[material2].color}
                      />
                    </div>

                    <div className="rounded-xl border border-green-200 bg-green-50 p-5 text-center">
                      <p className="text-sm font-bold uppercase tracking-wide text-green-700">
                        Equilíbrio térmico
                      </p>
                      <p className="mt-2 text-3xl font-bold text-green-700">
                        {formatNumber(equilibriumTemp, 2)} °C
                      </p>
                      <p className="mt-1 text-sm text-green-900">
                        No modelo ideal, sem perdas para o ambiente.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </Card>

          <Card className="border border-slate-200 shadow-sm">
            <div className="border-b border-slate-200 px-5 py-4">
              <h4 className="text-base font-bold text-slate-900">
                Cálculos Rápidos
              </h4>
            </div>

            <div className="grid grid-cols-1 gap-4 p-5 md:grid-cols-2">
              {mode === "single" ? (
                <>
                  <CalcMiniCard
                    title="Dados do corpo"
                    values={[
                      ["m", formatUnit(mass, "kg")],
                      ["c", `${formatNumber(c)} J/kg·K`],
                    ]}
                  />

                  <CalcMiniCard
                    title="Temperaturas"
                    values={[
                      ["Ti", formatUnit(initialTemp, "°C")],
                      ["Tf", formatUnit(finalTemp, "°C")],
                    ]}
                  />

                  <CalcMiniCard
                    title="Troca térmica"
                    values={[
                      ["ΔT", formatUnit(deltaT, "°C")],
                      ["Q", formatUnit(heat, "J")],
                    ]}
                  />

                  <CalcMiniCard
                    title="Unidades"
                    values={[
                      ["Q em kJ", formatUnit(heatKJ, "kJ")],
                      ["Processo", processType],
                    ]}
                  />
                </>
              ) : (
                <>
                  <CalcMiniCard
                    title="Corpo 1"
                    values={[
                      ["m1", formatUnit(mass1, "kg")],
                      ["c1", `${formatNumber(c1)} J/kg·K`],
                    ]}
                  />

                  <CalcMiniCard
                    title="Corpo 2"
                    values={[
                      ["m2", formatUnit(mass2, "kg")],
                      ["c2", `${formatNumber(c2)} J/kg·K`],
                    ]}
                  />

                  <CalcMiniCard
                    title="Temperaturas"
                    values={[
                      ["T1", formatUnit(temp1, "°C")],
                      ["T2", formatUnit(temp2, "°C")],
                    ]}
                  />

                  <CalcMiniCard
                    title="Equilíbrio"
                    values={[
                      ["Te", formatUnit(equilibriumTemp, "°C")],
                      ["Q1 + Q2", formatUnit(energyBalance, "J")],
                    ]}
                  />
                </>
              )}
            </div>
          </Card>

          <Card className="border border-slate-200 shadow-sm">
            <div className="border-b border-slate-200 px-5 py-4">
              <h4 className="text-base font-bold text-slate-900">
                Cálculos Detalhados
              </h4>
            </div>

            <div className="space-y-5 p-5">
              {mode === "single" ? (
                <>
                  <CalcSection
                    title="Variação de temperatura"
                    formulas={[
                      String.raw`\Delta T = T_f - T_i`,
                      String.raw`\Delta T = ${formatNumber(finalTemp)} - ${formatNumber(initialTemp)} = ${formatNumber(deltaT)}\,^\circ C`,
                    ]}
                  />

                  <CalcSection
                    title="Calor sensível"
                    formulas={[
                      String.raw`Q = mc\Delta T`,
                      String.raw`Q = ${formatNumber(mass)} \cdot ${formatNumber(c)} \cdot ${formatNumber(deltaT)} = ${formatNumber(heat)}\,\text{J}`,
                      String.raw`Q = ${formatNumber(heatKJ)}\,\text{kJ}`,
                    ]}
                  />

                  <CalcSection
                    title="Capacidade térmica"
                    formulas={[
                      String.raw`C = mc`,
                      String.raw`C = ${formatNumber(mass)} \cdot ${formatNumber(c)} = ${formatNumber(thermalCapacity)}\,\text{J/K}`,
                      String.raw`Q = C\Delta T = ${formatNumber(thermalCapacity)} \cdot ${formatNumber(deltaT)} = ${formatNumber(heat)}\,\text{J}`,
                    ]}
                  />

                  <CalcSection
                    title="Interpretação física"
                    formulas={[
                      heat > 0
                        ? String.raw`Q > 0 \Rightarrow \text{o corpo recebe calor.}`
                        : heat < 0
                        ? String.raw`Q < 0 \Rightarrow \text{o corpo perde calor.}`
                        : String.raw`Q = 0 \Rightarrow \text{não há variação de temperatura.}`,
                    ]}
                  />
                </>
              ) : (
                <>
                  <CalcSection
                    title="Equilíbrio térmico ideal"
                    formulas={[
                      String.raw`Q_1 + Q_2 = 0`,
                      String.raw`m_1c_1(T_e - T_1) + m_2c_2(T_e - T_2) = 0`,
                    ]}
                  />

                  <CalcSection
                    title="Temperatura de equilíbrio"
                    formulas={[
                      String.raw`T_e = \frac{m_1c_1T_1 + m_2c_2T_2}{m_1c_1 + m_2c_2}`,
                      String.raw`T_e = \frac{${formatNumber(mass1)}\cdot ${formatNumber(c1)}\cdot ${formatNumber(temp1)} + ${formatNumber(mass2)}\cdot ${formatNumber(c2)}\cdot ${formatNumber(temp2)}}{${formatNumber(mass1)}\cdot ${formatNumber(c1)} + ${formatNumber(mass2)}\cdot ${formatNumber(c2)}}`,
                      String.raw`T_e = ${formatNumber(equilibriumTemp, 2)}\,^\circ C`,
                    ]}
                  />

                  <CalcSection
                    title="Calor trocado por cada corpo"
                    formulas={[
                      String.raw`Q_1 = m_1c_1(T_e - T_1)`,
                      String.raw`Q_1 = ${formatNumber(mass1)}\cdot ${formatNumber(c1)}\cdot (${formatNumber(equilibriumTemp, 2)} - ${formatNumber(temp1)}) = ${formatNumber(q1)}\,\text{J}`,
                      String.raw`Q_2 = m_2c_2(T_e - T_2)`,
                      String.raw`Q_2 = ${formatNumber(mass2)}\cdot ${formatNumber(c2)}\cdot (${formatNumber(equilibriumTemp, 2)} - ${formatNumber(temp2)}) = ${formatNumber(q2)}\,\text{J}`,
                      String.raw`Q_1 + Q_2 = ${formatNumber(energyBalance)}\,\text{J}`,
                    ]}
                  />

                  <CalcSection
                    title="Interpretação física"
                    formulas={[
                      temp1 > temp2
                        ? String.raw`T_1 > T_2 \Rightarrow \text{o corpo 1 perde calor e o corpo 2 recebe calor.}`
                        : temp2 > temp1
                        ? String.raw`T_2 > T_1 \Rightarrow \text{o corpo 2 perde calor e o corpo 1 recebe calor.}`
                        : String.raw`T_1 = T_2 \Rightarrow \text{os corpos já estão em equilíbrio térmico.}`,
                      String.raw`\text{No modelo ideal, o calor perdido por um corpo é igual ao calor recebido pelo outro.}`,
                    ]}
                  />
                </>
              )}
            </div>
          </Card>
        </div>
      </div>

      <AdvancedTheory
        title={ITAThermologyTheory.title}
        introduction={ITAThermologyTheory.introduction}
        sections={ITAThermologyTheory.sections}
      />
    </div>
  );
};

function ControlRow({
  label,
  symbol,
  value,
  children,
}: {
  label: string;
  symbol: string;
  value: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="mb-2 flex items-center justify-between">
        <label className="text-sm font-medium text-slate-700">
          {label} <span className="text-slate-500">({symbol})</span>
        </label>
        <span className="text-sm font-bold text-slate-900">{value}</span>
      </div>
      {children}
    </div>
  );
}

function MetricCard({
  label,
  value,
  valueClassName = "text-slate-900",
}: {
  label: React.ReactNode;
  value: string;
  valueClassName?: string;
}) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-4">
      <p className="text-sm font-medium text-slate-600">{label}</p>
      <p className={`mt-2 text-lg font-bold ${valueClassName}`}>{value}</p>
    </div>
  );
}

function CalcMiniCard({
  title,
  values,
}: {
  title: string;
  values: [string, string][];
}) {
  return (
    <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
      <p className="mb-3 text-sm font-bold text-slate-800">{title}</p>
      <div className="space-y-2">
        {values.map(([label, value]) => (
          <div key={label} className="flex items-center justify-between gap-4">
            <span className="text-sm text-slate-600">{label}</span>
            <span className="text-sm font-bold text-slate-900">{value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function CalcSection({
  title,
  formulas,
}: {
  title: string;
  formulas: string[];
}) {
  return (
    <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
      <p className="mb-3 text-sm font-semibold text-slate-700">{title}</p>
      <div className="space-y-3 overflow-x-auto rounded-lg border border-slate-200 bg-white p-4">
        {formulas.map((formula, index) => (
          <MathFormula key={index} formula={formula} />
        ))}
      </div>
    </div>
  );
}

function TemperatureBeaker({
  title,
  material,
  temperature,
  color,
}: {
  title: string;
  material: string;
  temperature: number;
  color: string;
}) {
  const thermalColor = getThermalColor(temperature);
  const fillHeight = Math.max(15, Math.min(95, ((temperature + 30) / 180) * 100));

  return (
    <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 text-center">
      <p className="text-sm font-bold uppercase tracking-wide text-slate-700">
        {title}
      </p>

      <div className="mt-4 flex items-end justify-center gap-6">
        <div className="relative h-52 w-28 overflow-hidden rounded-b-2xl border-x-4 border-b-4 border-slate-300 bg-white">
          <div
            className="absolute bottom-0 left-0 w-full transition-all"
            style={{
              height: `${fillHeight}%`,
              backgroundColor: color,
              opacity: 0.55,
            }}
          />
          <div
            className="absolute bottom-0 left-0 w-full transition-all"
            style={{
              height: `${fillHeight}%`,
              background: `linear-gradient(to top, ${thermalColor}, transparent)`,
              opacity: 0.75,
            }}
          />
          <div className="absolute inset-x-0 top-0 h-2 rounded-full bg-slate-200" />
        </div>

        <div className="relative flex h-48 w-8 items-end justify-center rounded-full border-4 border-slate-300 bg-white p-1">
          <div
            className="w-full rounded-b-full rounded-t-md transition-all"
            style={{
              height: `${fillHeight}%`,
              backgroundColor: thermalColor,
              boxShadow: `0 0 12px ${thermalColor}`,
            }}
          />
          <div className="absolute -bottom-3 h-11 w-11 rounded-full border-4 border-slate-300 bg-white" />
          <div
            className="absolute -bottom-1 h-8 w-8 rounded-full"
            style={{ backgroundColor: thermalColor }}
          />
        </div>
      </div>

      <p className="mt-6 text-lg font-bold" style={{ color: thermalColor }}>
        {formatNumber(temperature, 2)} °C
      </p>

      <p className="mt-1 text-sm text-slate-600">{material}</p>
    </div>
  );
}
