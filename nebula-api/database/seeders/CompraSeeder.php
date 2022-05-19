<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Compra;

class CompraSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $arrHistorial = [
            array('user' => 1,'producto' => 1,'cantidad' => 6),
            array('user' => 1,'producto' => 2,'cantidad' => 4),
            array('user' => 1,'producto' => 4,'cantidad' => 2)

        ];

        foreach($arrHistorial as $historial) {
            Compra::create($historial);
        }
    }
}
