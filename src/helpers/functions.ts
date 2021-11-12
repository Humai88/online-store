export const currencyConverter = (c: string) => {
  {
    if (c == "USD") {
      return "&#36;";
    }
    if (c == "GBP") {
      return "&#163;";
    }
    if (c == "AUD") {
      return "A&#36;";
    }
    if (c == "JPY") {
      return "&#165;";
    }
    if (c == "RUB") {
      return "&#8381;";
    }
  }
  return c;
};
