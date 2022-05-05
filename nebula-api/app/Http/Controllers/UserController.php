<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class UserController extends Controller
{
    public function registerUser(Request $request) {

       /*  $validator = Validator::make($request->all(), [
            'name' => 'required',
            'email' => ''
        ]); */

        $name = $request->input('name');
        $email = $request->input('email');
        $password = $request->input('password');

        return response()->json([
            'status' => 'success',
            'nom' => $name,
            'email' => $email,
            'pass' => $password
        ]);

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
