export default function formatCurrency(cost: number) {
  return Intl.NumberFormat("en-NZ", {
    style: "currency",
    currency: "NZD",
  }).format(Number(cost));
}
