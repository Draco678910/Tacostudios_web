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




//Botiga i vista jocs
Route::inertia('/botiga', 'Tienda', [
])->name('botiga');

Route::inertia('/jocindiv', 'JocIndiv', [
])->name('jocIndividual');

Route::inertia('/carret', 'Cart', [
])->name('carret');

// Biblioteca i vista jocs biblioteca
Route::inertia('/biblioteca', 'BibliotecaPersonal', [
])->name('biblioteca');

Route::inertia('/jocindivbiblioteca', 'JuegoIndivBiblioteca', [
])->name('jocIndividualBiblioteca');



//Usuaris
Route::inertia('/login', 'auth/login', [
])->name('login');

Route::inertia('/register', 'auth/register', [
])->name('register');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::inertia('inici', 'inici')->name('inici');
});

require __DIR__ . '/settings.php';
