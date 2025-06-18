export function Transactions(){
    return(
        <main className="max-w-5xl my-10 mx-auto py-0 px-4">
            <section className="text-white mt-5 flex flex-col gap-3.5 sm:flex-row justify-between">
                <div className="bg-secondary py-8 px-5 sm:w-2xs min-w-52 rounded-lg">
                    <h1 className="mb-2">Saldo total</h1>
                    <h2 className="text-2xl font-semibold">R$ 15000,00</h2>
                </div>
                <div className="bg-secondary py-8 px-5 sm:w-2xs min-w-52 rounded-lg">
                    <h1 className="mb-2">Entradas diárias</h1>
                    <h2 className="text-2xl font-semibold">R$ 500,00</h2>
                </div>
                <div className="bg-secondary py-8 px-5 sm:w-2xs min-w-52 rounded-lg">
                    <h1 className="mb-2">Saídas diárias</h1>
                    <h2 className="text-2xl font-semibold">R$ 0</h2>
                </div>
            </section>
        </main>
    )
}