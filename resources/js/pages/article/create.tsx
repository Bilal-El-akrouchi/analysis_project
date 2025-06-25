'use client';
import { Link, router, usePage } from '@inertiajs/react';
import { useState } from 'react';
export default function create() {
const [value, setValue] = useState({
  titre: '', soustitre: '', source: '',
  text: '', img: '', tag_id: ''
});
    let ajouter = (e) => {
        e.preventDefault();
        router.post('/article/post', value, {
            onSuccess: () => router.get('/article'),
        });
    };
    console.log(value);
    const { tags } = usePage().props;

    return (
        <>
            <div className="w-1/2 p-10">
                <form onSubmit={ajouter}>
                    <div className="space-y-12">
                        <div className="border-b border-gray-900/10 pb-12">
                            <div className="-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                <div className="sm:col-span-4">
                                    <label for="titre" className="block text-sm/6 font-medium text-gray-900">
                                        titre
                                    </label>
                                    <div className="-2">
                                        <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                                            <div className="shrink-0 text-base text-gray-500 select-none sm:text-sm/6">titre</div>
                                            <input
                                                type="text"
                                                name="titre"
                                                id="titre"
                                                className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                                                placeholder=""
                                                onChange={(e) => setValue({ ...value, titre: e.target.value })}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="sm:col-span-4">
                                    <label for="soustitre" className="block text-sm/6 font-medium text-gray-900">
                                        sous-titre
                                    </label>
                                    <div className="-2">
                                        <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                                            <div className="shrink-0 text-base text-gray-500 select-none sm:text-sm/6">soustitre</div>
                                            <input
                                                type="text"
                                                name="soustitre"
                                                id="soustitre"
                                                className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                                                placeholder=""
                                                onChange={(e) => setValue({ ...value, soustitre: e.target.value })}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="sm:col-span-4">
                                    <label for="source" className="block text-sm/6 font-medium text-gray-900">
                                        source
                                    </label>
                                    <div className="-2">
                                        <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                                            <div className="shrink-0 text-base text-gray-500 select-none sm:text-sm/6">source</div>
                                            <input
                                                type="text"
                                                name="source"
                                                id="source"
                                                className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                                                placeholder=""
                                                onChange={(e) => setValue({ ...value, source: e.target.value })}
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="col-span-full">
                                    <label for="text" className="block text-sm/6 font-medium text-gray-900">
                                        text
                                    </label>
                                    <div className="-2">
                                        <textarea
                                            name="text"
                                            id="text"
                                            rows="3"
                                            onChange={(e) => setValue({ ...value, text: e.target.value })}
                                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                        ></textarea>
                                    </div>
                                    <p className="-3 text-sm/6 text-gray-600">écrivez votre text</p>
                                </div>

                                <div className="col-span-full ">
                                    <div className='flex justify-between mb-10'>

                                    <input
                                        type="text"
                                        placeholder="img"
                                        className="bg-white"
                                        onChange={(e) => setValue({ ...value, img: e.target.value })}
                                    />

                                <select
  name="tag_id"
  id="tag_id"
  value={value.tag_id}
  onChange={e => setValue({ ...value, tag_id: e.target.value })}
  className="border rounded px-2 py-1"
>
  <option value="">— Choisissez un tag —</option>
  {tags.map(t => (
    <option key={t.id} value={t.id}>{t.nom}</option>
  ))}
</select>
                                    </div>
                                    <div className="flex items-center justify-end gap-x-6">
                                        <Link href="/article">
                                            <button type="button" className="text-sm/6 font-semibold text-gray-900">
                                                annuler
                                            </button>
                                        </Link>
                                        <button
                                            type="submit"
                                            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                        >
                                            Save
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
}
