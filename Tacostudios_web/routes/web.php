<?php
use Illuminate\Support\Facades\Route;
use Laravel\Fortify\Features;

use Illuminate\Support\Facades\Auth;

Route::inertia('/', 'Inici', [
])->name('home');

Route::inertia('/noticias', 'Noticias', [
])->name('noticias');

Route::inertia('/botiga', 'Tienda', [
])->name('botiga');

Route::inertia('/carret', 'Cart', [
])->name('carret');

Route::inertia('/login', 'auth/login', [
])->name('login');

Route::inertia('/register', 'auth/register', [
])->name('register');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::inertia('inici', 'inici')->name('inici');
});

require __DIR__ . '/settings.php';
