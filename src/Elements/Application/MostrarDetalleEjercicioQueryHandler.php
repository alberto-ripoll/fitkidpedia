<?php

namespace Src\Elements\Application;

use Src\Elements\Domain\EjerciciosRepositoryInterface;

class MostrarDetalleEjercicioQueryHandler
{
    public function __construct(
        private readonly EjerciciosRepositoryInterface $repository
    ) {
    }

    public function run(MostrarDetalleEjercicioQuery $query)
    {
        return $this->repository->find($query->id());
    }
}
