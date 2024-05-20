import { Input } from "@/components/ui/input";
import { ChevronRight, Eye } from "lucide-react";

export default function Login() {
    return (
        <main className="w-screen h-screen flex flex-col items-center justify-center">
            <section>
                <form>
                    <div>

                    </div>
                    <div className=''>
                        <Input
                        style={{outline:"none"}}
                            placeholder='CPF'
                            className='p-0 border-0 border-b-2 border-black rounded-none w-80 h-8 text-center focus:outline-none'
                        />
                    </div>
                    <div className='flex items-center my-8 border-0 border-b-2 border-black'>
                        <Input
                            placeholder='Senha'
                            className=' rounded-none w-80 h-8 p-0 border-transparent text-center'
                        />
                        <Eye/>
                    </div>
                        <div className=' w-80 flex items-center my-4 justify-end'>
                        <span className='text-[10px]'>Esqueceu sua senha?</span>
                        <ChevronRight width={10} height={10}/>
                    </div>
                </form>
            </section>
        </main>
    );
}