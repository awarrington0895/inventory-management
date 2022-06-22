import * as t from "io-ts";

interface PositiveNumberBrand {
  readonly PositiveNumber: unique symbol;
}

const PositiveNumber = t.brand(
  t.number,
  (n): n is t.Branded<number, PositiveNumberBrand> => n >= 0,
  "PositiveNumber"
);

type PositiveNumber = t.TypeOf<typeof PositiveNumber>;

export { PositiveNumber };
