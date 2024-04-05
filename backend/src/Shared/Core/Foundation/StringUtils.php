<?php

declare(strict_types=1);

namespace Src\Shared\Foundation;

class StringUtils
{
    /**
     * Sustituye todas las vocales con acentos por vocales sin acentos
     * @param string $cadena a transformar.
     * @return string
     */
    public static function sinAcentos(string $cadena): string
    {
        $acentos = [
            'à' => 'a',
            'á' => 'a',
            'â' => 'a',
            'ã' => 'a',
            'ä' => 'a',
            'è' => 'e',
            'é' => 'e',
            'ê' => 'e',
            'ë' => 'e',
            'ì' => 'i',
            'í' => 'i',
            'î' => 'i',
            'ï' => 'i',
            'ò' => 'o',
            'ó' => 'o',
            'ô' => 'o',
            'õ' => 'o',
            'ö' => 'o',
            'ù' => 'u',
            'ú' => 'u',
            'û' => 'u',
            'ü' => 'u',
            'ý' => 'y',
            'ÿ' => 'y',
            'À' => 'A',
            'Á' => 'A',
            'Â' => 'A',
            'Ã' => 'A',
            'Ä' => 'A',
            'È' => 'E',
            'É' => 'E',
            'Ê' => 'E',
            'Ë' => 'E',
            'Ì' => 'I',
            'Í' => 'I',
            'Î' => 'I',
            'Ï' => 'I',
            'Ò' => 'O',
            'Ó' => 'O',
            'Ô' => 'O',
            'Õ' => 'O',
            'Ö' => 'O',
            'Ù' => 'U',
            'Ú' => 'U',
            'Û' => 'U',
            'Ü' => 'U',
            'Ý' => 'Y',
        ];

        $cadenaSinAcentos = strtr($cadena, $acentos);
        return $cadenaSinAcentos;
    }

    public static function mayusculas(string $cadena): string
    {
        return mb_strtoupper($cadena);
    }


    public static function minusculas(string $cadena): string
    {
        return mb_strtolower($cadena);
    }
    public static function sinCaracteresEspeciales(string $cadena): string
    {
        $soloLetras = preg_replace('/[^a-zA-Z ]/', '', $cadena);
        return $soloLetras;
    }

    public static function limpiarMultiplesEspacios(string $cadena): string
    {
        return trim(preg_replace('/[\s]+/mu', ' ', $cadena));
    }

    public static function formatoBusqueda(string $cadena): string
    {
        $sinAcentos = self::sinAcentos($cadena);
        $mayusculas = self::mayusculas($sinAcentos);
        $cadenaFormateada = self::sinCaracteresEspeciales($mayusculas);

        return $cadenaFormateada;
    }
}
