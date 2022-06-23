import * as E from "fp-ts/Either";
import { pipe } from "fp-ts/function";
import { describe, expect, it } from "vitest";
import * as Inventory from "./inventory";
import { PositiveNumber } from "./positive-number.brand";

describe("Inventory", () => {
  it("should be able to be added to", () => {
    const inventory = Inventory.empty(1 as PositiveNumber);
    const itemToBeAdded = { name: "morphine", size: 1 as PositiveNumber };

    const updatedInventory = pipe(
      Inventory.add(itemToBeAdded, inventory),
      E.getOrElse(() => Inventory.empty(0 as PositiveNumber))
    );

    expect(Inventory.contains(itemToBeAdded, updatedInventory)).toBe(true);
  });

  it("should have a fixed size", () => {
    const inventory = Inventory.empty(0 as PositiveNumber);

    expect(
      Inventory.add({ name: "morphine", size: 1 as PositiveNumber }, inventory)
    ).toStrictEqual(E.left(new Error("Inventory is full")));
  });

  describe("Items", () => {
    it("should have an associated size", () => {
      const inventory = Inventory.empty(1 as PositiveNumber);

      expect(
        Inventory.add(
          { name: "morphine", size: 2 as PositiveNumber },
          inventory
        )
      ).toStrictEqual(E.left(new Error("Inventory is full")));
    });
  });
});
