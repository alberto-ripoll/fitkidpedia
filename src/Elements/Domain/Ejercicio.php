<?php

namespace Src\Elements\Domain;

class Ejercicio
{

    public function __construct(
        public readonly string $id,
        public readonly string $nombre,
        public readonly string $descripcion,
        public readonly string $categoria,
        public readonly string $imagen,
        public readonly string $video,
        public readonly string $dificultad,
    ) {
    }
}
