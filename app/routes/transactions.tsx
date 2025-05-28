import prisma from "../../prisma/prisma";
import { getTransactions } from "../features/transactions/api";
import { TransactionForm } from "../features/transactions/form";
import { Transactions } from "../features/transactions/transactions";
import { getErrorMessage } from "../utils/error";
import type { Route } from "./+types/transactions";

// para buscar dados de uma fonte externa (API) e para o browser
// seja como JSON ou componente React, exportamos um método loader
export async function loader({ request, params }: Route.LoaderArgs) {
  return {
    transactions: await getTransactions(),
  };
}

// quando queremos receber dados vindos do browser através do submit
// de um form, criamos um método chamado action
export async function action({ request, params }: Route.ActionArgs) {
  const formData = await request.formData();
  // console.log(Object.fromEntries(formData.entries()));

  const data = {
    created_at: new Date(),
    payment_date: new Date(),
    description: formData.get("description") as string,
    amount: Number(formData.get("amount")),
  };

  await prisma.transaction.create({
    data,
  });
}

export default function ({ loaderData }: Route.ComponentProps) {
  const { transactions } = loaderData;

  return (
    <section className="grid grid-cols-2 gap-8">
      <TransactionForm />
      <Transactions />
    </section>
  );
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  const errorMessage = getErrorMessage(error);

  return (
    <>
      <h1 className="text-red-600 text-2xl">Ooooopsie!</h1>
      <h2>Desculpe, ocorreu um erro</h2>
      <p>{errorMessage}</p>
    </>
  );
}
