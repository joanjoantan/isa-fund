export const currencySmybols = (amount: number): string => '£' + amount.toLocaleString();

export const createData = (
    year: string,
    limit: string,
    remaining: string,
    subscription: string
  ) => {
    return { year, limit, remaining, subscription };
  }
