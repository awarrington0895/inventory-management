import * as E from "fp-ts/Either";
import { PositiveNumber } from "./positive-number.brand";
import * as Item from "./item";

type Inventory = {
  readonly maxSize: PositiveNumber;
  readonly items: readonly Item.Type[];
  readonly currentSize: PositiveNumber;
};

const empty = (maxSize: PositiveNumber): Inventory => ({
  maxSize,
  items: [],
  currentSize: 0 as PositiveNumber,
});

const add = (
  item: Item.Type,
  inventory: Inventory
): E.Either<Error, Inventory> => {
  if (inventory.currentSize + item.size > inventory.maxSize) {
    return E.left(new Error("Inventory is full"));
  }

  return E.right({
    maxSize: inventory.maxSize,
    items: inventory.items.concat(item),
    currentSize: (inventory.currentSize + item.size) as PositiveNumber,
  });
};

const contains = (item: Item.Type, inventory: Inventory): boolean =>
  inventory.items.some(currentItem => Item.equals(currentItem, item));

export { empty, add, contains, Inventory as Type };
