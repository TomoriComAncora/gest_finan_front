export function Transactions(){
    return(
        <main className="max-w-5xl my-10 mx-auto py-0 px-4">
            <h1 className="text-5xl text-white font-semibold">Olá, Lucas</h1>
            <section className="text-white mt-5 sm:flex justify-between">
                <div className="bg-secondary py-8 px-5 md:min-w-2xs max-w-3xl rounded-lg">
                    <h1 className="mb-2">Saldo total</h1>
                    <h2 className="text-2xl font-semibold">R$ 15000,00</h2>
                </div>
                <div className="bg-secondary py-8 px-5 md:min-w-2xs max-w-3xl rounded-lg">
                    <h1 className="mb-2">Entradas diárias</h1>
                    <h2 className="text-2xl font-semibold">R$ 500,00</h2>
                </div>
                <div className="bg-secondary py-8 px-5 md:min-w-2xs max-w-3xl rounded-lg">
                    <h1 className="mb-2">Saídas diárias</h1>
                    <h2 className="text-2xl font-semibold">R$ 0</h2>
                </div>
            </section>
        </main>
    )
}