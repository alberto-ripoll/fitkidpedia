<?php

namespace Src\Auth\Domain\Interface;

use Zataca\Hydrator\Criteria;
use Src\Shared\Dao\Usuario\Domain\UsuarioBase;
use Src\Shared\Dao\Usuario\Domain\UsuarioBaseCollection;

interface UsuarioRepositoryInterface
{
    public function getCollection(Criteria $criteria): UsuarioBaseCollection;

    public function getEntity(Criteria $criteria): UsuarioBase;
}
