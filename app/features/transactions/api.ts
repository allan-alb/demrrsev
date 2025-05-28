import prisma from "../../../prisma/prisma";

export async function getTransactions() {
  //   throw new Error("erro ao obter as transações");

  await new Promise((resolve) => setTimeout(resolve, 3000));

  return await prisma.transaction.findMany({
    orderBy: {
      created_at: "desc",
    },
  });
}
