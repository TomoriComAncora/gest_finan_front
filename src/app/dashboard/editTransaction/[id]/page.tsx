import { api } from "@/server/api"
import { getCookieServer } from "@/lib/cookieServer";

export default async function EditTransaction({params}: {params: {id: string}}){

    const id = params.id

    const token = await getCookieServer();

    const {data: transactions} = await api.get("/transaction", {
        headers:{
            Authorization: `Bearer ${token}`
        }
    });

    const transaction = transactions.find((item: any) => item.id === id)
    return(
        <h1 className="text-white">Editar transação: {transaction.name}</h1>
    )
}