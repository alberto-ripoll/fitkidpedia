<?php

namespace Src\Shared\Core\Exceptions\Request\Base;

use RuntimeException;

/**
 * @SuppressWarnings(PHPMD.NumberOfChildren)
 */
abstract class BaseException extends RuntimeException
{
    protected static $messages = [];

    public static function create()
    {
        /** @phpstan-ignore-next-line */
        return new static(static::$messages[static::class]);
    }

    public static function throw()
    {
        /** @phpstan-ignore-next-line */
        throw new static(static::$messages[static::class]);
    }

    public static function codigo(): string
    {
        /** @phpstan-ignore-next-line */
        return (new static(static::$messages[static::class]))->message;
    }
}
