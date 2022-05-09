<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\RegisterRequest;
use App\Models\User;

class UserController extends Controller
{
    public function registerUser(RegisterRequest $request) {

        $name = $request->input('name');
        $email = $request->input('email');
        $password = $request->input('password');

        User::create([
            'name' => $request->input('name'),
            'email' => $request->input('email'),
            'password' => password_hash($request->input('password'), PASSWORD_DEFAULT)
        ]);

        return response()->json([
            'status' => 'success',
            'data' => $request->all()
        ]);

    }

    public function loginUser(Request $request) {
 
         $email = $request->input('email');
         $password = $request->input('password');
 
         return response()->json([
             'status' => 'success',
             'email' => $email,
             'pass' => $password
         ]);
 
     }
}
