<?php

namespace App\Http\Controllers;

use App\Models\Joc;
use Illuminate\Http\Request;
use Illuminate\Http\RedirectResponse;
use Inertia\Inertia;
use Cloudinary\Configuration\Configuration;
use Cloudinary\Api\Upload\UploadApi;
use Illuminate\Support\Str;

class JocController extends Controller
{
    public function index()
    {
        return Inertia::render('Tienda', [
            'jocs' => Joc::with('category')->latest()->get()
        ]);
    }

    public function show($id)
    {
        return Inertia::render('Joc/Joc', [
            'joc' => Joc::with('category')->findOrFail($id)
        ]);
    }

    public function store(Request $request)
{
    $validated = $request->validate([
        'nom' => 'required|string|max:255',
        'descripcio' => 'nullable|string',
        'imatge' => 'required|image|max:4096',
        'category_id' => 'required|exists:categories_jocs,id',
        'preu' => 'nullable|numeric|min:0',

        // 🔥 NUEVO
        'launch_type' => 'nullable|in:url,file',
        'launch_value' => 'nullable|string',
        'launch_file' => 'nullable|file|max:50000',
        'existing_file' => 'nullable|string',
    ]);

    try {

        $slug = Str::slug($validated['nom']);

        Configuration::instance([
            'cloud' => [
                'cloud_name' => config('cloudinary.cloud_name'),
                'api_key' => config('cloudinary.api_key'),
                'api_secret' => config('cloudinary.api_secret'),
            ],
            'url' => ['secure' => true]
        ]);

        // IMAGE
        $upload = (new UploadApi())->upload(
            $request->file('imatge')->getRealPath(),
            ['folder' => 'jocs']
        );

        $imageUrl = $upload['secure_url'];

        // 🔥 LOGICA DE LANZAMIENTO
        $launch = null;

        if (($validated['launch_type'] ?? null) === 'url') {
            $launch = $validated['launch_value'] ?? null;
        }

        if (($validated['launch_type'] ?? null) === 'file') {

            if ($request->hasFile('launch_file')) {

                $file = $request->file('launch_file');

                $fileName = time() . '_' . $file->getClientOriginalName();

                $file->storeAs('public/jocs', $fileName);

                $launch = 'jocs/' . $fileName;
            }

            if (!empty($validated['existing_file'])) {
                $launch = $validated['existing_file'];
            }
        }

        Joc::create([
            'nom' => $validated['nom'],
            'slug' => $slug,
            'descripcio' => $validated['descripcio'] ?? null,
            'imatge' => $imageUrl,
            'category_id' => $validated['category_id'],
            'data_publicacio' => now(),
            'preu' => $validated['preu'] ?? 0,

            // 🔥 ESTE ES EL IMPORTANTE
            'arxiu_enllac' => $launch,
        ]);

        return redirect()
            ->route('admin')
            ->with('success', 'Joc creat correctament');

    } catch (\Throwable $e) {

        return back()->withErrors([
            'error' => $e->getMessage()
        ]);
    }
}

    public function update(Request $request, $id)
    {
        $joc = Joc::findOrFail($id);

        $validated = $request->validate([
            'nom' => 'required|string|max:255',
            'descripcio' => 'nullable|string',
            'category_id' => 'required|exists:categories_jocs,id',
            'preu' => 'nullable|numeric|min:0',
        ]);

        $joc->update($validated);

        return redirect()
            ->route('admin.jocs.index')
            ->with('success', 'Joc actualitzat correctament');
    }

    public function destroy($id): RedirectResponse
    {
        $joc = Joc::findOrFail($id);
        $joc->delete();

        return redirect()
            ->route('admin.jocs.index')
            ->with('success', 'Joc eliminat correctament');
    }
}