<?php

use App\Http\Controllers\ArticleController;
use App\Http\Controllers\TagController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use SebastianBergmann\CodeCoverage\Report\Html\Dashboard;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});
require __DIR__.'/settings.php';
require __DIR__.'/auth.php';



Route::get('detail/{id}',[ArticleController::class,'show'] );
Route::get('/article', [ArticleController::class,"index"])->name('home');
Route::post('/article/post',[ArticleController::class,'store'] );
route::get('/article/create', [ArticleController::class,'create']);
route::get('/article/edit/{id} ', [ArticleController::class,'edit']);
route::put('/article/update/{id} ', [ArticleController::class, 'update']);
Route::delete('/article/delete/{id}',[ArticleController::class, 'destroy'] );


Route::get('/create/tag' , [TagController::class, 'create'] );
Route::post('/post/tag' , [TagController::class, 'store'] );
Route::get('/dashboard', [TagController::class, 'index'])->name('dashboard');   
Route::delete('/tags/{id}', [TagController::class, 'destroy'])
     ->name('tags.destroy');