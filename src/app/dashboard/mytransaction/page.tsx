import ListTransactions from "@/app/dashboard/myTransaction/components/listTransactions"
import { api } from "@/server/api";
import { getCookieServer } from "@/lib/cookieServer";
import { TransactionProps } from "@/lib/propsTransactions";

async function getTransaction():Promise<TransactionProps[] | []>{
  try{
    const token = await getCookieServer();
    const response = await api.get("/transaction", {
      headers:{
        Authorization: `Bearer ${token}`
      }
    })

    return response.data || [];
  }catch(err: any){
    console.log(err.message);
    return []
  }
}

export default async function MyTransaction() {
  const transactions = await getTransaction();

  return (
    <ListTransactions transactions={transactions}/>
  );
}
