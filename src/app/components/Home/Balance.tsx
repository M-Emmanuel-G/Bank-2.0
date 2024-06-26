"use client"

import { Eye, EyeOff } from "lucide-react";

interface BalanceProps{
    balance:number
}


export default function GetBalance( {balance}:BalanceProps) {

    const showPassword = ()=>{
        const eyeOff = document.getElementById("eyeOff") as any
        const eye = document.getElementById("eyeOn") as any
        const balanceOn = document.getElementById("balanceOn") as any
        const balanceOff = document.getElementById("balanceOff") as any

        if( eyeOff?.style?.display === "none"){
            eyeOff.style.display = 'flex'
            eye.style.display = 'none'
            balanceOff.style.display = "flex"
            balanceOn.style.display = "none"
            
        }else{
            eyeOff.style.display = 'none'
            eye.style.display = 'flex'
            balanceOff.style.display = "none"
            balanceOn.style.display = "flex"
        }
    }

 return (
    
    <div className="w-96 h-3/4 bg-gray-900 flex justify-between items-center rounded-3xl">
    <div className=" flex flex-col ml-8">
        <span className="text-[12px]">Saldo</span>
        <span id="balanceOff" >******</span>
        <span className="hidden" id="balanceOn">R$ {Number(balance).toFixed(2)}</span>
    </div>
    <div className="mr-6">
        <EyeOff className="flex" onClick={showPassword} id="eyeOff"/>
        <Eye onClick={showPassword} className="hidden" id="eyeOn"/>
    </div>
</div>
 );
}