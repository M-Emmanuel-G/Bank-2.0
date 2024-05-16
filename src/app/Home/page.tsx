import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { EyeOff } from "lucide-react";
import CardService from "../components/CardService";
import Image from "next/image";
import NavBar from "../components/NavBar";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";


export default async function Home() {

    const session = await getServerSession(authOptions)

    return (
        <main className="w-screen h-screen flex flex-col text-white bg-black">
            <header className="w-full h-[10%] flex items-center justify-between">
                <div></div>
                <div className="flex">
                    <div>
                        <Avatar>
                            <AvatarImage src="https://github.com/shadcn.png" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                    </div>
                    <div className="flex flex-col mx-2">
                        <span className="text-sm ">Olá, {session?.user?.name}</span>
                        <span className="text-[8px]">Bem vindo de volta</span>
                    </div>
                </div>
                <div></div>
            </header>

            {/* Saldo */}

            <section className="w-full h-[10%] flex justify-center items-center ">
                <div className="w-96 h-3/4 bg-gray-900 flex justify-between items-center rounded-3xl">
                    <div className=" flex flex-col ml-8">
                        <span className="text-[12px]">Saldo</span>
                        <span>R$ ****</span>
                    </div>
                    <div className="mr-6">
                        <EyeOff/>
                    </div>
                </div>
            </section>

        {/* Promo-Divulgacao */}

            <section className="w-ful h-[20%] flex items-center justify-center" >
                <Image 
                    src="https://utfs.io/f/311eabf4-e7ba-4b41-812b-118e62d445c7-eyedpy.png" 
                    alt=""
                    width={0}
                    height={0}
                    sizes="100vw"
                    quality={100}
                    className="w-80 h-24"
                />
            </section>
            <section className="w-full h-[20%] flex justify-evenly items-center">
                <CardService
                    service="PIX"
                    urlImage="https://utfs.io/f/d1d53c8f-5526-4070-8e65-e216271ff221-1pxb.jpg"
                    path="/"
                />
                <CardService
                    service="Pagamentos"
                    urlImage="https://utfs.io/f/6afc5f08-1d2e-4db8-a7e5-b9c494656fee-met11h.webp"
                    path="/"
                />
                <CardService
                    service="Depositos"
                    urlImage="https://utfs.io/f/3ab80d4e-4887-4851-9d3f-9a1e4da0395e-jm03e7.jpg"
                    path="/"
                />
                <CardService
                    service="Transferéncias"
                    urlImage="https://utfs.io/f/dced5265-3be4-4ba7-9506-3059a5328699-l6lre3.png"
                    path="/"
                />
            </section>
            <section className="w-full h-[30%] flex"></section>
            <section className="w-full h-[10%] flex justify-center items-center">
                <NavBar/>
            </section>
        </main>
    );
}