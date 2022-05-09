<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Http\Exceptions\HttpResponseException;

class RegisterRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'name' => 'required',
            'password' => 'required|min:5',
            'email' => 'required|email|unique:users'
        ];
    }

    public function messages() {
        return [
            'name.required' => 'Introduce tu nombre.',
            'password.required' => 'Introduce una contraseña.',
            'password.min:5' => 'Tu contraseña debe tener más de 5 carácteres',
            'email.required' => 'Introduce un correo electrónico.',
            'email.email' => 'Introduce un correo electrónico válido.',
            'email.unique' => 'Ese correo electrónico ya está en uso.'
        ];
    }

    public function failedValidation(Validator $validator) {
        throw new HttpResponseException(response()->json([
            'status' => 'error',
            'message' => 'Error',
            'data' => $validator->errors()
        ]));
    }
}
