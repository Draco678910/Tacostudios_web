<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Joc;
use Illuminate\Support\Facades\DB;

class JocSeeder extends Seeder
{
    public function run(): void
    {
        $imagen = "https://res.cloudinary.com/demo/image/upload/sample.jpg";

        // 👇 coger categoría real de la base de datos
        $categoryId = DB::table('categories_jocs')->first()->id;

        Joc::insert([
            [
                'nom' => 'Synapse Overdrive',
                'slug' => 'synapse-overdrive',
                'descripcio' => 'Un RPG d’acció dins la xarxa neuronal.',
                'imatge' => $imagen,
                'category_id' => $categoryId,
            ],
            [
                'nom' => 'Ethereal Drift',
                'slug' => 'ethereal-drift',
                'descripcio' => 'Explora mons flotants i alienígenes.',
                'imatge' => $imagen,
                'category_id' => $categoryId,
            ],
            [
                'nom' => 'Neon Runner',
                'slug' => 'neon-runner',
                'descripcio' => 'Corre per una ciutat cyberpunk infinita.',
                'imatge' => $imagen,
                'category_id' => $categoryId,
            ],
            [
                'nom' => 'Quantum Breakout',
                'slug' => 'quantum-breakout',
                'descripcio' => 'Escapa de simulacions fracturades.',
                'imatge' => $imagen,
                'category_id' => $categoryId,
            ],
            [
                'nom' => 'Void Protocol',
                'slug' => 'void-protocol',
                'descripcio' => 'Hackeja sistemes d’una IA rebel.',
                'imatge' => $imagen,
                'category_id' => $categoryId,
            ],
            [
                'nom' => 'Cyber Drift 2088',
                'slug' => 'cyber-drift-2088',
                'descripcio' => 'Carreres ilegals en megaciutats futuristes.',
                'imatge' => $imagen,
                'category_id' => $categoryId,
            ],
        ]);
    }
}