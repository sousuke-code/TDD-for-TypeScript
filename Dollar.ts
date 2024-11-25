
export class Dollar {
    amount: number;
    constructor(amount : number) {
       this.amount = amount;
    }
    times (multiplier : number) {
       return new Dollar(this.amount * multiplier);
    }

    equals(object: object) : boolean {
        if (!(object instanceof Dollar)) {
            return false;
        }
        return this.amount == object.amount
    }
}