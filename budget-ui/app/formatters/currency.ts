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
  return `${defaultedOptions.symbol}${value.toFixed(2)}`;
}
