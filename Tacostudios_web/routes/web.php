<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Http\Request;
use Inertia\Inertia;

use App\Models\Joc;
use App\Models\Noticia;
use App\Models\CategoryJoc;
use App\Models\User;

use App\Http\Controllers\JocController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\NoticiaController;
use App\Http\Controllers\UserJocController;
use App\Http\Controllers\Settings\ProfileController;

/*
|--------------------------------------------------------------------------
| PUBLIC
|--------------------------------------------------------------------------
*/

// HOME
Route::get('/', function () {
    return Inertia::render('Inici', [
        'noticias' => Noticia::latest()->get()
    ]);
})->name('home');

// ABOUT
Route::inertia('/aboutus', 'SobreNossaltres')
    ->name('sobreNossaltres');

// AUTH
Route::inertia('/login', 'auth/login')->name('login');
Route::inertia('/register', 'auth/register')->name('register');

/*
|--------------------------------------------------------------------------
| AUTH ROUTES
|--------------------------------------------------------------------------
*/

Route::middleware(['auth'])->group(function () {

Route::put('/user/profile', [ProfileController::class, 'update']);

Route::get('/user-menu', function () {
    return Inertia::render('MenuUsuari');
})->middleware(['auth'])->name('user.menu');
    /*
    |--------------------------------------------------------------------------
    | NOTICIES
    |--------------------------------------------------------------------------
    */

    Route::get('/noticias', function (Request $request) {

        $perPage = 6;

        $query = Noticia::latest()->skip(1);

        $noticies = $query->paginate($perPage);

        return Inertia::render('Noticias', [
            'featured' => Noticia::latest()->first(),
            'noticies' => $noticies,
        ]);

    })->name('noticias');

    Route::get('/noticia/{id}', function ($id) {

        $noticia = Noticia::findOrFail($id);

        return Inertia::render('NoticiaIndiv', [
            'noticia' => $noticia
        ]);

    });

    /*
    |--------------------------------------------------------------------------
    | BOTIGA
    |--------------------------------------------------------------------------
    */

    Route::get('/botiga', [JocController::class, 'index'])
        ->name('botiga');

    Route::get('/jocbotiga/{id}', function ($id) {

        $joc = Joc::with('category')->findOrFail($id);

        return Inertia::render('JocIndiv', [
            'joc' => $joc
        ]);

    });

    /*
    |--------------------------------------------------------------------------
    | CARRITO
    |--------------------------------------------------------------------------
    */

    Route::inertia('/carret', 'Cart')
        ->name('carret');

    /*
    |--------------------------------------------------------------------------
    | BIBLIOTECA
    |--------------------------------------------------------------------------
    */

    Route::get('/biblioteca', [UserJocController::class, 'biblioteca'])
        ->name('biblioteca');

    Route::post('/joc/{id}/favorite', [UserJocController::class, 'toggleFavorite'])
        ->name('joc.favorite');

    Route::post('/joc/{id}/play', [UserJocController::class, 'play'])
    ->middleware('auth')
    ->name('joc.play');     

    Route::get('/joc/{id}', function ($id) {

    $user = Auth::user();

    $joc = $user->jocs()
        ->with('category')
        ->where('jocs.id', $id)
        ->firstOrFail();

    return Inertia::render('JocInfoBiblio', [
        'joc' => $joc
    ]);

})->middleware('auth');

});

/*
|--------------------------------------------------------------------------
| ADMIN
|--------------------------------------------------------------------------
*/

Route::get('/admin', function () {

    return Inertia::render('Administracio', [
        'jocs' => Joc::with('category')->latest()->get(),
        'categories' => CategoryJoc::all(),
        'noticies' => Noticia::latest()->get(),
        'users' => User::select('id', 'name')->get(),
    ]);

})->name('admin');

Route::prefix('admin')
    ->name('admin.')
    ->group(function () {

        // JOCS
        Route::resource('jocs', JocController::class);

        // CATEGORIES
        Route::resource('categories', CategoryController::class);

        // NOTICIES
        Route::resource('noticies', NoticiaController::class);

        // USER JOCS
        Route::post('/user-jocs/toggle', [UserJocController::class, 'toggleAdmin'])
            ->name('userjocs.toggle');

        Route::get('/user-jocs', [UserJocController::class, 'indexAdmin'])
            ->name('userjocs.index');
    });

/*
|--------------------------------------------------------------------------
| VERIFIED
|--------------------------------------------------------------------------
*/

Route::middleware(['auth', 'verified'])->group(function () {

    Route::inertia('/inici', 'inici')
        ->name('inici');

});

require __DIR__ . '/settings.php';