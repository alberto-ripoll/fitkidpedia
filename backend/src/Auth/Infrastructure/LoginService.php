<?php

namespace Src\Auth\Infrastructure;

use Illuminate\Support\Facades\Auth;
use Src\Auth\Domain\Interface\LoginInterface;

class LoginService implements LoginInterface
{
    /**
     * @SuppressWarnings(PHPMD.BooleanArgumentFlag)
     */
    public function loginEmail(string $username, string $password, bool $recordar = false): bool
    {
        if (Auth::attempt(['nombre_usuario' => strtolower($username), 'password' => $password], $recordar)) {
            return true;
        }

        return false;
    }

    /**
     * @SuppressWarnings(PHPMD.BooleanArgumentFlag)
     */
    public function loginTelefono(string $telefono, string $password, bool $recordar = false): bool
    {
        if (Auth::attempt(['telefono' => $telefono, 'password' => $password], $recordar)) {
            return true;
        }

        return false;
    }
}
