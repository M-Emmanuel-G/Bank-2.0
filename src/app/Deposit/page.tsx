import NavBar from "../components/NavBar";
import DepositComponent from "../components/Deposit/Deposit";
import { db } from "@/lib/prisma";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import Header from "../components/Header/header";
import Loading from "../components/Loading";

export default async function Deposit() {

    const session = await getServerSession(authOptions)

   const user = await db.clients.findUnique({
    include:{
        accountBank:true
    },
    where:{
        id:session?.user.id
    }
   })

    return (
        <main className="w-screen h-screen flex flex-col items-center bg-black">
            <Header/>
            <section className="w-full h-[80%] flex flex-col items-center">
                <span className="text-xl my-8 text-white"> Realize depositos para sua propria conta!</span>
                <DepositComponent
                    deposit={{
                        id: String(user?.accountBank[0].id),
                        userName:String(user?.user_name)
                    }}
                    
                />
            </section>
            <NavBar/>
            <Loading/>
        </main>
    );
}