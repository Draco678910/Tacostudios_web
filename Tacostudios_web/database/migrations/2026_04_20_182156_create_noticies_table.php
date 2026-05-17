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
        Schema::create('noticies', function (Blueprint $table) {
            $table->id();
            $table->string('titol');
            $table->text('contingut');

            $table->foreignId('category_id')
                ->nullable()
                ->constrained('categorias_notic') // 👈 CORRECTO
                ->onDelete('set null');

            $table->date('data_publicacio')->nullable();
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
