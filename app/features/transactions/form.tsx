import { Form, useFetcher } from "react-router";

export function TransactionForm() {
  const fetcher = useFetcher();

  return (
    <fetcher.Form method="POST">
      <input type="text" name="description" placeholder="Descrição" />
      <input type="number" name="amount" placeholder="Valor" />
      <button
        type="submit"
        className="disabled:opacity-20"
        disabled={fetcher.state !== "idle"}
      >
        Salvar
      </button>
    </fetcher.Form>
  );
}
