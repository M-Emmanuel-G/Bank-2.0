import NavBar from "@/app/components/NavBar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import Image from "next/image";

export default async function Profile() {
    
    const session = await getServerSession(authOptions) 

    return (
        <main className="w-screen h-screen flex flex-col items-center justify-center bg-black">
            <section className="w-full h-[90%] flex flex-col items-center">
               <section className="w-80">
               <div>
                    <Image 
                        className="rounded-2xl"
                        width={300}
                        height={300}
                        src="https://github.com/shadcn.png"
                        alt=""/>
                </div>
                <div>
                    <div className="text-white flex justify-between">
                        <strong>Nome completo:</strong>
                        <span>{session?.user.first_name} {session?.user.last_name}</span>
                    </div>
                    <div className="text-white flex justify-evenly">
                        <strong>Data de Nascimento:</strong>
                        <span>{session?.user.birth_date}</span>
                    </div>
                    <div className="text-white flex justify-evenly">
                        <strong>Email:</strong>
                        <span>{session?.user.email}</span>
                    </div>
                    <div className="text-white flex justify-evenly">
                        <strong>Telefone:</strong>
                        <span>{session?.user.phone}</span>
                    </div>
                    <div className="text-white flex justify-evenly">
                        <strong>Endereço:</strong>
                        <span>{session?.user.full_address} </span>
                    </div>
                    <div className="text-white flex justify-evenly">
                        <strong>CEP:</strong>
                        <span>{session?.user.cod_postal} </span>
                    </div>
                </div>
               </section>
            </section>
            <NavBar/>
        </main>
    );
}