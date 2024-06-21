import { db } from "@/lib/prisma";
import CardExtract from "../components/Extract/CardExtract";
import NavBar from "../components/NavBar";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import Services from "../Services/Services";

export default async function Extract() {

  const session = await getServerSession(authOptions)

  const getCodAccount = await Services.getAccountCodClient(String(session?.user.id))

  const account = await db.accountBank.findUnique({
    
    include:{
      extract:true
    },
    where:{
      cod_account: String(getCodAccount)
    }

  })

  const teste = await db.extract.findMany({
    orderBy:{
      orderBy:"desc"
    },
    include:{
      account:true
    },
    where:{
      account_cod: getCodAccount
    }
  })

  const showExtract = teste.map((extract:any, key:number)=>{
    
    
    
    return(
      <CardExtract
        key={extract.id}
        date ={extract.date}
        account_cod={extract.account_cod}
        description={extract.description}
        operation={extract.operation}
        value={extract.value}
        id={extract.id}
        orderBy={extract.orderBy}
      />
      )
    })

  return (
    <main className="w-screen h-screen flex flex-col items-center justify-center bg-black text-white">
      <header className="w-full h-[10%] flex items-center justify-center">
        <h2 className="text-2xl">Extratos</h2>
      </header>
      <section className="w-full h-[10%] flex items-center justify-center">
        <strong> Saldo atual da conta: R$ {Number(account?.balance).toFixed(2)}</strong>
      </section>
      <section className="w-full h-[70%] flex flex-col items-center overflow-y-auto my-4">
        {showExtract}
      </section>
      <NavBar/>
    </main>
  );
}