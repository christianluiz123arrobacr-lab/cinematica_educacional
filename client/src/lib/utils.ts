import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatNumber(value: number, decimals: number = 2): string {
  return value.toLocaleString("pt-BR", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });
}

export function formatUnit(value: number, unit: string): string {
  const formattedValue = formatNumber(value);
  const isPlural = Math.abs(value) !== 1;
  
  let unitSuffix = unit;
  if (unit === "metro" && isPlural) unitSuffix = "metros";
  if (unit === "segundo" && isPlural) unitSuffix = "segundos";
  
  if (["m", "s", "kg", "N", "J", "W", "Hz", "Pa", "m/s", "m/s²"].includes(unit)) {
    return `${formattedValue} ${unit}`;
  }

  return `${formattedValue} ${unitSuffix}`;
}
