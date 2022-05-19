<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\RegisterRequest;
use App\Http\Requests\LoginRequest;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;

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

    public function loginUser(LoginRequest $request) {
 
        if(Auth::attempt(['email' => $request->input('email'), 'password' => $request->input('password')])) {

            $user = Auth::user();

            $login['token'] = $user->createToken('auth_token')->plainTextToken;
            $login['name'] = $user->name;
            $login['email'] = $user->email;
            $login['id'] = $user->id;

            return response()->json([
                'status' => 'success',
                'data' => $login
            ]);

        } else {
            return response()->json([
                'status' => 'error',
                'data' => [
                    'login' => 'Tus credenciales no coinciden.'
                ]
            ]);
        }

 
     }
}
