<?php

namespace Src\Shared\Dao\Ejercicio\Domain;

use Zataca\Hydrator\Criteria;

interface EjercicioBaseRepositoryInterface
{
    public function getEntity(Criteria $criteria): EjercicioBase;
    public function getCollection(Criteria $criteria): EjercicioBaseCollection;

    public function searchAll(): EjercicioBaseCollection;
}
