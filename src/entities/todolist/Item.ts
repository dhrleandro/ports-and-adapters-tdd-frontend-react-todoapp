import UniqueIdentifier from "../../services/UniqueIdentifier";

export default class Item {

    constructor (readonly id: string | undefined, readonly description: string, readonly done: boolean = false) {
        this.id = id ? id : UniqueIdentifier.generate();
        this.description = description;
        this.done = done;
    }
}