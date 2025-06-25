import { Link } from "@inertiajs/react";
import { useState } from "react";
import { router } from "@inertiajs/react";
export default function TagCreate() {
        const [value, setValue] = useState({
            nom:'',
         
        })
        let ajouter=(e)=>{
            e.preventDefault()
            router.post('/post/tag', value, {
            onSuccess: () => router.get('/dashboard')
    })
    
        }
        console.log(value);
    return (
        <>
            <div>
                <div className="w-1/2 p-10">
                <form onSubmit={ajouter}>
                    <div className="space-y-12">
                        <div className="border-b border-gray-900/10 pb-12">
                            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                <div className="sm:col-span-4">
                                    <label for="nom" className="block text-sm/6 font-medium text-gray-900">
                                        nom
                                    </label>
                                    <div className="mt-2">
                                        <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                                            <div className="shrink-0 text-base text-gray-500 select-none sm:text-sm/6">nom</div>
                                            <input
                                                type="text"
                                                name="nom"
                                                id="nom"
                                                className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                                                placeholder=""
                                                onChange={(e) => setValue({...value,nom:e.target.value})}

                                            />
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>

                    <div className="mt-6 flex items-center justify-end gap-x-6">
                        <Link href="/dashboard">
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
                </form>
            </div>
            </div>
        </>
    );
}
