<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Models\Producto;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// User paths
Route::post('register', [App\Http\Controllers\UserController::class, 'registerUser'])->name('register');
Route::post('login', [App\Http\Controllers\UserController::class, 'loginUser'])->name('login');

// Products paths
Route::get('get-products', function() {
    return Producto::all();
});
Route::get('lista-compra/{usuario?}',[App\Http\Controllers\CompraController::class, 'userCompra']);
Route::get('lista-compra-mes/{usuario?}',[App\Http\Controllers\CompraController::class, 'userCompraMonth']);
Route::post('comprar-producto',[App\Http\Controllers\CompraController::class, 'comprar']);