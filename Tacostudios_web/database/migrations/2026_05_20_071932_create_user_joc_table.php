<?php
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('user_joc', function (Blueprint $table) {
            $table->id();

            $table->foreignId('user_id')
                ->constrained()
                ->onDelete('cascade');

            $table->foreignId('joc_id')
                ->constrained('jocs')
                ->onDelete('cascade');

            // ⭐ si es favorito o no
            $table->boolean('is_favorite')->default(false);

            $table->timestamps();

            // evita duplicados
            $table->unique(['user_id', 'joc_id']);
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('user_joc');
    }
};