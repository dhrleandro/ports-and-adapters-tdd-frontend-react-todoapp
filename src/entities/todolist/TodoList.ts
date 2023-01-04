import Item from "./Item";

export default class TodoList {
    private items: Item[];

    constructor(items?: Item[]) {
        this.items = items ?? [];
    }

    public addItem(item: Item): void {
        if (this.count() >= 10)
            throw new Error(`it is not possible to add more than 10 pending tasks`);

        this.items.push(item);
    }

    public add(description: string): Item {
        const item = new Item(undefined, description);
        this.addItem(item);
        return item.copy();
    }

    public delete(id: string): void {
        const index = this.findIndex(id);
        this.items.splice(index, 1);
    }

    public done(id: string): void {
        const item = this.get(id);
        item.done = true;
        this.update(item);
    }

    public update(updatedItem: Item): void {
        const index = this.findIndex(updatedItem.id);

        if (index !== -1) {
            this.items[index] = Item.create(updatedItem.id, updatedItem.description, updatedItem.done);
        } else {
            throw new Error(`the item with id ${updatedItem.id} not exists`);
        }
    }

    public get(id: string): Item {
        const index = this.findIndex(id);

        if (index !== -1) {
            return this.items[index].copy();
        } else {
            throw new Error(`the item with id ${id} not exists`);
        }
    }
    
    public count(): number {
        return this.items.length;
    }

    public totalPending(): number {
        return this.items
            .filter(task => (task.done === false))
            .length;
    }

    public getByIndex(index: number): Item {
        const item = this.items[index];

        if (item) {
            return Item.create(item.id, item.description, item.done);
        } else {
            throw new Error(`the index ${index} not exists`);
        }
    }

    public findIndex(id: string): number {
        const index = this.items.findIndex(item => item.id === id);
        return index;
    }

    // return a copy of this.items
    public getItems(): Item[] {
        // return this.items; // this return this.items reference, not a copy
        return this.items.slice(0, this.count()); // return a copy of this.items
    }
}