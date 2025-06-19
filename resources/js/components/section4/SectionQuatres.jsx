import './SectionQuatres.css'
export default function SectionQuatres() {
    return(
        <>
        
        <div className='w-full h-screen flex justify-center items-center'>
            <div className='w-[80%]  h-screen glassed p-5'>
                <h1>Les plus populaires</h1>
                <div className='w-80% h-[40%] flex justify-around items-center'>
                    <div className="Pop w-1/6 h-full glassed h-1/6">Article pop </div>
                    <div className="Pop w-1/6 h-full glassed ">Article pop </div>
                    <div className="Pop w-1/6 h-full glassed ">Article pop </div>
            
                </div>
                <div className='w-80% h-[40%] flex justify-around items-center'>
                    <div className="Pop w-1/6 h-full glassed h-1/6">Article pop </div>
                    <div className="Pop w-1/6 h-full glassed ">Article pop </div>
                    <div className="Pop w-1/6 h-full glassed ">Article pop </div>
            
                </div>

            </div>
        </div>
        </>
    )
}