export class Queue {
    constructor(private items: Array<any> = []) {}
    add(element: any) {
        return this.items.push(element);
    }
    next():any{
        if(this.items.length > 0) {
            return this.items.shift();
        }
    }
    isEmpty():boolean{
       return this.items.length == 0;
    }
    clear():void{
        this.items = [];
    }
}