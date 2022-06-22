import { describe, it, expect } from 'vitest';
import * as Inventory from './inventory';
import * as E from 'fp-ts/Either';
import { pipe } from 'fp-ts/function';

describe('Inventory', () => {
    it('should be able to be added to', () => {
        const inventory = Inventory.empty(1);

        const updatedInventory = pipe(
            Inventory.add('morphine', inventory),
            E.getOrElse(() => Inventory.empty(0))
        );
        
        expect(Inventory.contains('morphine', updatedInventory)).toBe(true);
    });

    it('should have a fixed size', () => {
        const inventory = Inventory.empty(0);    

        expect(Inventory.add('morphine', inventory)).toStrictEqual(E.left(new Error('Inventory is full')));
    });
});