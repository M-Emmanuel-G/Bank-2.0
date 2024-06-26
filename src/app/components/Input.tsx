import React, { ChangeEvent } from "react"

interface InputProps{
    value?:string | number
    onChange?:(ev:ChangeEvent<HTMLInputElement>)=> void
    type:string,
    minLength?:number
    maxLength?:number
    placeholder?:string
}

export default function Input(params:InputProps) {
    return (
        <input
            className="w-72 h-12 border-b-2 border-purple-600 text-sm outline-none bg-transparent text-center text-white -moz-appearance: textfield; "
            value={params.value}
            onChange={params.onChange}
            type={params.type}
            maxLength={params.maxLength}
            minLength={params.minLength}
            placeholder={params.placeholder}
        />
    );
}