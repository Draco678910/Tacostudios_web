<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
{
    Schema::create('jocs', function (Blueprint $table) {
        $table->id();

        $table->string('nom');
        $table->text('descripcio')->nullable();
        $table->string('imatge')->nullable();
        $table->decimal('preu', 8, 2)->default(0);

        $table->unsignedBigInteger('category_id');
        $table->foreign('category_id')->references('id')->on('categories_jocs');

        $table->date('data_publicacio')->nullable();

        $table->integer('resenyes_posit')->default(0);
        $table->integer('resenyes_negat')->default(0);

        $table->string('arxiu_enllac')->nullable();
        $table->string('slug')->unique();
        $table->timestamps(); // 👈 importante
    });
}

public function down(): void
{
    Schema::dropIfExists('jocs');
}
};
