<?php

declare(strict_types=1);

namespace Src\Auth\Domain\Exception;

use RuntimeException;

class CredencialesIncorrectosException extends RuntimeException implements UsuarioExceptionInterface
{
    public static function porAccesToken()
    {
        $exception = new self('Credenciales de acceso incorrectas.', 400);

        return $exception;
    }
}
