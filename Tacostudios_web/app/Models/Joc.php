<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class Joc extends Model
{
    use HasFactory;

    protected $table = 'jocs';

    protected $fillable = [
        'nom',
        'descripcio',
        'imatge',
        'category_id',
        'data_publicacio',
        'preu',
        'resenyes_posit',
        'resenyes_negat',
        'arxiu_enllac',
        'launch_type',
    'launch_value',
    ];

    public function users()
{
    return $this->belongsToMany(User::class, 'user_joc')
        ->withPivot('is_favorite')
        ->withTimestamps();
}
    protected static function boot()
    {
        parent::boot();

        static::creating(function ($joc) {
            $joc->slug = Str::slug($joc->nom);
        });
    }

    protected $casts = [
        'data_publicacio' => 'date',
        'preu' => 'float', // 👈 IMPORTANTE
    ];

    public function category()
    {
        return $this->belongsTo(CategoryJoc::class, 'category_id');
    }
}