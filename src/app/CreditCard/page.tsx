import NavBar from "../components/NavBar";
import CardCredit from "../components/CreditCard";
import NewCardCredit from "../components/CreditCard/newCardCredit";
import { db } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

export default async function CreditCard() {

    const session = await getServerSession(authOptions)

    const getClient = await db.clients.findUnique({
        include:{
            accountBank:true
        },
        where:{
            id: session?.user.id
        }
    })

    const getAccount = await db.accountBank.findUnique({
        include:{
            creditCard:true
        },
        where:{
            cod_account: getClient?.accountBank[0].cod_account
        }
    })

    return (
        <main className="w-screen h-screen flex flex-col items-center justify-center bg-black">
            <header>
                <h2 className="text-2xl text-white bold"> Meu Cartão</h2>
            </header>
            <section className="w-full h-[25%] flex flex-col items-center">
                <NewCardCredit/>
                <CardCredit
                    categoryCard={getAccount?.creditCard[0].categoryCard as string}
                    codSeg={Number(getAccount?.creditCard[0].codSeg)}
                    nameCard={getAccount?.creditCard[0].nameCard as string}
                    numberCard={Number(getAccount?.creditCard[0].numberCard)}
                    validateCard={getAccount?.creditCard[0].validadeCard as string}
                />
            </section>
            <section className="w-full h-[65%] flex flex-col items-center mt-8">
                <div className="text-white">
                    <span>Informacoes do cartao!</span>
                </div>
            </section>
            <NavBar/>
        </main>
    );
}