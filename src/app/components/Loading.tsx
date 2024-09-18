import { Loader } from "./Loader";

const Loading = () => {
    return ( 
        <main id="Loading" className="w-screen h-screen hidden bg-black items-center justify-center bg-opacity-50 absolute">
            <div className='w-8 h-8 mr-6 border-2 border-white border-t-transparent border-solid rounded-full animate-spin'></div>
        </main>
     );
}
 
export default Loading;