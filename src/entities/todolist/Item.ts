import UniqueIdentifier from "../../utils/UniqueIdentifier";

export default class Item {

    public id: string;
    public description: string;
    public done: boolean;

    constructor (id: string | undefined, description: string, done: boolean = false) {
        this.id = id ? id : UniqueIdentifier.generate();
        this.description = description;
        this.done = done;
    }

    public static create(id: string | undefined = undefined, description: string = '', done: boolean = false): Item {
        return new Item(id, description, done);
    }
}