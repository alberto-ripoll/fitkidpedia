<?php

namespace Src\Elements\Application;

use Src\Elements\Domain\EjerciciosRepositoryInterface;

class ListarEjerciciosRelacionadosQueryHandler
{
    public function __construct(
        private readonly EjerciciosRepositoryInterface $repository
    ) {
    }

    public function run(ListarEjerciciosRelacionadosQuery $query)
    {
        $ejercicio = $this->repository->find($query->ejercicioId());
        return $this->repository->withCategory($ejercicio[0]["tipo"]);
    }
}
