<?php

namespace Src\Elements\Application;

use Src\Elements\Domain\EjerciciosRepositoryInterface;

class BuscarEjerciciosQueryHandler
{
    public function __construct(
        private readonly EjerciciosRepositoryInterface $repository
    ) {
    }

    public function run(BuscarEjerciciosQuery $query)
    {
        return $this->repository->search($query->query());
    }
}
