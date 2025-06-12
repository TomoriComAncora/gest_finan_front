import logoImg from "/public/logo.png";
import Image from "next/image";
import Link from "next/link";
import {api} from "@/server/api";
import {redirect} from "next/navigation"
import {cookies} from "next/headers"

export default function Home() {
  async function handleLogin(formData:FormData){
    "use server"
    const email = formData.get("email");
    const password = formData.get("password");

    console.log(email);
    console.log(password);

    if(email === "" || password === ""){
      console.log("PREENCHA TODOS OS CAMPOS");
      return;
    }

    try{
      const response = await api.post("/session", {
        email,
        password,
      });

      if(!response.data.token){
        return;
      }
      console.log(response.data);

      const expressTime = 24 * 60 * 60 * 1000;
      const cookiesStore = await cookies();

      cookiesStore.set("session", response.data.token, {
        maxAge: expressTime,
        path: "/",
        httpOnly: false,
        secure: process.env.NODE_ENV === 'production'
      })

    }catch(err){
      console.log("Error");
      console.log(err);
    }
    
    redirect("/dashboard");
  }

  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-center bg-primary">
        <section className="mt-6 py-4 px-3 flex flex-col items-center justify-center gap-3.5 bg-secondary w-[90%] sm:w-[600px]">
          <Image src={logoImg} alt="Logo Gesfin" width={200} />
          <form className="text-white pb-4 text-lg flex flex-col w-[90%] gap-4" action={handleLogin}>
            <input
              className="h-10 border-2 border-gray-500 p-4 rounded-lg bg-primary text-white text-lg placeholder-gray-200"
              type="email"
              required
              name="email"
              placeholder="Digite seu email..."
            />
            <input
              className="h-10 border-2 border-gray-500 p-4 rounded-lg bg-primary text-white text-lg placeholder-gray-200"
              type="password"
              required
              name="password"
              placeholder="********"
            />

            <button
              type="submit"
              className="h-10 text-lg bg-button rounded-lg font-semibold text-white flex items-center justify-center transition-all duration-500 hover:scale-105"
            >
              Acessar
            </button>
          </form>
          <span className="text-white">
            Não possui cadastro?
            <Link
              href={"/signup"}
              className="text-button mx-1"
            >
              Cadastre-se agora
            </Link>
          </span>
        </section>
      </div>
    </>
  );
}
