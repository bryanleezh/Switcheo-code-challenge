import { currencies } from "../data";

export function currencySwap(val: number, payCurrency: string, receiveCurrency: string) : number{
    var payCurrencyWorth, receiveCurrencyWorth, exchangeRate = 0;

    for (let currency of currencies) {
        if (currency.currency === payCurrency) {
            payCurrencyWorth = currency.price;
        } else if (currency.currency === receiveCurrency) {
            receiveCurrencyWorth = currency.price;
        }
    }
    if (payCurrencyWorth && receiveCurrencyWorth) {
        exchangeRate = payCurrencyWorth / receiveCurrencyWorth;
    }
    return Number((val * exchangeRate).toFixed(4));
}