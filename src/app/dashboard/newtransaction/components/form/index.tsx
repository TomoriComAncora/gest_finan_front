"use client";
import { Button } from "@/app/dashboard/components/button";
import { api } from "@/server/api";
import { getCookieClient } from "@/lib/cookieClient";
import { useRouter } from "next/navigation";

export function Form() {
  const router = useRouter();
  async function handleRegisterTransaction(formData: FormData) {
    const name = formData.get("name");
    const date = formData.get("date");
    const description = formData.get("description");
    const value = formData.get("value");
    const type = formData.get("type");

    if (!name || !date || !value || !type) {
      console.log("passou aqui");
      return;
    }

    console.log({
      name,
      date,
      value,
      description,
      type,
    });

    const data = {
      name: name as string,
      date: date as string,
      value: Number(value),
      description: description as string,
      type: type as "entrada" | "saida",
    };
    const token = getCookieClient();

    try {
      await api.post("/transaction", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log("Cadastrado com sucesso!");
    } catch (err: any) {
      console.log(err);
      console.log("Erro ao cadastrar transição");
    }
    router.push("/dashboard");
  }

  return (
    <main className="max-w-5xl my-10 mx-auto py-0 px-4">
      <h1 className="text-white text-3xl">Nova transação</h1>
      <form
        className="max-w-full mt-6 flex flex-col gap-6 items-center"
        action={handleRegisterTransaction}
      >
        <input
          type="text"
          className="bg-secondary w-[90%] text-white h-14 px-2 py-4 border-0 rounded-lg"
          name="name"
          placeholder="Nome..."
          required
        />
        <input
          type="date"
          className="bg-secondary w-[90%] text-white h-14 px-2 py-4 border-0 rounded-lg"
          name="date"
          required
        />
        <textarea
          className="bg-secondary w-[90%] text-white h-20 px-2 py-4 border-0 rounded-lg resize-none"
          name="description"
          placeholder="Sua descrição..."
        ></textarea>
        <input
          type="text"
          className="bg-secondary w-[90%] text-white h-14 px-2 py-4 border-0 rounded-lg"
          name="value"
          placeholder="Coloque aqui o valor..."
          required
        />
        <select
          className="bg-secondary w-[90%] text-white h-14 px-2 py-4 border-0 rounded-lg"
          name="type"
        >
          <option value="entrada">Entrada</option>
          <option value="saida">Saída</option>
        </select>
        <Button name="Nova transação" />
      </form>
    </main>
  );
}
