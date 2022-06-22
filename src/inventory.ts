const empty = () => ([]);

const add = (item: string, inventory: string[]): string[] => ([...inventory, item ]);
    

const contains = (item: string, inventory: string[]): boolean => inventory.includes(item);


export { empty, add, contains };