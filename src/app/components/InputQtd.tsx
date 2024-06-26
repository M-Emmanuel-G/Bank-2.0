import { Minus, Plus } from "lucide-react";

interface InputProps{
    value:number
}

export default function InputQtd(params:InputProps) {

    return (
        <div className="flex items-center">
            <Minus style={{color:"white"}}/>
            <input
                className="w-20 h-10 border-b-2 border-purple-600 bg-transparent outline-none text-white text-center"
                value={params.value}
                />
            <Plus style={{color:"white"}}/>
        </div>
        );
}