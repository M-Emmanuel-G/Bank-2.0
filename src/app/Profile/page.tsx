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
                        <span>{session?.user.user_name}</span>
                    </div>
                </div>
               </section>
            </section>
            <NavBar/>
        </main>
    );
}