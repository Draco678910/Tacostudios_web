<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class CategoryJoc extends Model
{
    protected $table = 'categories_jocs';

    protected $fillable = [
        'nom',
        'color',
    ];
}