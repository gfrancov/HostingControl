<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Compra extends Model
{

    protected $fillable = [
        'user',
        'producto',
        'cantidad'
    ];


    use HasFactory;
}
