import { describe, it, expect } from 'vitest';
import { PositiveNumber } from './positive-number.brand';
import * as E from 'fp-ts/Either';
import { pipe } from 'fp-ts/function';
import { isReadable } from 'stream';


describe('PositiveNumber', () => {
    it('should allow a positive number', () => {
        expect(
            pipe(PositiveNumber.decode(1), E.isRight)
        ).toBe(true);
    });

    it('should not allow a negative number', () => {
        expect(
            pipe(PositiveNumber.decode(-1), E.isLeft)
        ).toBe(true);
    });

    it('should allow zero', () => {
        expect(
            pipe(PositiveNumber.decode(0), E.isRight)
        ).toBe(true);
    });
});