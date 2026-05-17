<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    protected $table = 'categories_jocs';

    protected $fillable = [
        'nom',
        'color',
    ];

    public function jocs()
    {
        return $this->hasMany(Joc::class);
    }
}