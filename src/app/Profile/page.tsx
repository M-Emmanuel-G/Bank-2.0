import NavBar from "@/app/components/NavBar";
import { authOptions } from "@/lib/auth";
import { db } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import Image from "next/image";
import EditProfile from "../components/EditProfile";
import { Button } from "@/components/ui/button";

export default async function Profile() {
    
    const session = await getServerSession(authOptions)

    const user = await db.clients.findUnique({
       include:{
        accountBank:true
       },

        where:{
            id: session?.user.id
        }
    })

    return (
        <main className="w-screen h-screen flex flex-col items-center bg-black">
            <section className="w-full h-[90%]">

                <section className="w-full h-[30%] flex">
                    <div className="w-1/2 h-full flex flex-col justify-center items-center">
                        <Image 
                            className="rounded-2xl"
                            width={150}
                            height={150}
                            src="https://github.com/shadcn.png"
                            alt=""
                        />
                    </div>
                    <div className="w-1/2 h-full flex flex-col justify-center items-center">
                       <Button>Alterar Imagem</Button>
                       <EditProfile
                            client={{
                                id:String( user?.id),
                                userName:String(user?.user_name)
                            }}
                       />
                    </div>
                </section>

                <section className="w-full h-[70%] ">
                    <div className="w-full h-full flex flex-col overflow-y-scroll px-12">
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
                        <div className="w-full text-white flex flex-col my-2">
                            <h2 className="text-xl text-center">Informações da Conta</h2>
                        </div>
                        <div className="w-full text-white flex flex-col my-2">
                            <strong>Numero da conta:</strong>
                            <span>{user?.accountBank[0].cod_account}</span>
                        </div>
                        <div className="w-full text-white flex flex-col my-2">
                            <strong>Tipo da conta</strong>
                            <span>{user?.accountBank[0].account_type}</span>
                        </div>
                        <div className="w-full text-white flex flex-col my-2">
                            <strong>Conta criada em:</strong>
                            <span>{user?.accountBank[0].account_created}</span>
                        </div>
                    </div>
                </section>
            </section>
            <NavBar/>
        </main>
    );
}