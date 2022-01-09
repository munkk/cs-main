import { TestResultEnum } from '../chip-list.interface';

export interface ChipInputData {
  id: number;
  text: string;
  answer: string;
  highlight?: TestResultEnum;
}

export type ChipOutputData = Omit<ChipInputData, 'highlight'>;
