<?php

namespace App\Models;
use App\Models\Joc;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class CategoryJoc extends Model
{
    use HasFactory;

    protected $table = 'categories_jocs';

    protected $fillable = [
        'nom',
        'descripcio',
    ];

    // ✅ ESTA ES LA RELACIÓN QUE TE FALTA
    public function jocs()
    {
        return $this->hasMany(Joc::class, 'category_id');
    }
}