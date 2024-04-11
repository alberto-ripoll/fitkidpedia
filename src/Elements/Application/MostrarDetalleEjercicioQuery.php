<?php

namespace Src\Elements\Application;

class MostrarDetalleEjercicioQuery
{
    public function __construct(
        private readonly string $category
    ) {
    }

    public function category(): string
    {
        return $this->category;
    }
}
