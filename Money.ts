export  class Money {
    protected amount : number;
    currency : string;
   
    constructor(amount : number, currency : string) {
        this.amount = amount;
        this.currency = currency;
    }

    
     times(multiplier : number)  {
        return new Money(this.amount * multiplier, this.currency);
     };
    equals(object: object) : boolean {
        if (!(object instanceof Money)) {
            return false;
        }
        return this.amount == object.amount && this.constructor === object.constructor;
    }

    static dollar (amount : number): Money {
      const { Dollar } = require("./Dollar");
      return new Dollar(amount, "USD");
    }

    static franc(amount : number) : Money {
        const { Franc } = require("./Franc");
        return new Franc(amount, "CHF");
    }
}