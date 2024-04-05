<?php

declare(strict_types=1);

namespace Src\Auth\Domain\Exception;

use RuntimeException;

class PasswordIncorrectoException extends RuntimeException implements UsuarioExceptionInterface
{
    private $password;

    public static function porPassword(string $password)
    {
        $exception = new self('El password no se corresponde con el del usuario.', 400);

        $exception->password = $password;

        return $exception;
    }

    public function getPassword()
    {
        return $this->password;
    }
}
