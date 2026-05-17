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
            $table->id(); // ID

            $table->string('nom'); // Nom
            $table->text('descripcio')->nullable(); // Descripcio

            $table->string('imatge')->nullable(); // ruta o URL

            // Si "Categories" es texto simple:
            $table->unsignedBigInteger('category_id');
            $table->foreign('category_id')->references('id')->on('categories_jocs');

            // Si luego quieres hacerlo bien, esto debería ser una relación (te explico abajo 👇)

            $table->date('data_publicacio')->nullable(); // DataPublicacio

            $table->integer('resenyes_posit')->default(0); // ResenyesPosit
            $table->integer('resenyes_negat')->default(0); // ResenyesNegat

            $table->string('arxiu_enllac')->nullable(); // Arxiu/enllac
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        //
    }
};
