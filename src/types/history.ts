import { IconProp } from "@fortawesome/fontawesome-svg-core";

export type CompleteCalculation = {
  calculation: string;
  result: number | IconProp;
};

export type History = Array<CompleteCalculation>;
