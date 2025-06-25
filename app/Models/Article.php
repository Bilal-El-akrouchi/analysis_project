<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Tag;

class Article extends Model
{
    use HasFactory;

    // Autorise uniquement ces champs pour mass-assignment
    protected $fillable = [
        'titre',
        'soustitre',
        'text',
        'img',
        'sources',
    ];

    // Relation many-to-many : un article peut avoir plusieurs tags
    public function tags()
    {
        return $this->belongsToMany(Tag::class);
    }
}
