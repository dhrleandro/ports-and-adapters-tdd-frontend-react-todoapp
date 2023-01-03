import Item from "./Item";

export default class TodoList {
    private items: Item[];

    constructor(items?: Item[]) {
        this.items = items ?? [];
    }

    public addItem(item: Item): void {
        this.items.push(item);
    }

    public add(description: string): Item {
        const item = new Item(undefined, description);
        this.addItem(item);
        return item;
    }

    public delete(id: string): void {
        const index = this.findIndex(id);
        this.items.splice(index, 1);
    }

    public update(updatedItem: Item): void {
        const index = this.findIndex(updatedItem.id);

        if (index !== -1) {
            this.items[index] = updatedItem;
        }
    }

    public get(id: string): Item {
        const index = this.findIndex(id);

        if (index !== -1) {
            return this.items[index];
        }

        return Item.create();
    }
    
    public count(): number {
        return this.items.length;
    }

    public getByIndex(index: number): Item {
        const item = this.items[index];

        if (item) {
            return item;
        } else {
            throw new Error(`the index ${index} not exists`);
        }
    }

    public findIndex(id: string): number {
        const index = this.items.findIndex(item => item.id === id);
        return index;
    }
}