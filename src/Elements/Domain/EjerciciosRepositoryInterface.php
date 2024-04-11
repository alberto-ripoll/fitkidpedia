<?php

namespace Src\Elements\Infrastructure\Datasource;

interface EjerciciosRepository
{
    public function getEntity(int $id): array;
    public function getCollection(int $id): array;
}
