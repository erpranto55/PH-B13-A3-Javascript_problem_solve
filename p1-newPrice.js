function newPrice(currentPrice, discount) {
  if (
    typeof currentPrice !== "number" ||
    typeof discount !== "number" ||
    discount < 0 ||
    discount > 100
  ) {
    return "Invalid";
  }
  let res = 0;
  let dis = (currentPrice * discount) / 100;
  res = currentPrice - dis;
  return res.toFixed(3);
}
