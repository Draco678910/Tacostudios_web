<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class JocSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $jocs = [
            [
                'nom' => 'Neon Protocol',
                'descripcio' => 'Un shooter cyberpunk frenètic ambientat en una megaciutat dominada per corporacions.',
                'imatge' => 'https://res.cloudinary.com/demo/image/upload/v1710000001/neon_protocol.jpg',
                'preu' => 19.99,
                'category_id' => 1,
                'data_publicacio' => '2025-03-12',
                'resenyes_posit' => 842,
                'resenyes_negat' => 34,
                'arxiu_enllac' => 'https://store.steampowered.com/',
            ],
            [
                'nom' => 'Pixel Racers',
                'descripcio' => 'Carreres arcade estil retro amb multijugador online i circuits neon.',
                'imatge' => 'https://res.cloudinary.com/demo/image/upload/v1710000002/pixel_racers.jpg',
                'preu' => 12.50,
                'category_id' => 2,
                'data_publicacio' => '2024-11-02',
                'resenyes_posit' => 512,
                'resenyes_negat' => 12,
                'arxiu_enllac' => 'https://itch.io/',
            ],
            [
                'nom' => 'Shadow Arena',
                'descripcio' => 'Combat tàctic PvP amb habilitats úniques i escenaris dinàmics.',
                'imatge' => 'https://res.cloudinary.com/demo/image/upload/v1710000003/shadow_arena.jpg',
                'preu' => 29.99,
                'category_id' => 3,
                'data_publicacio' => '2025-01-18',
                'resenyes_posit' => 1450,
                'resenyes_negat' => 102,
                'arxiu_enllac' => 'https://www.epicgames.com/',
            ],
            [
                'nom' => 'Lost Kingdom',
                'descripcio' => 'Explora un regne màgic ple de misteris, criatures i masmorres.',
                'imatge' => 'https://res.cloudinary.com/demo/image/upload/v1710000004/lost_kingdom.jpg',
                'preu' => 39.99,
                'category_id' => 4,
                'data_publicacio' => '2023-09-30',
                'resenyes_posit' => 2890,
                'resenyes_negat' => 210,
                'arxiu_enllac' => 'https://www.gog.com/',
            ],
            [
                'nom' => 'Astro Survival',
                'descripcio' => 'Supervivència espacial amb construcció de bases i exploració planetària.',
                'imatge' => 'https://res.cloudinary.com/demo/image/upload/v1710000005/astro_survival.jpg',
                'preu' => 24.99,
                'category_id' => 5,
                'data_publicacio' => '2025-04-05',
                'resenyes_posit' => 760,
                'resenyes_negat' => 48,
                'arxiu_enllac' => 'https://www.humblebundle.com/',
            ],
            [
                'nom' => 'Dungeon Echoes',
                'descripcio' => 'Roguelike fosc amb generació procedural i combats exigents.',
                'imatge' => 'https://res.cloudinary.com/demo/image/upload/v1710000006/dungeon_echoes.jpg',
                'preu' => 17.99,
                'category_id' => 1,
                'data_publicacio' => '2024-07-21',
                'resenyes_posit' => 1102,
                'resenyes_negat' => 77,
                'arxiu_enllac' => 'https://store.steampowered.com/',
            ],
        ];

        foreach ($jocs as $joc) {
            DB::table('jocs')->insert([
                'nom' => $joc['nom'],
                'descripcio' => $joc['descripcio'],
                'imatge' => $joc['imatge'],
                'preu' => $joc['preu'],
                'category_id' => $joc['category_id'],
                'data_publicacio' => $joc['data_publicacio'],
                'resenyes_posit' => $joc['resenyes_posit'],
                'resenyes_negat' => $joc['resenyes_negat'],
                'arxiu_enllac' => $joc['arxiu_enllac'],
                'slug' => Str::slug($joc['nom']),
                'created_at' => now(),
                'updated_at' => now(),
            ]);
        }
    }
}


