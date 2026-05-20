<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('user_joc', function (Blueprint $table) {

            $table->timestamp('last_session')
                ->nullable()
                ->after('is_favorite');

        });
    }

    public function down(): void
    {
        Schema::table('user_joc', function (Blueprint $table) {

            $table->dropColumn('last_session');

        });
    }
};