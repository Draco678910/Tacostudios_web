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
        Schema::create('resenyes', function (Blueprint $table) {
            $table->id();
            $table->string('titol');
            $table->text('text');
            $table->unsignedBigInteger('id_joc');
            $table->boolean('posit_or_negat');
            $table->timestamps();

            // Relación (si tienes tabla jocs)
            $table->foreign('id_joc')->references('id')->on('jocs')->onDelete('cascade');
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
