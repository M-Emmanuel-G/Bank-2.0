interface ButtonProps{
    buttonName:string,
    onClick?: ()=>void
    loader?: boolean
    disabled?:boolean
}

export default function Button(params:ButtonProps) {
    return (
        <>
            <button 
                onClick={params.onClick}
                className='w-72 h-10 my-4 text-xl bg-gradient-to-r from-fuchsia-600 to-purple-600 rounded-xl flex items-center justify-center'>
                {params.buttonName}
            </button>
        </>
    );
}