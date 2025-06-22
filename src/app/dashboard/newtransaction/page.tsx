export default function NewTransaction() {
  return (
    <main className="max-w-5xl my-10 mx-auto py-0 px-4">
      <h1 className="text-white text-3xl">Nova transação</h1>
      <form className="max-w-full mt-6 flex flex-col gap-6 items-center">
        <input
          type="text"
          className="bg-secondary w-[90%] text-white h-14 px-2 py-4 border-0 rounded-lg"
          placeholder="Nome..."
        />
        <input
          type="date"
          className="bg-secondary w-[90%] text-white h-14 px-2 py-4 border-0 rounded-lg"
        />
        <textarea
          className="bg-secondary w-[90%] text-white h-20 px-2 py-4 border-0 rounded-lg"
          placeholder="Sua descrição..."
        ></textarea>
        <input
          type="text"
          className="bg-secondary w-[90%] text-white h-14 px-2 py-4 border-0 rounded-lg"
          placeholder="Coloque aqui o valor..."
        />
      </form>
    </main>
  );
}
