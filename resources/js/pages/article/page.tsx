import { Link, router } from '@inertiajs/react';
import Layout from '../layout';
import ChoixTag from '../../components/choixTag/ChoixTag';

export default function ArticleIndex({ allarticle }) {
  const supprimer = (id) => {
    router.delete(`/article/delete/${id}`);
  };

  return (
    <Layout>
      <main className="overflow-x-hidden">
        <ChoixTag/>

        <Link href="/article/create">
          <div className="glassed fixed top-30 right-10 flex h-[10vh] w-[15vw] cursor-pointer items-center justify-center rounded-2xl text-center">
            ajouter un article
          </div>
        </Link>

        <div className="w-[100vw] flex flex-col items-center">
          {allarticle.map((article) => (
            <div key={article.id} className="w-2/5 glassed p-4 mb-6">
              <h1 className="text-xl font-bold">{article.titre}</h1>
              <h5 className="text-md text-gray-700 mb-2">{article.soustitre}</h5>
              <p className="break-words whitespace-normal text-[1em] mb-4">
                {article.text}
              </p>

              {/* Affichage des tags */}
              <div className="mb-4">
                <p className="font-medium">Tags :</p>
                <div className="flex flex-wrap gap-2 mt-1">
                  {article.tags.map((tag) => (
                    <span
                      key={tag.id}
                      className="bg-gray-200 px-2 py-1 rounded-full text-sm"
                    >
                      {tag.nom}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-2">
                <Link href={`/article/edit/${article.id}`}>
                  <button className="px-3 py-1 bg-blue-500 text-white rounded">
                    éditer
                  </button>
                </Link>
                <button
                  onClick={() => supprimer(article.id)}
                  className="px-3 py-1 bg-red-500 text-white rounded"
                >
                  supprimer
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </Layout>
  );
}
