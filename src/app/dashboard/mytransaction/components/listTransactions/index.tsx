"use client";
import { useState } from "react";
import { Pencil, Trash2 } from "lucide-react";
import Link from "next/link";
import { TransactionProps } from "@/lib/propsTransactions";
import { api } from "@/server/api";
import { getCookieClient } from "@/lib/cookieClient";

interface Props {
  transactions: TransactionProps[];
}

export default function ListTransactions({
  transactions: initialTransaction,
}: Props) {
  const [transactions, setTransactions] = useState(initialTransaction);
  const [filtroData, setFiltroData] = useState<string>("");

  async function handleDelete(id: string) {
    const token = getCookieClient();
    try {
      await api.delete(`/transaction`, {
        params: { transaction_id: id },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setTransactions(transactions.filter((item: any) => item.id !== id));
    } catch (err) {
      console.log("Erro ao excluir transação", err);
    }
  }

  function handleChangeDate(e: React.ChangeEvent<HTMLInputElement>){
    setFiltroData(e.target.value);
  }

  return (
    <main className="max-w-5xl my-10 mx-auto py-0 px-4">
      <section className="text-white mt-5 flex flex-col gap-3.5 sm:flex-row justify-between">
        <form className="mt-9 flex flex-row items-center justify-center gap-3.5 min-w-full">
          <input
            type="date"
            className="bg-secondary py-5 px-2 sm:w-2xs min-w-52 rounded-lg"
            // value={filtroData}
            onChange={handleChangeDate}
          />
          <select className="bg-secondary py-5 px-2 sm:w-2xs min-w-52 rounded-lg">
            <option value="desc">Decrescente</option>
            <option value="cresc">Crescente</option>
          </select>
          <select className="bg-secondary py-5 px-2 sm:w-2xs min-w-52 rounded-lg">
            <option value="type">Entrada</option>
            <option value="type">Saída</option>
          </select>
        </form>
      </section>
      <section className="mt-9">
        <table className="min-w-full table-auto text-sm text-left text-white border-0 rounded-t-full">
          <thead className="bg-secondary text-white uppercase">
            <tr>
              <th className="px-4 py-2">Data</th>
              <th className="px-4 py-2">Nome</th>
              <th className="px-4 py-2">Descrição</th>
              <th className="px-4 py-2">Valor</th>
              <th className="px-4 py-2">Tipo</th>
              <th className="px-4 py-2">Ações</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction) => (
              <tr
                className="bg-primary odd:bg-primary even:bg-secondary rounded-b-md"
                key={transaction.id}
              >
                <td className="px-4 py-2">
                  {transaction.date.slice(0, 10).split("-").reverse().join("/")}
                </td>
                <td className="px-4 py-2">{transaction.name}</td>
                <td className="px-4 py-2">{transaction.description}</td>
                <td className="px-4 py-2">{transaction.value.toFixed(2)}</td>
                <td className="px-4 py-2">{transaction.type.toUpperCase()}</td>
                <td className="px-4 py-2 space-x-2">
                  <div className="flex gap-4">
                    <Link
                      href={`/dashboard/editTransaction/${transaction.id}`}
                      className="text-white transition-all duration-500 hover:scale-105 hover:text-blue-500"
                    >
                      <Pencil />
                    </Link>
                    <button
                      className="text-white transition-all duration-500 hover:scale-105 hover:text-red-500"
                      onClick={() => handleDelete(transaction.id)}
                    >
                      <Trash2 />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
      {filtroData && (<p className="text-amber-300">Data selecionada: {filtroData.slice(0, 10).split("-").reverse().join("/")}</p>)}
    </main>
  );
}
