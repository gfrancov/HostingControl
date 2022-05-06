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

        if($name == 'gabi') {
            return response()->json([
                'status' => 'success',
                'data' => $request->all()
            ]);
        } else {
            return response()->json([
                'status' => 'error',
                'data' => $request->all()
            ]);
        }

    }

    public function loginUser(Request $request) {

        /*  $validator = Validator::make($request->all(), [
             'name' => 'required'
         ]); */
 
         $email = $request->input('email');
         $password = $request->input('password');
 
         return response()->json([
             'status' => 'success',
             'email' => $email,
             'pass' => $password
         ]);
 
     }
}
