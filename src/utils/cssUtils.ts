export type BoxSizeUnit = 'px' | 'pt' | 'pc' | 'in' | 'Q' | 'mm' | 'cm' | '%';
export type BoxSizeTarget = 'width' | 'max-width' | 'height' | 'max-height';

export function generateBoxSize(size: number, boxSizeUnit: BoxSizeUnit, boxSizeTarget: BoxSizeTarget) {
  return `${boxSizeTarget}: ${size}${boxSizeUnit};`;
}