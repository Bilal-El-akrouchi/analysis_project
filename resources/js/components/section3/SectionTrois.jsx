import './SectionTrois.css';
export default function SectionTrois() {
    return (
        <>
            <div className="flex h-screen w-full items-center justify-center">
                <div className="glassed h-[80vh] w-[80vw] p-5">
                    <div>
                        <h1>TITRE 2</h1>
                        <p className="w-[60%]">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium adipisci, consequatur atque exercitationem dicta quam
                            cum consequuntur nobis facere molestias, ad suscipit quae minima praesentium! Officiis nam voluptate ipsam explicabo sed,
                            ad vero ex provident similique et delectus sunt corrupti.
                        </p>
                    </div>
                    <div className='w-full flex flex-col justify-end items-end'>
                        <div className=' w-1/2'>
                            
                        <h5>sous-titre 2</h5>
                        <p className="w-[90%]">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, quasi, cupiditate beatae quisquam praesentium
                            veritatis tempore eos magni eum quibusdam officia officiis id voluptatibus ea rem fugiat rerum doloremque reprehenderit.
                        </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
