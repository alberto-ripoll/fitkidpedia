<?php

namespace Src\Shared\Dao\Usuario\Domain;

class DeportistaNombreUsuario
{
    public function __construct(
        public readonly string $nombreUsuario,
    ) {
    }

    public static function generate(string $nombre): DeportistaNombreUsuario
    {
        $nombreUsuario = strtolower($nombre);
        $nombreUsuario = str_replace(' ', '_', $nombreUsuario);

        return new DeportistaNombreUsuario($nombreUsuario);
    }
}
