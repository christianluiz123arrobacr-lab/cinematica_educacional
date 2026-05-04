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
import { formatNumber } from "@/lib/utils";

type TemperatureScale = "celsius" | "fahrenheit" | "kelvin" | "rankine";

const scaleMeta: Record<
  TemperatureScale,
  {
    label: string;
    short: string;
    unit: string;
    min: number;
    max: number;
    step: number;
  }
> = {
  celsius: {
    label: "Celsius",
    short: "°C",
    unit: "°C",
    min: -273.15,
    max: 500,
    step: 1,
  },
  fahrenheit: {
    label: "Fahrenheit",
    short: "°F",
    unit: "°F",
    min: -459.67,
    max: 932,
    step: 1,
  },
  kelvin: {
    label: "Kelvin",
    short: "K",
    unit: "K",
    min: 0,
    max: 773.15,
    step: 1,
  },
  rankine: {
    label: "Rankine",
    short: "°R",
    unit: "°R",
    min: 0,
    max: 1391.67,
    step: 1,
  },
};

const referencePoints = [
  {
    label: "Zero absoluto",
    celsius: -273.15,
    description: "menor temperatura possível",
  },
  {
    label: "Fusão da água",
    celsius: 0,
    description: "gelo e água coexistem",
  },
  {
    label: "Temperatura ambiente",
    celsius: 25,
    description: "referência cotidiana",
  },
  {
    label: "Corpo humano",
    celsius: 37,
    description: "aproximação fisiológica",
  },
  {
    label: "Ebulição da água",
    celsius: 100,
    description: "ao nível do mar",
  },
];

function toCelsius(value: number, scale: TemperatureScale) {
  if (scale === "celsius") return value;
  if (scale === "fahrenheit") return ((value - 32) * 5) / 9;
  if (scale === "kelvin") return value - 273.15;
  return ((value - 491.67) * 5) / 9;
}

function fromCelsius(celsius: number, scale: TemperatureScale) {
  if (scale === "celsius") return celsius;
  if (scale === "fahrenheit") return (celsius * 9) / 5 + 32;
  if (scale === "kelvin") return celsius + 273.15;
  return ((celsius + 273.15) * 9) / 5;
}

function roundValue(value: number) {
  return Math.round(value * 100) / 100;
}

function getThermalColor(celsius: number) {
  const clamped = Math.max(-50, Math.min(200, celsius));
  const hue = 240 - ((clamped + 50) / 250) * 240;
  return `hsl(${hue}, 92%, 52%)`;
}

function getFillPercent(celsius: number) {
  const min = -273.15;
  const max = 500;
  return Math.max(4, Math.min(100, ((celsius - min) / (max - min)) * 100));
}

function getThermalState(celsius: number) {
  if (celsius <= -273.15) return "Zero absoluto";
  if (celsius < 0) return "Abaixo do congelamento da água";
  if (celsius === 0) return "Ponto de fusão da água";
  if (celsius < 37) return "Faixa fria a moderada";
  if (celsius < 100) return "Faixa quente";
  if (celsius === 100) return "Ponto de ebulição da água";
  return "Acima da ebulição da água";
}

function getConversionToCelsiusFormula(scale: TemperatureScale, value: number, celsius: number) {
  if (scale === "celsius") {
    return String.raw`T_C = ${formatNumber(value, 2)}^\circ C`;
  }

  if (scale === "fahrenheit") {
    return String.raw`T_C = \frac{5}{9}(T_F - 32) = \frac{5}{9}(${formatNumber(
      value,
      2
    )} - 32) = ${formatNumber(celsius, 2)}^\circ C`;
  }

  if (scale === "kelvin") {
    return String.raw`T_C = T_K - 273{,}15 = ${formatNumber(
      value,
      2
    )} - 273{,}15 = ${formatNumber(celsius, 2)}^\circ C`;
  }

  return String.raw`T_C = \frac{5}{9}(T_R - 491{,}67) = \frac{5}{9}(${formatNumber(
    value,
    2
  )} - 491{,}67) = ${formatNumber(celsius, 2)}^\circ C`;
}

export const TemperatureConverter: React.FC = () => {
  const [sourceScale, setSourceScale] = useState<TemperatureScale>("celsius");
  const [sourceValue, setSourceValue] = useState(25);

  const celsius = useMemo(
    () => toCelsius(sourceValue, sourceScale),
    [sourceValue, sourceScale]
  );

  const fahrenheit = useMemo(() => fromCelsius(celsius, "fahrenheit"), [celsius]);
  const kelvin = useMemo(() => fromCelsius(celsius, "kelvin"), [celsius]);
  const rankine = useMemo(() => fromCelsius(celsius, "rankine"), [celsius]);

  const thermalColor = useMemo(() => getThermalColor(celsius), [celsius]);
  const fillPercent = useMemo(() => getFillPercent(celsius), [celsius]);
  const thermalState = useMemo(() => getThermalState(celsius), [celsius]);

  const activeMeta = scaleMeta[sourceScale];

  const handleScaleChange = (nextScaleValue: string) => {
    const nextScale = nextScaleValue as TemperatureScale;
    const converted = fromCelsius(celsius, nextScale);

    setSourceScale(nextScale);
    setSourceValue(roundValue(converted));
  };

  const setReferenceTemperature = (referenceCelsius: number) => {
    const converted = fromCelsius(referenceCelsius, sourceScale);
    setSourceValue(roundValue(converted));
  };

  return (
    <div className="w-full space-y-6">
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-12">
        <div className="space-y-4 xl:col-span-4">
          <Card className="border border-slate-200 shadow-sm">
            <div className="border-b border-slate-200 px-5 py-4">
              <h3 className="text-lg font-bold text-slate-900">
                Conversor de Temperatura
              </h3>
              <p className="mt-1 text-sm text-slate-600">
                Converta entre Celsius, Fahrenheit, Kelvin e Rankine sem
                transformar escala térmica em ritual de sofrimento humano.
              </p>
            </div>

            <div className="space-y-5 p-5">
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                <p className="mb-2 text-xs font-bold uppercase tracking-wide text-slate-500">
                  Escala de entrada
                </p>
                <Select value={sourceScale} onValueChange={handleScaleChange}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="celsius">Celsius</SelectItem>
                    <SelectItem value="fahrenheit">Fahrenheit</SelectItem>
                    <SelectItem value="kelvin">Kelvin</SelectItem>
                    <SelectItem value="rankine">Rankine</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <ControlRow
                label={`Temperatura em ${activeMeta.label}`}
                symbol={activeMeta.short}
                value={`${formatNumber(sourceValue, 2)} ${activeMeta.unit}`}
              >
                <Slider
                  value={[sourceValue]}
                  onValueChange={(value) => setSourceValue(value[0])}
                  min={activeMeta.min}
                  max={activeMeta.max}
                  step={activeMeta.step}
                  className="w-full"
                />
                <div className="mt-2 flex justify-between text-xs text-slate-500">
                  <span>
                    {formatNumber(activeMeta.min, 2)} {activeMeta.unit}
                  </span>
                  <span>
                    {formatNumber(activeMeta.max, 2)} {activeMeta.unit}
                  </span>
                </div>
              </ControlRow>

              <div className="rounded-xl border border-slate-200 bg-white p-4">
                <p className="mb-3 text-sm font-bold text-slate-800">
                  Pontos de referência
                </p>

                <div className="grid grid-cols-1 gap-2">
                  {referencePoints.map((point) => (
                    <button
                      key={point.label}
                      onClick={() => setReferenceTemperature(point.celsius)}
                      className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-left hover:bg-slate-100"
                    >
                      <p className="text-sm font-bold text-slate-800">
                        {point.label}
                      </p>
                      <p className="text-xs text-slate-500">
                        {formatNumber(point.celsius, 2)} °C — {point.description}
                      </p>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </Card>

          <Card className="border border-slate-200 shadow-sm">
            <div className="border-b border-slate-200 px-5 py-4">
              <h4 className="text-base font-bold text-slate-900">
                Resultados Principais
              </h4>
            </div>

            <div className="space-y-3 p-5">
              <MetricCard
                label="Celsius"
                value={`${formatNumber(celsius, 2)} °C`}
                valueClassName="text-slate-900"
              />

              <MetricCard
                label="Fahrenheit"
                value={`${formatNumber(fahrenheit, 2)} °F`}
                valueClassName="text-blue-700"
              />

              <MetricCard
                label="Kelvin"
                value={`${formatNumber(kelvin, 2)} K`}
                valueClassName="text-green-700"
              />

              <MetricCard
                label="Rankine"
                value={`${formatNumber(rankine, 2)} °R`}
                valueClassName="text-purple-700"
              />

              <div className="rounded-xl border border-slate-200 bg-white p-4">
                <p className="text-sm font-medium text-slate-600">
                  Estado térmico
                </p>
                <p className="mt-2 text-lg font-bold" style={{ color: thermalColor }}>
                  {thermalState}
                </p>
              </div>
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
                <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                  <ThermometerCard
                    title="Celsius"
                    value={`${formatNumber(celsius, 2)} °C`}
                    color={thermalColor}
                    fillPercent={fillPercent}
                  />

                  <ThermometerCard
                    title="Fahrenheit"
                    value={`${formatNumber(fahrenheit, 2)} °F`}
                    color={thermalColor}
                    fillPercent={fillPercent}
                  />

                  <ThermometerCard
                    title="Kelvin"
                    value={`${formatNumber(kelvin, 2)} K`}
                    color={thermalColor}
                    fillPercent={fillPercent}
                  />

                  <ThermometerCard
                    title="Rankine"
                    value={`${formatNumber(rankine, 2)} °R`}
                    color={thermalColor}
                    fillPercent={fillPercent}
                  />
                </div>

                <div className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-4">
                  <div className="mb-2 flex items-center justify-between">
                    <p className="text-sm font-bold text-slate-800">
                      Escala visual da temperatura
                    </p>
                    <p className="text-sm font-bold" style={{ color: thermalColor }}>
                      {thermalState}
                    </p>
                  </div>

                  <div className="h-4 w-full overflow-hidden rounded-full bg-slate-200">
                    <div
                      className="h-full rounded-full transition-all"
                      style={{
                        width: `${fillPercent}%`,
                        backgroundColor: thermalColor,
                      }}
                    />
                  </div>

                  <div className="mt-2 flex justify-between text-xs text-slate-500">
                    <span>zero absoluto</span>
                    <span>temperaturas altas</span>
                  </div>
                </div>
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
              <CalcMiniCard
                title="Escalas comuns"
                values={[
                  ["Celsius", `${formatNumber(celsius, 2)} °C`],
                  ["Fahrenheit", `${formatNumber(fahrenheit, 2)} °F`],
                ]}
              />

              <CalcMiniCard
                title="Escalas absolutas"
                values={[
                  ["Kelvin", `${formatNumber(kelvin, 2)} K`],
                  ["Rankine", `${formatNumber(rankine, 2)} °R`],
                ]}
              />

              <CalcMiniCard
                title="Relações úteis"
                values={[
                  ["K − °C", "273,15"],
                  ["°R / K", "1,8"],
                ]}
              />

              <CalcMiniCard
                title="Referência"
                values={[
                  ["Escala usada", activeMeta.label],
                  ["Estado", thermalState],
                ]}
              />
            </div>
          </Card>

          <Card className="border border-slate-200 shadow-sm">
            <div className="border-b border-slate-200 px-5 py-4">
              <h4 className="text-base font-bold text-slate-900">
                Cálculos Detalhados
              </h4>
            </div>

            <div className="space-y-5 p-5">
              <CalcSection
                title="Conversão da escala escolhida para Celsius"
                formulas={[
                  getConversionToCelsiusFormula(sourceScale, sourceValue, celsius),
                ]}
              />

              <CalcSection
                title="Celsius para Fahrenheit"
                formulas={[
                  String.raw`T_F = \frac{9}{5}T_C + 32`,
                  String.raw`T_F = \frac{9}{5}\cdot ${formatNumber(
                    celsius,
                    2
                  )} + 32 = ${formatNumber(fahrenheit, 2)}^\circ F`,
                ]}
              />

              <CalcSection
                title="Celsius para Kelvin"
                formulas={[
                  String.raw`T_K = T_C + 273{,}15`,
                  String.raw`T_K = ${formatNumber(celsius, 2)} + 273{,}15 = ${formatNumber(
                    kelvin,
                    2
                  )}\,K`,
                ]}
              />

              <CalcSection
                title="Kelvin para Rankine"
                formulas={[
                  String.raw`T_R = \frac{9}{5}T_K`,
                  String.raw`T_R = \frac{9}{5}\cdot ${formatNumber(
                    kelvin,
                    2
                  )} = ${formatNumber(rankine, 2)}^\circ R`,
                ]}
              />

              <CalcSection
                title="Observações importantes"
                formulas={[
                  String.raw`0\,K = -273{,}15^\circ C`,
                  String.raw`0^\circ C = 273{,}15\,K = 32^\circ F`,
                  String.raw`100^\circ C = 373{,}15\,K = 212^\circ F`,
                ]}
              />
            </div>
          </Card>
        </div>
      </div>
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

function ThermometerCard({
  title,
  value,
  color,
  fillPercent,
}: {
  title: string;
  value: string;
  color: string;
  fillPercent: number;
}) {
  return (
    <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-center">
      <p className="text-sm font-bold text-slate-800">{title}</p>

      <div className="mt-4 flex justify-center">
        <div className="relative flex h-44 w-10 items-end justify-center rounded-full border-4 border-slate-300 bg-white p-1 shadow-inner">
          <div
            className="w-full rounded-b-full rounded-t-md transition-all"
            style={{
              height: `${fillPercent}%`,
              backgroundColor: color,
              boxShadow: `0 0 14px ${color}`,
            }}
          />
          <div className="absolute -bottom-4 h-14 w-14 rounded-full border-4 border-slate-300 bg-white" />
          <div
            className="absolute -bottom-2 h-10 w-10 rounded-full"
            style={{
              backgroundColor: color,
              boxShadow: `0 0 14px ${color}`,
            }}
          />
        </div>
      </div>

      <p className="mt-6 text-lg font-bold" style={{ color }}>
        {value}
      </p>
    </div>
  );
}
