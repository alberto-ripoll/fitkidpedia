<?php

namespace Src\Elements\Application;

class ListarEjerciciosRelacionadosQuery
{
    public function __construct(
        private readonly string $ejercicioId
    ) {
    }

    public function ejercicioId(): string
    {
        return $this->ejercicioId;
    }
}
