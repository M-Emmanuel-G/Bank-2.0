"use client"

import { Extract } from "@prisma/client";
import { Separator } from "@radix-ui/react-separator";
import { Landmark } from "lucide-react";

export default function CardExtract(params:Extract) {


    const verifyValue = ()=>{
        if(params.operation === "Transferência"){
            return(
                <span className="text-rose-400">
                    R$ {Number(params.value)}
                </span>
            )
        }
        else if(params.operation === "Depósito"){
            return(
                <span className="text-emerald-400">
                 R$ {Number(params.value).toFixed(2)}
                </span>
            )
        }
    }

    return (
        <div className="w-96 h-32 bg-white my-2 relative flex rounded-xl text-black">
            <div className="w-1/6 h-full flex flex-col items-center p-2 gap-1">
                <Landmark size={30} style={{color:"black"}}/>
                <Separator orientation="vertical"  className="bg-slate-400 w-[2px] h-28"/>
            </div>
            <div className="w-5/6 h-full p-2">
                <div className="">
                    <span>{params.date}</span>
                </div>
                <div className="w-full flex justify-between mt-2">
                    <strong>{params.operation}</strong>
                    <span className="px-3">{verifyValue()}</span>
                </div>
                <div className="">
                    <span className="text-[12px]">{params.description}</span>
                </div>
            </div>
        </div>
    );
}