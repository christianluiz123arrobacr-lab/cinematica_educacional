import { MathFormula } from '@/components/MathFormula';
export function FormulaBlockRenderer({ block }: any) {
  return <MathFormula formula={block.latex} />;
}
