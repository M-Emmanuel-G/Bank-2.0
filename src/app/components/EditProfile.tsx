"use client"

import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface ClientProps{

}
  

export default function EditProfile() {

    const [userName, setUserName]  = useState<string>("")

    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <Button className="my-2">Editar</Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                <AlertDialogTitle>Editar Perfil</AlertDialogTitle>
                <AlertDialogDescription>
                    <input
                        className="w-80 h-12 border-b-2 border-black text-sm outline-none"
                        value={userName}
                        onChange={(ev)=>{setUserName(ev.target.value)}}
                        placeholder="Noma de usuário"
                    />
                </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction>Continue</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>

    );
}