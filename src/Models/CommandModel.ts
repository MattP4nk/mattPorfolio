export class CommandModel{

    id!: string;
    name!: string;
    description!: string;
    function!: string;
    type!: string | "noArg";
    
    constructor(cmdArray: string[]) {
        this.id = cmdArray[0];
        this.name = cmdArray[1];
        this.description = cmdArray[2];
        this.function = cmdArray[3];
        this.type = cmdArray[4];
    }
}