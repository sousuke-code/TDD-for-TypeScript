import { Expression } from "./Expression";
import { Money } from "./Money";

export class Sum implements Expression {
    augend : Money ;
    addend : Money ;
    constructor(augend: Money, addend: Money) {
        this.augend = augend;
        this.addend = addend;
    }

    public reduce(to : string) : Money {
        const amount = this.augend.reduce(to).amount + this.addend.reduce(to).amount;
        return new Money(amount, to);
    }

}


