type Expense = {
  item: string;
  detail: string;
  amount: number;
};

type ExpenseTableProps = {
  expenses: Expense[];
};

const currencyFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

export function formatCurrency(amount: number) {
  return currencyFormatter.format(amount);
}

export function getTotal(expenses: Expense[]) {
  return expenses.reduce((sum, expense) => sum + expense.amount, 0);
}

export default function ExpenseTable({ expenses }: ExpenseTableProps) {
  const total = getTotal(expenses);

  return (
    <div className="table-wrap">
      <table className="report-table expense-table">
        <thead>
          <tr>
            <th>Expense Category</th>
            <th>Business Detail</th>
            <th className="amount">Estimated Cost</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense) => (
            <tr key={expense.item}>
              <td data-label="Expense Category">{expense.item}</td>
              <td data-label="Business Detail">{expense.detail}</td>
              <td className="amount" data-label="Estimated Cost">
                {formatCurrency(expense.amount)}
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={2} data-label="Trip Total">
              Trip Total
            </td>
            <td className="amount" data-label="Total">
              {formatCurrency(total)}
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}
