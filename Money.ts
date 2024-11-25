export class Money {
    amount : number;
    constructor(amount : number) {
        this.amount = amount;
    }
    equals(object: object) : boolean {
        if (!(object instanceof Money)) {
            return false;
        }
        return this.amount == object.amount
    }
}