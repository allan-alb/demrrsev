import { useLoaderData } from "react-router";
import type { loader } from "../../routes/transactions";

export function Transactions() {
  const { transactions } = useLoaderData<typeof loader>();

  return (
    <div>
      <h1>Transações</h1>
      <ul>
        {transactions.map((t) => (
          <li key={t.id}>
            Descrição: {t.description}, valor: {t.amount}
          </li>
        ))}
      </ul>
    </div>
  );
}
