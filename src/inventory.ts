import * as E from 'fp-ts/Either';

type Inventory = {
    size: number;
    items: string[];
}

const empty = (size: number): Inventory => ({
    size,
    items: []
});

const add = (item: string, inventory: Inventory): E.Either<Error, Inventory> => {
    if (inventory.items.length >= inventory.size) {
        return E.left(new Error('Inventory is full'));
    }

    return E.right({
        size: inventory.size,
        items: inventory.items.concat(item)
    });
};
    

const contains = (item: string, inventory: Inventory): boolean => inventory.items.includes(item);


export { empty, add, contains, Inventory as Type };