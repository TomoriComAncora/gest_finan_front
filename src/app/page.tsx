import logoImg from "/public/logo.png";
import Image from "next/image";
import Link from "next/link"

export default function Home() {
  return (
    <>
      <div>
        <Image src={logoImg} alt="Logo Gesfin" />
      </div>
      <section>
        <form>
          <input
            type="email"
            required
            name="email"
            placeholder="Digite seu email..."
            className="bg-amber-50"
          />
          <input
            type="password"
            required
            name="password"
            placeholder="********"
            className="bg-amber-50"
          />

          <button type="submit" className="bg-blue-700">Acessar</button>
        </form>
        <Link className='text-white bg-button' href={"/signup"} >
          Não possui cadastro? Cadastre-se
        </Link>
      </section>
    </>
  );
}
