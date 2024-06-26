interface ButtonProps{
    buttonName:string,
    onClick?: ()=>void
}

export default function Button(params:ButtonProps) {
    return (
        <button 
           onClick={params.onClick}
           className="w-72 h-10 my-4 text-xl bg-gradient-to-r from-fuchsia-600 to-purple-600 rounded-xl">
            {params.buttonName}
        </button>
    );
}