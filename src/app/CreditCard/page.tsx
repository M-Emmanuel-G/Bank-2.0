import NavBar from "../components/NavBar";
import CardCredit from "../components/CreditCard";
import NewCardCredit from "../components/CreditCard/newCardCredit";
import { db } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import Button from "../components/Button";
import UpdateCardCredit from "../components/CreditCard/updateCard";
import { TypeCreditCard } from "@prisma/client";
import Loading from "../components/Loading";

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

    const getMyCard = await db.creditCard.findUnique({
        include:{
             typeCard:true
        },
        where:{
            id: getAccount?.creditCard[0].id
        }
    })
    
    const verifyCard = ()=>{
        if(getAccount?.creditCard.length === 0){
            return(
                <span>Voce nao possui cartao!</span>
            )
         } else {
            return (
                <CardCredit
                    categoryCard={getAccount?.creditCard[0].categoryCard as string}
                    codSeg={Number(getAccount?.creditCard[0].codSeg)}
                    nameCard={getAccount?.creditCard[0].nameCard as string}
                    numberCard={Number(getAccount?.creditCard[0].numberCard)}
                    validateCard={getAccount?.creditCard[0].validadeCard as string}
                />
            )
        }
    }

    const getTypeCard = await db.typeCreditCard.findMany()

    const typeCards = getTypeCard.map((card:TypeCreditCard, key: number)=>{
        return card
    })

    return (
        <main className="w-screen h-screen flex flex-col items-center justify-center bg-black">
            <header>
                <h2 className="text-2xl text-white bold"> Meu Cartão</h2>
            </header>
            <section className="w-full h-[25%] flex flex-col items-center">
                <NewCardCredit/>
                {verifyCard()}
            </section>
            <section className="w-96 h-[65%] flex flex-col items-center mt-8">
                <div className="w-full text-center text-white">
                    <h2 className="text-xl my-4">Informacoes do cartao!</h2>
                    <div className="w-full flex justify-between my-2">
                        <strong className="text-[12px]">Cartao:</strong>
                        <span className="text-[12px]">{getMyCard?.typeCard.category}</span>
                    </div>
                    <div className="w-full flex justify-between my-2">
                        <strong className="text-[12px]">Limite:</strong>
                        <span className="text-[12px]">R$ {getMyCard?.typeCard.CardLimit.toFixed(2)}</span>
                    </div>
                    <div className="w-full flex justify-between my-2 items-center">
                        <strong className="text-[12px]">Beneficio:</strong>
                        <span className="text-[12px]">{getMyCard?.typeCard.Benefit}</span>
                    </div>
                    <div className="w-full flex justify-between my-2 items-center">
                        <strong className="text-[12px]">Validade:</strong>
                        <span className="text-[12px]">{getMyCard?.validadeCard}</span>
                    </div>
                    <div className="w-full flex justify-center my-4 items-center">
                        <UpdateCardCredit
                            typeCard={typeCards}
                            idCard={getMyCard?.id}
                        />
                    </div>
                </div>
            </section>
            <NavBar/>
            <Loading/>
        </main>
    );
}