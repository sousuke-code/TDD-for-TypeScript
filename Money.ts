export  abstract class Money {
    amount : number;
   
    constructor(amount : number) {
        this.amount = amount;
    }

    abstract times(multiplier : number) : Money ;
    equals(object: object) : boolean {
        if (!(object instanceof Money)) {
            return false;
        }
        return this.amount == object.amount && this.constructor === object.constructor;
    }

    static dollar (amount : number): Money {
      const { Dollar } = require("./Dollar");
      return new Dollar(amount);
    }

    static franc(amount : number) : Money {
        const { Franc } = require("./Franc");
        return new Franc(amount);
    }
}