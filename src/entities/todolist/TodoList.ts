import Item from "./Item";

export default class TodoList {
    private items: Item[];

    constructor(items?: Item[]) {
        this.items = items ?? [];
    }

    public add(description: string): void {
        const item = new Item(undefined, description);
        this.items.push(item);
    }

    public delete(id: number): void {
        // this.items.push(item);
    }

    public update(updatedItem: Item): void {
        const index = this.items.findIndex(item => item.id === updatedItem.id);

        if (index !== -1) {
            this.items[index] = updatedItem;
        }
    }

    public get(id: string): Item | undefined {
        const index = this.items.findIndex(item => item.id === id);

        if (index !== -1) {
            return this.items[index];
        }

        return undefined;
    }
    
    public count(): number {
        return this.items.length;
    }

    public getByIndex(index: number): Item {
        return this.items[index];
    }
}