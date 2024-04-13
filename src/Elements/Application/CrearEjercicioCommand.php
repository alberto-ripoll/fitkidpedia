<?php

namespace Src\Elements\Application;

class CrearEjercicioCommand
{
    public function __construct(
        private readonly string $id,
        private readonly string $name,
        private readonly string $category,
        private readonly string $difficulty,

    ) {
    }

    public function query(): string
    {
        return $this->query;
    }
}
