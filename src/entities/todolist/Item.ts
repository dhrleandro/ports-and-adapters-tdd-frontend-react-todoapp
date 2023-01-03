import UniqueIdentifier from "../../services/UniqueIdentifier";

export default class Item {

    public readonly id: string;
    public readonly description: string;
    public readonly done: boolean;

    constructor (id: string | undefined, description: string, done: boolean = false) {
        this.id = id ? id : UniqueIdentifier.generate();
        this.description = description;
        this.done = done;
    }

    public static create(id: string | undefined = undefined, description: string = '', done: boolean = false): Item {
        return new Item(id, description, done);
    }
}