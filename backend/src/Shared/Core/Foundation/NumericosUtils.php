<?php

declare(strict_types=1);

namespace Src\Shared\Foundation;

class NumericosUtils
{
    public static function redondeoALaBaja(float|int $valor): float
    {
        return floor($valor);
    }

    public static function redondeoALaBajaPorcentaje(float|int $valor): float
    {
        return floor($valor * 100) / 100;
    }

    public static function redondeoAlAlta(float|int $valor): float
    {
        return ceil($valor);
    }

    public static function redondeoAlAltaPorcentaje(float|int $valor): float
    {
        return ceil($valor * 100) / 100;
    }
}
