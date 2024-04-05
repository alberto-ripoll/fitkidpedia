<?php

declare(strict_types=1);

namespace Src\Shared\Core\ValueObject\RangoFecha;

use RuntimeException;

class RangoFechaException extends RuntimeException
{
    //TODO CAMBIAR POR CODIGO
    public const MESSAGE = "La fecha hasta no puede ser menor que fecha desde";


    public static function create()
    {
        return new self(
            self::MESSAGE,
        );
    }
}
