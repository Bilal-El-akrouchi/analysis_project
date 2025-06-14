'use client';
import actu1 from '../../../../public/articlePhoto.svg';
import './SectionUn.css';
export default function SectionUn() {
    return (
        <>
            <div className="flex h-screen w-full items-center justify-center">
                <div className="relative flex w-[80%] items-center justify-end">
                    <div className="glassed absolute left-25 z-5 min-h-[65vh] w-2/3"></div>
                    <div className="absolute bottom-[-220px] left-[30] z-10 w-[40%] rounded">
                        <img src={actu1} alt="Image article 1 " className="dégradéTrans" />
                    </div>
                    <div className="bg-blanc absolute bottom-[-220px] left-[30] z-0 h-[63vh] w-[40%] rounded"></div>
                    <div className="absolute left-25 z-15 min-h-[65vh] w-2/3 p-5">
                        <h1>TITRE ARTICLE 1</h1>
                        <p>
                            Lorem ipsum dolor um tenetur soluta velit magni, accusamus voluptatum aperiam quo, eos dolorem dolores libero quod illo
                            ipsum veniam? Assumenda corrupti mollitia maiores autem praesentium, pariatur dignissimos soluta qui veniam iste totam
                            modi rerum quia explicabo impedit esse ad. Deleniti commodi similique ipsam iure velit consequatur fugit laudantium
                            accusamus ullam nemo quaerat beatae quod dolores amet, laborum consectetur dolorem quos natus. Alias qui, voluptates
                            aspernatur asperiores quod nihil reiciendis amet placeat!
                        </p>
                        <h5 className="cursor-pointer">plus...</h5>
                    </div>
                </div>
            </div>
        </>
    );
}
