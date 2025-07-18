"use client";
import { useEffect, useState } from "react";
import { api } from "@/server/api";
import { getCookieClient } from "@/lib/cookieClient";
import { Button } from "@/app/dashboard/components/button";
import { useRouter } from "next/navigation";

interface EditFormProps {
  id: string;
}

export function EditForm({ id }: EditFormProps) {
  const router = useRouter();
  const [form, setForm] = useState({
    name: "",
    date: "",
    description: "",
    value: "",
    type: "entrada",
  });

  useEffect(() => {
    async function editTransaction() {
      const token = getCookieClient();

      const { data: transactions } = await api.get("/transaction", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const transaction = transactions.find((item: any) => item.id === id);
      if (transaction) {
        setForm({
          name: transaction.name,
          date: transaction.date.slice(0, 10),
          description: transaction.description ?? "",
          value: String(transaction.value),
          type: transaction.type,
        });
      }
    }
    editTransaction();
  }, [id]);

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleEditTransaction(formData: FormData) {
    const name = formData.get("name");
    const date = formData.get("date");
    const description = formData.get("description");
    const value = formData.get("value");
    const type = formData.get("type");

    const data = {
      name: name as string,
      date: date as string,
      value: Number(value),
      description: description as string,
      type: type as "entrada" | "saida",
    };
    const token = getCookieClient();

    try {
      await api.put(`/transaction/${id}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log("Cadastrado com sucesso!");
      router.push("/dashboard/myTransaction");
    } catch (err: any) {
      console.log(err);
      console.log("Erro ao editar transação");
    }
  }

  return (
    <main className="max-w-5xl my-10 mx-auto py-0 px-4">
      <h1 className="text-white text-3xl">Editar transação</h1>
      <form
        className="max-w-full mt-6 flex flex-col gap-6 items-center"
        action={handleEditTransaction}
      >
        <input
          type="text"
          className="bg-secondary w-[90%] text-white h-14 px-2 py-4 border-0 rounded-lg"
          name="name"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          type="date"
          className="bg-secondary w-[90%] text-white h-14 px-2 py-4 border-0 rounded-lg"
          name="date"
          value={form.date}
          onChange={handleChange}
          required
        />
        <textarea
          className="bg-secondary w-[90%] text-white h-20 px-2 py-4 border-0 rounded-lg resize-none"
          name="description"
          value={form.description}
          onChange={handleChange}
        ></textarea>
        <input
          type="text"
          className="bg-secondary w-[90%] text-white h-14 px-2 py-4 border-0 rounded-lg"
          name="value"
          value={form.value}
          onChange={handleChange}
          required
        />
        <select
          className="bg-secondary w-[90%] text-white h-14 px-2 py-4 border-0 rounded-lg"
          value={form.type}
          onChange={handleChange}
          name="type"
        >
          <option value="entrada">Entrada</option>
          <option value="saida">Saída</option>
        </select>
        <Button name="Salvar" />
      </form>
    </main>
  );
}
