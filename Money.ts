import { Bank } from "./Bank";
import { Expression } from "./Expression";
import { Sum } from "./Sum";

export  class Money implements Expression {
    amount : number;
    currency : string;
   
    constructor(amount : number, currency : string) {
        this.amount = amount;
        this.currency = currency;
    }

    
     times(multiplier : number)  {
        return new Money(this.amount * multiplier, this.currency);
     };
     plus(added : Money) : Expression {
        return new Sum(this, added);
     }
    equals(object: object) : boolean {
        if (!(object instanceof Money)) {
            return false;
        }
        return this.amount == object.amount && this.constructor === object.constructor;
    }


    public reduce(bank : Bank,to : string ): Money {
       const rate = bank.rate(this.currency,to);
       return new Money(this.amount / rate, to);
    }

    static dollar (amount : number): Money {
      return new Money(amount, "USD");
    }

    static franc(amount : number) : Money {
        return new Money(amount, "CHF");
    }
}