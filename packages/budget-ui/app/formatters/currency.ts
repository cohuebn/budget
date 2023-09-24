type CurrencyFormatOptions = {
  symbol: string;
  decimals: number;
};

const defaultFormatOptions: CurrencyFormatOptions = {
  symbol: "$",
  decimals: 2,
};

export function formatCurrency(
  value: number,
  options: Partial<CurrencyFormatOptions> = {}
) {
  const defaultedOptions: CurrencyFormatOptions = {
    ...defaultFormatOptions,
    ...options,
  };
  const negativePrefix = value < 0 ? "-" : "";
  const absoluteCurrencyValue = Math.abs(value).toFixed(2);
  return `${negativePrefix}${defaultedOptions.symbol}${absoluteCurrencyValue}`;
}
