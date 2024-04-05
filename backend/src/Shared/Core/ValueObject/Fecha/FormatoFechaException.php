<?php

declare(strict_types=1);

namespace Src\Shared\Core\ValueObject\Fecha;

use RuntimeException;

class FormatoFechaException extends RuntimeException
{
    public const MESSAGE = "fecha_value_domain_exception_000";


    public static function create()
    {
        return new self(
            self::MESSAGE,
        );
    }
}
