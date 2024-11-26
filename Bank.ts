import { Expression } from "./Expression";
import { Money } from "./Money";
import { Sum } from "./Sum";
import { Pair } from "./Pair";

export class Bank {
    private rates: Map<string, number> = new Map();

    reduce(source: Expression, to: string) : Money {
       return source.reduce(this,to);
    }
    addRate(from : string, to : string, rate:number) {
      this.rates.set(new Pair(from, to).generateKey(), rate);
      return;
    }

    rate(from : string , to : string) : number {
       return this.rates.get(new Pair(from, to).generateKey()) ?? 0;
    }
}