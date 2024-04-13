<?php

namespace Src\Elements\Application;

use Src\Elements\Domain\EjerciciosRepositoryInterface;

class ListarEjerciciosDeCategoriaQueryHandler
{
    public function __construct(
        private readonly EjerciciosRepositoryInterface $repository
    ) {
    }

    public function run(ListarEjerciciosDeCategoriaQuery $query)
    {
        return $this->repository->withCategory($query->category());
    }
}
