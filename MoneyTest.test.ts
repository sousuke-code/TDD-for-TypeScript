import { Money } from "./Money";

describe("Dollar", () => {
    it("should multiply correctly", () => {
        const five = Money.dollar(5);
        expect(Money.dollar(10)).toEqual(five.times(2));
        expect(Money.dollar(15)).toEqual(five.times(3));
    });
});

describe("Dollar", () => {
    it("test equality", () => {
        expect(Money.dollar(5).equals(Money.dollar(5))).toBe(true);
        expect(Money.dollar(5).equals(Money.dollar(6))).toBe(false);
    })
})


describe("MoneyTest", () => {
    it("test currency", () => {
        expect(Money.dollar(1).currency).toEqual("USD");
        expect(Money.franc(1).currency).toEqual("CHF");
    })
})