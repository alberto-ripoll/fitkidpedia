<?php

namespace Src\Elements\Application;

class MostrarDetalleEjercicioQuery
{
    public function __construct(
        private readonly string $id
    ) {
    }

    public function id(): string
    {
        return $this->id;
    }
}
