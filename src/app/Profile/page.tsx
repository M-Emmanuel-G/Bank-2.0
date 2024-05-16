import NavBar from "@/app/components/NavBar";
import { Avatar, AvatarImage } from "@/components/ui/avatar";

export default function Profile() {
    return (
        <main className="w-screen h-screen flex flex-col items-center justify-center bg-black">
            <section className="w-full h-[90%] flex">
                <Avatar>
                    <AvatarImage/>
                </Avatar>
            </section>
            <NavBar/>
        </main>
    );
}