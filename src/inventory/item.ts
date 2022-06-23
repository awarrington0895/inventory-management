import { PositiveNumber } from "./positive-number.brand";

type Item = {
  readonly name: string;
  readonly size: PositiveNumber;
};

const equals = (item1: Item, item2: Item): boolean => {
  return item1.name === item2.name && item1.size === item2.size;
};

export { Item as Type, equals };
