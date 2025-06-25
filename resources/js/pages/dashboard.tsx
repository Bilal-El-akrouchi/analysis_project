import AppLayout from '@/layouts/app-layout';
import { Head, Link, router, usePage } from '@inertiajs/react';
import { useState } from 'react';
import { type BreadcrumbItem } from '@/types';

const breadcrumbs: BreadcrumbItem[] = [
  { title: 'Dashboard', href: '/dashboard' },
];

export default function Dashboard() {
  const { alltag } = usePage().props;
  const [selectedTag, setSelectedTag] = useState('');

  const supprimer = () => {
    if (!selectedTag) return; 
    router.delete(route('tags.destroy', selectedTag), {

    });
  };

  return (
    <AppLayout breadcrumbs={breadcrumbs}>
      <Head title="Dashboard" />

      <div className="m-10">
        <label htmlFor="tags" className="block mb-1">Tag disponible</label>
        <select
          id="tags"
          name="tags"
          value={selectedTag}
          onChange={e => setSelectedTag(e.target.value)}
          className="border rounded px-2 py-1"
        >
          <option value="">— Choisir un tag —</option>
          {alltag.map(tag => (
            <option key={tag.id} value={tag.id}>
              {tag.nom}
            </option>
          ))}
        </select>
      </div>

      <div className="m-10 flex gap-x-12">
        <Link href="/create/tag">
          <button className="cursor-pointer">Créer un tag</button>
        </Link>

        <Link href="/udpdate/tag">
          <button className="cursor-pointer">Modifier un tag</button>
        </Link>

        <button
          onClick={supprimer}
          className="cursor-pointer bg-red-600 text-white px-4 py-2 rounded disabled:opacity-50"
        >
          Supprimer un tag
        </button>
      </div>
    </AppLayout>
  );
}
