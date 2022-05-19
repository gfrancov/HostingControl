<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Compra;

class CompraController extends Controller
{
    //
    public function userCompra($usuario) {

        $historial = Compra::select(
            "compras.id",
            "compras.user",
            "compras.producto",
            "productos.name",
            "productos.desc",
            "productos.price",
            "compras.cantidad",
            "compras.created_at"
        )
        ->join("productos", "productos.id", "=", "compras.producto")
        ->where("compras.user", "=", $usuario)
        ->get();

        return response()->json($historial);

    }

    public function userCompraMonth($usuario) {

        $now = date('Y-m-d H:i:s', strtotime("-1 months"));

        $historial = Compra::select(
            "compras.id",
            "compras.user",
            "compras.producto",
            "productos.name",
            "productos.desc",
            "productos.price",
            "compras.cantidad"
        )
        ->join("productos", "productos.id", "=", "compras.producto")
        ->where([
            ["compras.user", "=", $usuario],
            ["compras.created_at", ">", $now]
            ])
        ->get();

        return response()->json($historial);

    }
}
