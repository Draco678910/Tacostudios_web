<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('jocs', function (Blueprint $table) {

            // url | file
            $table->string('launch_type')
                ->nullable()
                ->after('preu');

            // link o ruta archivo
            $table->text('launch_value')
                ->nullable()
                ->after('launch_type');

        });
    }

    public function down(): void
    {
        Schema::table('jocs', function (Blueprint $table) {

            $table->dropColumn([
                'launch_type',
                'launch_value'
            ]);

        });
    }
};