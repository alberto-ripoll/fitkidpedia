<?php

namespace Src\Shared\Core\Exceptions\Request\Shared;

use Src\Shared\Core\Exceptions\Request\Base\ExceptionCodes;

class ApiFailedValidationMessageMapper
{
    private static array $messages = [
        'validation.required' => ExceptionCodes::CAMPO_REQUERIDO,
        'validation.string' => ExceptionCodes::CAMPO_DEBE_SER_STRING,
        'validation.date' => ExceptionCodes::CAMPO_DEBE_SER_FECHA_VALIDA,
        'validation.boolean' => ExceptionCodes::CAMPO_DEBE_SER_BOOL,
        'validation.bool' => ExceptionCodes::CAMPO_DEBE_SER_BOOL,
        'validation.numeric' => ExceptionCodes::CAMPO_DEBE_SER_NUMERICO,
        'validation.array' => ExceptionCodes::CAMPO_DEBE_SER_ARRAY,
        'validation.uuid' => ExceptionCodes::CAMPO_DEBE_SER_UUID
    ];

    public static function errorToCode(string $error)
    {
        $error = self::$messages[$error] ?? $error;

        return $error;
    }
}
