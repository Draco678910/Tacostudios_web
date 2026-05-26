<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CategoryJocSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $categories = [
            'Acció',
            'Aventura',
            'RPG',
            'Estratègia',
            'Survival',
            'Shooter',
            'Carreres',
            'Indie',
            'Terror',
            'Multijugador',
        ];

        foreach ($categories as $category) {
            DB::table('categories_jocs')->insert([
                'nom' => $category,
                'created_at' => now(),
                'updated_at' => now(),
            ]);
        }
    }
}