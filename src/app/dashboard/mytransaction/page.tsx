export default function MyTransaction() {
  return (
    <main className="max-w-5xl my-10 mx-auto py-0 px-4">
      <section className="text-white mt-5 flex flex-col gap-3.5 sm:flex-row justify-between">
        <form className="mt-9 flex flex-row items-center justify-center gap-3.5 min-w-full">
          <input
            type="date"
            className="bg-secondary py-5 px-2 sm:w-2xs min-w-52 rounded-lg"
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
              <th className="px-4 py-2">Descrição</th>
              <th className="px-4 py-2">Valor</th>
              <th className="px-4 py-2">Tipo</th>
              <th className="px-4 py-2">Ações</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-primary">
              <td className="px-4 py-2">18/06/2025</td>
              <td className="px-4 py-2">Salário</td>
              <td className="px-4 py-2">R$ 2800</td>
              <td className="px-4 py-2">Entrada</td>
              <td className="px-4 py-2 space-x-2">
                <button className="text-blue-500 hover:underline">
                  Editar
                </button>
                <button className="text-red-500 hover:underline">
                  Excluir
                </button>
              </td>
            </tr>
            <tr className="bg-secondary">
              <td className="px-4 py-2">18/06/2025</td>
              <td className="px-4 py-2">Salário</td>
              <td className="px-4 py-2">R$ 2800</td>
              <td className="px-4 py-2">Entrada</td>
              <td className="px-4 py-2 space-x-2">
                <button className="text-blue-500 hover:underline">
                  Editar
                </button>
                <button className="text-red-500 hover:underline">
                  Excluir
                </button>
              </td>
            </tr>
            <tr className="bg-primary">
              <td className="px-4 py-2">18/06/2025</td>
              <td className="px-4 py-2">Salário</td>
              <td className="px-4 py-2">R$ 2800</td>
              <td className="px-4 py-2">Entrada</td>
              <td className="px-4 py-2 space-x-2">
                <button className="text-blue-500 hover:underline">
                  Editar
                </button>
                <button className="text-red-500 hover:underline">
                  Excluir
                </button>
              </td>
            </tr>
            <tr className="bg-secondary">
              <td className="px-4 py-2">18/06/2025</td>
              <td className="px-4 py-2">Salário</td>
              <td className="px-4 py-2">R$ 2800</td>
              <td className="px-4 py-2">Entrada</td>
              <td className="px-4 py-2 space-x-2">
                <button className="text-blue-500 hover:underline">
                  Editar
                </button>
                <button className="text-red-500 hover:underline">
                  Excluir
                </button>
              </td>
            </tr>
            
          </tbody>
        </table>
      </section>
    </main>
  );
}
