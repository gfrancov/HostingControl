<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $password = password_hash('lapineda', PASSWORD_DEFAULT);

        $arrUsers = [
            array('name' => 'Gabriel Franco','email' => 'jo@gabrielfranco.me','password' => $password)
        ];

        foreach($arrUsers as $usuari) {
            User::create($usuari);
        }
    }
}
