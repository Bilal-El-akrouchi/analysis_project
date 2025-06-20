import { Link, router } from '@inertiajs/react';
import Layout from '../layout';
export default function article({ allarticle }) {
    console.log(allarticle);
    const supprimer= (id)=>{
        router.delete(`/article/delete/${id}`)
    }

    return (
        <Layout>
            <main>
                <div className="h-[20vh] w-screen"></div>
                <Link href="/article/create">
                    <div className="glassed fixed top-30 right-10 flex h-[10vh] w-[15vw] cursor-pointer items-center justify-center rounded-2xl text-center">
                        {' '}
                        ajouter un article
                    </div>
                </Link>

                {allarticle.map((article) => (
                    <div key={article.id} className="w-1/2">
                        <h1 className="text-[1em]">{article.titre}</h1>
                        <h1 className="text-[1em]">{article.soustitre}</h1>
                        <h1 className="text-[1em]">{article.text}</h1>
                        <Link href={`/article/edit/${article.id}`}>
                            <button>éditer</button>
                        </Link>
                            <button onClick={()=>{supprimer(article.id)} }>supprimer</button>
                    </div>
                ))}
            </main>
        </Layout>
    );
}
