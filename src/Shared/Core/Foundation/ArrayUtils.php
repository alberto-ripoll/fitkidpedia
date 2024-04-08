<?php

declare(strict_types=1);

namespace Src\Shared\Foundation;

class ArrayUtils extends \Illuminate\Support\Arr
{
    /**
     * Convierte un array asociativo en un string con el formato 'key'='value'
     *
     * @param array $array a transformar.
     * @return string
     */
    public static function toString(array $array): string
    {
        return implode(', ', array_map(
            function ($value, $key) {
                return sprintf("'%s'='%s'", $key, $value);
            },
            $array,
            array_keys($array)
        ));
    }
}
