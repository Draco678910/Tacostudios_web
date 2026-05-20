<?php

namespace App\Http\Controllers;

use App\Models\Noticia;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Cloudinary\Configuration\Configuration;
use Cloudinary\Api\Upload\UploadApi;

class NoticiaController extends Controller
{

    public function index()
{
    $featured = Noticia::latest()->first();

    $noticies = Noticia::where('id', '!=', optional($featured)->id)
        ->latest()
        ->paginate(3); // 👈 esto ES lo que activa la paginación real

    return Inertia::render('Noticias', [
        'featured' => $featured,
        'noticies' => $noticies,
    ]);
}


    public function store(Request $request)
    {
        $validated = $request->validate([
            'titol' => 'required|string|max:255',
            'contingut' => 'required|string',
            'imatge' => 'required|image|max:4096',
        ]);

        // Cloudinary config
        Configuration::instance([
            'cloud' => [
                'cloud_name' => config('cloudinary.cloud_name'),
                'api_key' => config('cloudinary.api_key'),
                'api_secret' => config('cloudinary.api_secret'),
            ],
            'url' => [
                'secure' => true
            ]
        ]);

        // Upload imagen
        $upload = (new UploadApi())->upload(
            $request->file('imatge')->getRealPath(),
            ['folder' => 'noticies']
        );

        $imageUrl = $upload['secure_url'] ?? null;

        Noticia::create([
            'titol' => $validated['titol'],
            'contingut' => $validated['contingut'],
            'imatge' => $imageUrl,
        ]);

        return back()->with('success', 'Notícia creada correctament');
    }

    public function update(Request $request, $id)
    {
        $noticia = Noticia::findOrFail($id);

        $validated = $request->validate([
            'titol' => 'required|string|max:255',
            'contingut' => 'required|string',
            'imatge' => 'nullable|image|max:4096',
        ]);

        // si hay nueva imagen
        if ($request->hasFile('imatge')) {

            Configuration::instance([
                'cloud' => [
                    'cloud_name' => config('cloudinary.cloud_name'),
                    'api_key' => config('cloudinary.api_key'),
                    'api_secret' => config('cloudinary.api_secret'),
                ],
                'url' => ['secure' => true]
            ]);

            $upload = (new UploadApi())->upload(
                $request->file('imatge')->getRealPath(),
                ['folder' => 'noticies']
            );

            $noticia->imatge = $upload['secure_url'];
        }

        $noticia->update([
            'titol' => $validated['titol'],
            'contingut' => $validated['contingut'],
        ]);

        return back()->with('success', 'Notícia actualitzada');
    }

    public function destroy($id)
    {
        Noticia::findOrFail($id)->delete();

        return back()->with('success', 'Notícia eliminada');
    }
}   