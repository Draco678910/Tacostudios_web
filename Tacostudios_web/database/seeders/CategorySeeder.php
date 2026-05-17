<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CategorySeeder extends Seeder
{
    public function run(): void
    {
        DB::table('categories_jocs')->insert([
            [
                'nom' => 'Acció',
                'color' => '#ff0000',
                'created_at' => now(),
                'updated_at' => now(),
            ]
        ]);
    }
}