<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Http\Exceptions\HttpResponseException;

class CompraRequest extends FormRequest
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
            'id' => 'required|integer',
            'quantity' => 'required|integer|min:1',
            'user' => 'required|integer'
        ];
    }

    public function messages() {
        return [
            'id.required' => 'Necesitas una id para comprar.',
            'quantity.required' => 'Indica una cantidad a comprar.',
            'id.integer' => 'La id del producto ha de ser un número.',
            'quantity.integer' => 'La cantidad a comprar ha de ser un número (1).',
            'quantity.min:1' => 'La mínima cantidad ha de ser superior a 1.',
            'user.required' => 'El usuario que compra no está indicado.',
            'user.integer' => 'La id de usuario es incorrecta'
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
