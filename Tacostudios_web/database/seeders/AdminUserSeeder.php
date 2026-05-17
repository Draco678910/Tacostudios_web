<?php

namespace Database\Seeders;

use App\Models\User;    
use Illuminate\Support\Facades\Hash;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class AdminUserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
         User::create([
            'name' => 'Admin',
            'email' => 'admin@admin.com',
            'password' => Hash::make('admin123'),
            'is_admin' => true,
            ]);

            User::create([
            'name' => 'User',
            'email' => 'user@user.com',
            'password' => Hash::make('user123'),
            'is_admin' => false,
            ]);
    }
}
