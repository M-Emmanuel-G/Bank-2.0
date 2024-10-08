import CardService from "../components/CardService";
import Image from "next/image";
import NavBar from "../components/NavBar";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { db } from "@/lib/prisma";
import Header from "../components/Header/header";
import GetBalance from "../components/Home/Balance";


export default async function Home() {

    const session = await getServerSession(authOptions)

    

    const user = await db.clients.findUnique({
        select:{
            accountBank:true
        },
        where:{
            id: session?.user.id
        }
    })

    return (
        <main className="w-screen h-screen flex flex-col text-white bg-black">
           <Header/>
            <section className="w-full h-[10%] flex justify-center items-center ">
               <GetBalance
                balance={Number(user?.accountBank[0].balance)}
               />
            </section>

                        {/* Promo-Divulgacao */}

            <section className="w-full h-[20%] flex items-center justify-center" >
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
            <section className="w-full h-[20%] flex justify-center items-center">
                <div className="flex justify-center gap-4">
                    {/* <CardService
                        service="PIX"
                        urlImage="https://utfs.io/f/d1d53c8f-5526-4070-8e65-e216271ff221-1pxb.jpg"
                        path="/"
                    />
                    <CardService
                        service="Pagamentos"
                        urlImage="https://utfs.io/f/6afc5f08-1d2e-4db8-a7e5-b9c494656fee-met11h.webp"
                        path="/"
                    /> */}
                    <CardService
                        service="Depositos"
                        urlImage="https://utfs.io/f/3ab80d4e-4887-4851-9d3f-9a1e4da0395e-jm03e7.jpg"
                        path="/Deposit"
                        
                    />
                    <CardService
                        service="Transferéncias"
                        urlImage="https://utfs.io/f/dced5265-3be4-4ba7-9506-3059a5328699-l6lre3.png"
                        path="/Transfer"
                    />
                    <CardService
                        service="Extrato"
                        urlImage="https://utfs.io/f/8db8eaf1-f1dd-4d46-8772-329e14e52f11-ll4vwf.webp"
                        path="/Extract"
                    />
                </div>
            </section>
            <section className="w-full h-[30%] flex"></section>
            <section className="w-full h-[10%] flex justify-center items-center">
                <NavBar/>
            </section>
        </main>
    );
}