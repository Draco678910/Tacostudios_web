<?php
use Illuminate\Support\Facades\Route;
use Laravel\Fortify\Features;

use Illuminate\Support\Facades\Auth;

//inici
Route::inertia('/', 'Inici', [
])->name('home');

//Noticies
Route::inertia('/noticias', 'Noticias', [
])->name('noticias');




//Biblioteca, botiga i vista jocs
Route::inertia('/botiga', 'Tienda', [
])->name('botiga');

Route::inertia('/carret', 'Cart', [
])->name('carret');

Route::inertia('/biblioteca', 'BibliotecaPersonal', [
])->name('biblioteca');

Route::inertia('/jocindiv', 'JocIndiv', [
])->name('jocIndividual');

//Usuaris
Route::inertia('/login', 'auth/login', [
])->name('login');

Route::inertia('/register', 'auth/register', [
])->name('register');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::inertia('inici', 'inici')->name('inici');
});

require __DIR__ . '/settings.php';
