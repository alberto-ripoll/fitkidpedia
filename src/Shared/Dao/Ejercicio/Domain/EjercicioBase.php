<?php

namespace Src\Shared\Dao\Ejercicio\Domain;

class EjercicioBase
{
    public function __construct(
        public readonly string $id,
        public readonly string $nombre,
        public readonly string $dificultad,
        public readonly string $tipo,
    ) {
    }
}
