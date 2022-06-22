import * as E from "fp-ts/Either";
import { pipe } from "fp-ts/function";
import { describe, expect, it } from "vitest";
import * as Inventory from "./inventory";
import { PositiveNumber } from "./positive-number.brand";

describe("Inventory", () => {
  it("should be able to be added to", () => {
    const inventory = Inventory.empty(1 as PositiveNumber);

    const updatedInventory = pipe(
      Inventory.add("morphine", inventory),
      E.getOrElse(() => Inventory.empty(0 as PositiveNumber))
    );

    expect(Inventory.contains("morphine", updatedInventory)).toBe(true);
  });

  it("should have a fixed size", () => {
    const inventory = Inventory.empty(0 as PositiveNumber);

    expect(Inventory.add("morphine", inventory)).toStrictEqual(
      E.left(new Error("Inventory is full"))
    );
  });
});
