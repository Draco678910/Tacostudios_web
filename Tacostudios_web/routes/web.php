<?php
use Illuminate\Support\Facades\Route;
use Laravel\Fortify\Features;

use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\Api\JocController;



//inici i aboutus
Route::inertia('/', 'Inici', [
])->name('home');

Route::inertia('/aboutus', 'SobreNossaltres', [
])->name('sobreNossaltres');

//Noticies
Route::inertia('/noticias', 'Noticias', [
])->name('noticias');




//Botiga i vista jocs
// Route::inertia('/botiga', 'Tienda', [
// ])->name('botiga');

// Route::inertia('/jocindiv', 'JocIndiv', [
// ])->name('jocIndividual');



// Botiga
Route::get('/botiga', [JocController::class, 'index'])->name('botiga');

// Juego individual (SLUG)
Route::get('/jocs/{slug}', [JocController::class, 'show'])->name('joc.show');

// Carrito
Route::inertia('/carret', 'Cart')->name('carret');

// Biblioteca
Route::inertia('/biblioteca', 'BibliotecaPersonal')->name('biblioteca');

Route::inertia('/jocindivbiblioteca', 'JuegoIndivBiblioteca')
    ->name('jocIndividualBiblioteca');



//Usuaris
Route::inertia('/login', 'auth/login', [
])->name('login');

Route::inertia('/register', 'auth/register', [
])->name('register');

Route::inertia('/admin', 'Administracio')
    ->name('admin');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::inertia('inici', 'inici')->name('inici');
});




require __DIR__ . '/settings.php';
