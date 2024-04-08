<?php

declare(strict_types=1);

namespace Src\Shared\Core\ValueObject\Uuid;

use RuntimeException;

class UuidInvalidoException extends RuntimeException
{
    public const MESSAGE = "El UUID %s no cumple el formato";


    public static function porUuid(string $id)
    {
        return new self(
            sprintf(self::MESSAGE, $id)
        );
    }
}
