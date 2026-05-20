<?php

namespace App\Http\Middleware;

use Illuminate\Http\Request;
use Inertia\Middleware;
use App\Models\CategoryJoc;

class HandleInertiaRequests extends Middleware
{
    /**
     * Root template
     */
    protected $rootView = 'app';

    /**
     * Asset versioning
     */
    public function version(Request $request): ?string
    {
        return parent::version($request);
    }

    /**
     * Shared props across all Inertia pages
     */
    public function share(Request $request): array
    {
        return array_merge(parent::share($request), [

            // APP NAME
            'name' => config('app.name'),

            // AUTH USER
            'auth' => [
                'user' => $request->user(),
            ],

            // UI STATE
            'sidebarOpen' => !$request->hasCookie('sidebar_state')
                || $request->cookie('sidebar_state') === 'true',

            // =========================
            // GLOBAL CATEGORIES (FIX)
            // =========================
            'categories' => CategoryJoc::select('id', 'nom')->get(),

        ]);
    }
}