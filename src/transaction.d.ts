enum TransactionType {
  Expense = "exp",
  Income = "inc",
}

type Transaction = {
  id: number;
  name: string;
  amount: number;
  description?: string;
  type: TransactionType;
};
