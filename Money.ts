import { Expression } from "./Expression";

export  class Money implements Expression {
    protected amount : number;
    currency : string;
   
    constructor(amount : number, currency : string) {
        this.amount = amount;
        this.currency = currency;
    }

    
     times(multiplier : number)  {
        return new Money(this.amount * multiplier, this.currency);
     };
     plus(added : Money) : Expression {
        return new Money(this.amount * added.amount, this.currency);
     }
    equals(object: object) : boolean {
        if (!(object instanceof Money)) {
            return false;
        }
        return this.amount == object.amount && this.constructor === object.constructor;
    }



    static dollar (amount : number): Money {
      return new Money(amount, "USD");
    }

    static franc(amount : number) : Money {
        return new Money(amount, "CHF");
    }
}