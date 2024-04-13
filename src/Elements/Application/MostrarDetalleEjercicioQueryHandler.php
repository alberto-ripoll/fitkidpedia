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
        $detalle = $this->repository->find($query->id());
        return $detalle[0];
    }
}
