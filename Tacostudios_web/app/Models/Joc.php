<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Joc extends Model
{
    protected $table = 'jocs';

    protected $fillable = [
        'nom',
        'descripcio',
        'imatge',
        'category_id',
        'data_publicacio',
        'resenyes_posit',
        'resenyes_negat',
        'arxiu_enllac'
    ];

    public function category()
    {
        return $this->belongsTo(CategoryJoc::class, 'category_id');
    }
}