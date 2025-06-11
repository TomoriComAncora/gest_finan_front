import logoImg from "/public/logo.png";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-center bg-primary">
        <Image src={logoImg} alt="Logo Gesfin" width={230} />
        <section className="mt-2 flex flex-col items-center justify-center gap-4 w-full max-w-md sm:w-11/12">
          <form className="flex flex-col items-center justify-center gap-1.5 text-white text-lg pb-4 w-11/12">
            <input
              className="h-10 p-4 border-2 border-gray-200 rounded-lg bg-secondary text-lg"
              type="email"
              required
              name="email"
              placeholder="Digite seu email..."
            />
            <input
              className="h-10 p-4 border-2 border-gray-200 rounded-lg bg-secondary"
              type="password"
              required
              name="password"
              placeholder="********"
            />

            <button type="submit" className="bg-button h-10 text-lg">
              Acessar
            </button>
          </form>
          <Link className="text-white bg-button" href={"/signup"}>
            Não possui cadastro? Cadastre-se
          </Link>
        </section>
      </div>
    </>
  );
}
