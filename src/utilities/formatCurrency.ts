const CUURENNCY_FORMATTER = new Intl.NumberFormat(undefined, {
  currency: "USD",
  style: "currency",
});

export function formatCurrency(number: number) {
  return CUURENNCY_FORMATTER.format(number);
}
