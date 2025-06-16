"use client";
import Link from "next/link";
import Image from "next/image";
import logoImg from "/public/logo.png";
import { LogOut } from "lucide-react";
import { deleteCookie } from "cookies-next";
import { useRouter } from "next/navigation";
export function Header() {
  const router = useRouter();
  async function handleLogout() {
    deleteCookie("session", { path: "/" });
    router.replace("/");
  }

  return (
    <header className="h-20">
      <div className="max-w-full h-20 my-0 mx-auto py-0 px-4 flex items-center justify-between bg-secondary">
        <Link href={"/dashboard"} className="flex items-center">
          <Image
            src={logoImg}
            alt="Logo Gesfin"
            priority={true}
            quality={100}
            width={100}
            height={60}
          />
          <h1 className="text-white text-3xl">Dashboard</h1>
        </Link>

        <nav className="flex items-center gap-3.5 text-white">
          <Link
            href={"/dashboard/mytransaction"}
            className="transition-all duration-500 hover:text-button"
          >
            Minhas Transações
          </Link>
          <Link
            href={"/dashboard/newtransaction"}
            className="transition-all duration-500 hover:text-button"
          >
            Nova Transação
          </Link>
          <form action={handleLogout}>
            <button
              type="submit"
              className="ml-4 transition-all duration-500 hover:scale-105"
            >
              <LogOut size={24} color="#FFF" />
            </button>
          </form>
        </nav>
      </div>
    </header>
  );
}
