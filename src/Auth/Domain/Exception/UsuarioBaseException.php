<?php

namespace Src\Auth\Domain\Exception;

use Src\Shared\Exceptions\BaseException;

class UsuarioBaseException extends BaseException
{
    protected static $messages = [
        UsuarioNoExisteException::class => 'usuario_exception_000',
        DatosUsuarioIncorrectosException::class => 'usuario_exceptioni_001'
    ];
}
