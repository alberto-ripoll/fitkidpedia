<?php

namespace Src\Elements\Application;

class ListarEjerciciosDeCategoriaQuery
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
