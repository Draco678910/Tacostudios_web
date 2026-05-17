<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Joc;
use Illuminate\Http\Request;
use Inertia\Inertia;
use CloudinaryLabs\CloudinaryLaravel\Facades\Cloudinary;

class JocController extends Controller
{
    public function index()
    {
        $jocs = Joc::with('category')->get();

        return Inertia::render('Tienda', [
            'jocs' => $jocs
        ]);
    }

    public function show($id)
    {
        $joc = Joc::with('category')->findOrFail($id);

        return Inertia::render('JocMostrar', [
            'joc' => $joc
        ]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'nom' => 'required',
            'imatge' => 'nullable|image',
        ]);

        $imageUrl = null;

        if ($request->hasFile('imatge')) {
            $imageUrl = Cloudinary::upload(
                $request->file('imatge')->getRealPath(),
                [
                    'folder' => 'jocs'
                ]
            )->getSecurePath();
        }

        Joc::create([
            'nom' => $request->nom,
            'descripcio' => $request->descripcio,
            'imatge' => $imageUrl,
            'category_id' => $request->category_id,
        ]);

        return redirect()->route('botiga');
    }
}