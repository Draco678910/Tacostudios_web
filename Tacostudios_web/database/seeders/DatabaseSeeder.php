<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Database\Seeders\AdminUserSeeder;
use Database\Seeders\CategoryJocSeeder;
use Database\Seeders\JocSeeder;
use Database\Seeders\NoticiaSeeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        User::factory()->create([
            'name' => 'Test User',
            'email' => 'test@example.com',
        ]);

        $this->call([
            AdminUserSeeder::class,
            CategoryJocSeeder::class,
            JocSeeder::class,
            NoticiaSeeder::class,
        ]);
    }
}