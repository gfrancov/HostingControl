<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Producto;

class ProductoSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $arrProductos = [
            array('name' => 'Hosting Web 1','price' => 10,'desc' => 'Servicio de plan de Hosting Web sencillo disponible.','sold' => 40),
            array('name' => 'Hosting Web 2','price' => 20,'desc' => 'Servicio de plan de Hosting Web intermedio disponible.','sold' => 5),
            array('name' => 'Hosting Web 3','price' => 30,'desc' => 'Servicio de plan de Hosting Web enterprise disponible.','sold' => 2),
            array('name' => 'VPS','price' => 10,'desc' => 'Alquiler de máquinas virtuales online.','sold' => 8)
        ];

        foreach($arrProductos as $producto) {
            Producto::create($producto);
        }
    }
}
