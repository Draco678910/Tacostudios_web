<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class NoticiaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $noticies = [
            [
                'titol' => 'Tacostudios anuncia Neon Protocol',
                'contingut' => 'El nou shooter cyberpunk de Tacostudios arribarà aquest estiu amb mode multijugador i gràfics millorats.',
                'imatge' => 'https://res.cloudinary.com/demo/image/upload/v1710000101/neon_news.jpg',
            ],
            [
                'titol' => 'Actualització important de Pixel Racers',
                'contingut' => 'S\'han afegit nous circuits, vehicles i millores de rendiment per a tots els jugadors.',
                'imatge' => 'https://res.cloudinary.com/demo/image/upload/v1710000102/pixel_news.jpg',
            ],
            [
                'titol' => 'Shadow Arena supera els 100.000 jugadors',
                'contingut' => 'La comunitat continua creixent gràcies als nous modes competitius i esdeveniments especials.',
                'imatge' => 'https://res.cloudinary.com/demo/image/upload/v1710000103/shadow_news.jpg',
            ],
            [
                'titol' => 'Nova expansió per Lost Kingdom',
                'contingut' => 'L\'expansió incorpora noves zones, enemics i una història completament nova.',
                'imatge' => 'https://res.cloudinary.com/demo/image/upload/v1710000104/lost_news.jpg',
            ],
            [
                'titol' => 'Astro Survival rep suport VR',
                'contingut' => 'Els jugadors podran explorar planetes en realitat virtual amb una nova experiència immersiva.',
                'imatge' => 'https://res.cloudinary.com/demo/image/upload/v1710000105/astro_news.jpg',
            ],
        ];

        foreach ($noticies as $noticia) {
            DB::table('noticies')->insert([
                'titol' => $noticia['titol'],
                'contingut' => $noticia['contingut'],
                'imatge' => $noticia['imatge'],
                'created_at' => now(),
                'updated_at' => now(),
            ]);
        }
    }
}