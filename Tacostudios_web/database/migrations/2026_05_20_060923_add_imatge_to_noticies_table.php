<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('noticies', function (Blueprint $table) {
            $table->string('imatge')->nullable()->after('contingut');
        });
    }

    public function down(): void
    {
        Schema::table('noticies', function (Blueprint $table) {
            $table->dropColumn('imatge');
        });
    }
};