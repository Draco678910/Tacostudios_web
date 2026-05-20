<?php

namespace App\Http\Controllers;

use App\Models\CategoryJoc;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    /**
     * LISTADO
     */
    public function index()
    {
        return response()->json(
            CategoryJoc::with('jocs')->get()
        );
    }

    /**
     * CREAR (SIN DUPLICADOS IGNORANDO MAYÚSCULAS)
     */
    public function store(Request $request)
{
    $validated = $request->validate([
        'nom' => 'required|string|max:255',
        'descripcio' => 'nullable|string',
    ]);

    // 🔥 CHECK CASE-INSENSITIVE DUPLICATE
    $exists = CategoryJoc::whereRaw('LOWER(nom) = ?', [strtolower($validated['nom'])])
        ->exists();

    if ($exists) {
        return back()->withErrors([
            'nom' => 'CATEGORY_EXISTS'
        ]);
    }

    CategoryJoc::create([
        'nom' => $validated['nom'],
        'descripcio' => $validated['descripcio'] ?? null,
    ]);

    return redirect()
        ->route('admin')
        ->with('success', 'Categoria creada correctament');
}

    public function show(CategoryJoc $category)
    {
        return response()->json(
            $category->load('jocs')
        );
    }


    public function update(Request $request, $id)
{
    $category = CategoryJoc::findOrFail($id);

    $category->update($request->only(['nom', 'descripcio']));

    return back();
}

public function destroy($id)
{
    $category = CategoryJoc::withCount('jocs')->findOrFail($id);

    if ($category->jocs_count > 0) {
        return back()->withErrors([
            'error' => 'No puedes borrar una categoría con juegos asociados'
        ]);
    }

    $category->delete();

    return back()->with('success', 'Categoría eliminada');
}
}