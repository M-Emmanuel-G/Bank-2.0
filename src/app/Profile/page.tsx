import NavBar from "@/app/components/NavBar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { authOptions } from "@/lib/auth";
import { db } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import Image from "next/image";
import EditProfile from "../components/EditProfile";
import { Button } from "@/components/ui/button";

export default async function Profile() {
    
    const session = await getServerSession(authOptions)

    const user = await db.clients.findUnique({
        select:{
            income:true,
            user_name:true
        },
        where:{
            id: session?.user.id
        }
    })

    return (
        <main className="w-screen h-screen flex flex-col items-center justify-center bg-black">
            <section className="w-full h-[90%] flex flex-col items-center">
               <section className="w-80 absolute">
               <div>
                    <Image 
                        className="rounded-2xl"
                        width={300}
                        height={300}
                        src="https://github.com/shadcn.png"
                        alt=""/>
                </div>
                <div className="w-full flex justify-between">
                    <Button className="my-2">Alterar Imagem</Button>
                    <EditProfile/>
                </div>
                <div className="w-80 h-96 flex flex-col overflow-y-scroll">
                    <div className="w-full text-white flex flex-col my-2">
                        <strong>Nome completo:</strong>
                        <span>{session?.user.first_name} {session?.user.last_name}</span>
                    </div>
                    <div className="w-full text-white flex flex-col my-2">
                        <strong>Data de Nascimento:</strong>
                        <span>{session?.user.birth_date}</span>
                    </div>
                    <div className="w-full text-white flex flex-col my-2">
                        <strong>Email:</strong>
                        <span>{session?.user.email}</span>
                    </div>
                    <div className="w-full text-white flex flex-col my-2">
                        <strong>Telefone:</strong>
                        <span>{session?.user.phone}</span>
                    </div>
                    <div className="w-full text-white flex flex-col my-2">
                        <strong>Endereço:</strong>
                        <span>{session?.user.full_address} </span>
                    </div>
                    <div className="w-full text-white flex flex-col my-2">
                        <strong>CEP:</strong>
                        <span>{session?.user.cod_postal} </span>
                    </div>
                    <div className="w-full text-white flex flex-col my-2">
                        <strong>Nome de usuário</strong>
                        <span>{user?.user_name}</span>
                    </div>
                    <div className="w-full text-white flex flex-col my-2">
                        <strong>Renda mensal:</strong>
                        <span>R$ {Number(user?.income).toFixed(2)}</span>
                    </div>
                </div>
               </section>
            </section>
            <NavBar/>
        </main>
    );
}