import logoImg from "/public/logo.png";
import Image from "next/image";
import Link from "next/link";

export default function SignUp() {
  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-center bg-primary">
        <section className="mt-6 py-4 px-3 flex flex-col items-center justify-center gap-3.5 bg-secondary w-[90%] sm:w-[600px]">
          <Image src={logoImg} alt="Logo Gesfin" width={200}/>
            <h1 className="text-white font-medium text-lg">Criando sua conta</h1>
          <form className="text-white pb-4 text-lg flex flex-col w-[90%] gap-4">
            <input
              className="h-10 border-2 border-gray-500 p-4 rounded-lg bg-primary text-white text-lg placeholder-gray-200"
              type="text"
              required
              name="name"
              placeholder="Digite seu nome..."
            />
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
              Cadastrar
            </button>
          </form>
          <span className="text-white">
            Já possui cadastro?
            <Link
              href={"/"}
              className="text-button mx-1"
            >
              Acesse agora
            </Link>
          </span>
        </section>
      </div>
    </>
  );
}
