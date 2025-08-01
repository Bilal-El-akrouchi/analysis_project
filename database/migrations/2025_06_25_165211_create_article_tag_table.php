<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
   public function up()
{
    Schema::create('article_tag', function (Blueprint $table) {
        $table->unsignedBigInteger('article_id');
        $table->unsignedBigInteger('tag_id');

        // PK composite pour éviter les doublons
        $table->primary(['article_id','tag_id']);

        // Contraintes FK
        $table->foreign('article_id')->references('id')->on('articles')->onDelete('cascade');
        $table->foreign('tag_id')    ->references('id')->on('tags')    ->onDelete('cascade');
    });
}


    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('article_tag');
    }
};
