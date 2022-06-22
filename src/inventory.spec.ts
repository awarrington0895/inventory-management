import { describe, it, expect } from 'vitest';
import * as Inventory from './inventory';

describe('Inventory', () => {
    it('should be able to be added to', () => {
        const inventory = Inventory.empty();

        const updatedInventory = Inventory.add('morphine', inventory);

        expect(Inventory.contains('morphine', updatedInventory)).toBe(true);
    });
});