import NavBar from "../components/NavBar";
import Button from "../components/Button";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import SendTransfer from "../components/Transfer/sendTransfer";

export default async function Transfer() {

    const session = await getServerSession(authOptions)

    return (
        <main className="w-screen h-screen flex flex-col items-center bg-black">
            <section className="w-full h-[90%] flex flex-col relative ">
                <h2 className="text-2xl text-white text-center my-8">Transferencias</h2>
                <section className="w-full h-full flex justify-center items-center">
                    <SendTransfer/>
                </section>
            </section>
            <NavBar/>
        </main>
    );
}