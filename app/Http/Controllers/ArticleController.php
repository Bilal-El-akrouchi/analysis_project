<?php

namespace App\Http\Controllers;

use App\Models\Article;
use App\Http\Requests\StoreArticleRequest;
use App\Http\Requests\UpdateArticleRequest;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ArticleController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
    $allarticle=Article::all();
      return Inertia::render('article/page',['allarticle'=>$allarticle] );
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('article/create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
       $article= new Article();
        $article->titre=$request->titre;
        $article->soustitre=$request->soustitre;
        $article->text=$request->text;
        $article->img=$request->img;
        $article->sources=$request->source;
        $article->save();
       
       
       
            //  $table->id();
            // $table->string('titre');
            // $table->string('sous-titre');
            // $table->text('text');
            // $table->string('img');
            // $table->text('sources');
            // $table->timestamps();
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
