<?php

declare(strict_types=1);

namespace Src\Auth\Infrastructure\Web;

use Src\Shared\Core\Foundation\Http\APIRequest;

class AuthenticateRequest extends APIRequest
{
    public function rules()
    {
        return [
            'identity' => 'required|string',
            'password' => 'required|string',
        ];
    }

    public function messages()
    {
        return [
            'telefono.required' => 'authenticate_exception_000',
            'telefono.string' => 'authenticate_exception_001',
            'password.required' => 'authenticate_exception_002',
            'password.string' => 'authenticate_exception_003',
        ];
    }
}
