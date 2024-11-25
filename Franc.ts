export class Franc {
    amount: number;
    constructor(amount : number) {
       this.amount = amount;
    }
    times (multiplier : number) {
       return new Franc(this.amount * multiplier);
    }

    equals(object: object) : boolean {
        if (!(object instanceof Franc)) {
            return false;
        }
        return this.amount == object.amount
    }
}