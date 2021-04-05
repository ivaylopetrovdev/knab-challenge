const numFormatObj = (currency: string) => new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency,
  minimumFractionDigits: 2,
});

export default (currency: any, value: any): string => `${numFormatObj(currency).format(Number(value))}`;
