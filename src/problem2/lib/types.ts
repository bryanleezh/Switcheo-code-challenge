interface CurrencyPickerProps {
    initialValue?: string;
    onInitialValueChange?: (newCurrency : string) => void;   
}

interface CoinInputProps {
    type: "pay" | "receive";
    onSelectedCurrencyChange: (newCurrency: string) => void;
    onPayCurrencyValueChange: (newValue: number) => void;
    disabledValue: number;
}

interface ExchangeDialogProps {
    onHandleExchange: () => void;
}

export type {
    CurrencyPickerProps,
    CoinInputProps,
    ExchangeDialogProps,
}