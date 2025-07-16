import { EditForm } from "./components";

export default async function EditTransaction({params}: {params: {id: string}}){

    const id = params.id

    return(
        <EditForm id={id}/>
    )
}