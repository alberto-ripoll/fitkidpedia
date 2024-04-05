<?php

declare(strict_types=1);

namespace Src\Shared\Core\Routes;

/**
 * @SuppressWarnings(PHPMD.NumberOfChildren)
 */
abstract class ApiBaseRoutes
{
    protected static string $prefix = '';

    public static function getApiEndpoint(): string
    {
        return 'api/' . static::$prefix;
    }

    abstract public static function configure(): void;
}
