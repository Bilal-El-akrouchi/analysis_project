<?php

namespace App\Http\Controllers;

use App\Models\Article;
use App\Http\Requests\StoreArticleRequest;
use App\Http\Requests\UpdateArticleRequest;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Tag;

class ArticleController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
    $allarticle=Article::with(["tags"])->get() ;
      return Inertia::render('article/page',['allarticle'=>$allarticle] );
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $tags = Tag::select('id','nom')->get();

        return Inertia::render('article/create',['tags'=>$tags] );
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
{
    // 1) Validation
    $data = $request->validate([
        'titre'     => 'required|string',
        'soustitre' => 'nullable|string',
        'text'      => 'required|string',
        'img'       => 'nullable|string',
        'source'    => 'nullable|string',
        'tag_id'    => 'required|exists:tags,id',
    ]);

    // 2) Création de l’article
    $article = Article::create([
        'titre'     => $data['titre'],
        'soustitre' => $data['soustitre'],
        'text'      => $data['text'],
        'img'       => $data['img'],
        'sources'   => $data['source'],
    ]);

    // 3) Liaison avec le tag sélectionné
    $article->tags()->attach($data['tag_id']);

    // 4) Retour à la liste
    return redirect()->route('article.index');
}

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $article=Article::find($id) ;
        return Inertia::render("article/detaile/detaile",["article "=>$article]) ;
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id)
    {
        $article=Article::find($id);
        return Inertia::render('article/edit',['article'=>$article]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $article=Article::find($id);
        $article->titre=$request->titre;
        $article->soustitre=$request->soustitre;
        $article->sources=$request->sources;
        $article->text=$request->text;
        $article->img=$request->img;
        $article->save();
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $article=Article::find($id);
        $article->delete();
    }
}
