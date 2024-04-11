<?php

namespace Src\Elements\Application;

class BuscarEjerciciosQuery
{
    public function __construct(
        private readonly string $query
    ) {
    }

    public function query(): string
    {
        return $this->query;
    }
}
