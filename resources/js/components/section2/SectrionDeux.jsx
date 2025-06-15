import './SectrionDeux.css'
import img2 from '../../../../public/articlePhoto.svg'
export default function SectrionDeux() {
    return(
        <>

        <div className='w-full  relative '>
            <div className='h-screen w-[80%] h-full flex items-center justify-center'>
                <div className='h-[80%] w-[20%] rounded-[8px] absolute  z-10 left-[20%] text-blanc bg-bleu p-5 opacity-80 overflow-y-scroll text-center' style={{ direction: 'rtl' }}>
                </div>
                <div className='h-[80%] w-[20%] rounded-[8px] absolute z-10 left-[20%]  text-blanc p-5 overflow-y-scroll text-center' style={{ direction: 'rtl' }}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil non maxime ex laudantium, autem consequatur enim laboriosam quia atque laborum ratione quos iusto. Reiciendis veniam quisquam excepturi suscipit praesentium cupiditate a molestias ut culpa? Deserunt iure molestiae ex accusamus illum? Doloribus consectetur sequi dolore ipsum vitae accusamus a harum? Illo eos eaque eum ipsam quae aspernatur, quidem repellat asperiores in sed quis, perspiciatis placeat voluptatibus incidunt quaerat iure mollitia dolore.
                </div>
                <div className='w-[80%] h-[60%] glassed flex flex-col justify-start items-end p-5'>
                    <img src={img2} alt="image2" className='max-h-2/3' />
                    <h1>TITRE 2</h1>

                </div>
                
            </div>
        </div>
        </>
    )
}