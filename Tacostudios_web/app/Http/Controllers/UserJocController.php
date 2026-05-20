<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\User;
use App\Models\Joc;
use Inertia\Inertia;

class UserJocController extends Controller
{
    public function toggleFavorite($id)
{
    $user = Auth::user();

    $joc = $user->jocs()->find($id);

    if ($joc) {

        $user->jocs()->updateExistingPivot($id, [
            'is_favorite' => ! (bool) $joc->pivot->is_favorite
        ]);

    } else {

        $user->jocs()->attach($id, [
            'is_favorite' => true
        ]);

    }

    return back();
}   
public function play($id)
    {
        $user = auth()->user();

        // 🔥 actualiza pivot (biblioteca)
        $user->jocs()->updateExistingPivot($id, [
            'last_session' => Carbon::now(),
        ]);

        return response()->json([
            'ok' => true,
        ]);
    }
    public function biblioteca()
{
    $user = Auth::user();

    $jocs = $user->jocs()
        ->with('category')
        ->get()
        ->map(function ($joc) {

            return [
                'id' => $joc->id,
                'nom' => $joc->nom,
                'imatge' => $joc->imatge,
                'category' => $joc->category,

                // 🔥 FORZAMOS EL VALOR REAL DEL PIVOT SIN ROMPER SI ES NULL
                'pivot' => [
                    'is_favorite' => $joc->pivot ? (bool) $joc->pivot->is_favorite : false,
                ],
            ];
        });
    return Inertia::render('Biblioteca', [
        'jocs' => $jocs,
    ]);
}


    public function indexAdmin()
    {
        return inertia('Admin/UserJocs', [
            'users' => User::all(),
            'jocs' => Joc::all(),
        ]);
    }

    public function toggleAdmin(Request $request)
    {
        $request->validate([
            'user_id' => 'required|exists:users,id',
            'joc_id' => 'required|exists:jocs,id',
        ]);

        $user = User::findOrFail($request->user_id);

        $exists = $user->jocs()->where('joc_id', $request->joc_id)->exists();

        if ($exists) {
            $user->jocs()->detach($request->joc_id);
        } else {
            $user->jocs()->attach($request->joc_id, [
                'is_favorite' => false
            ]);
        }

        return back();
    }
}