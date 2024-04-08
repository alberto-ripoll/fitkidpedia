<?php

namespace Src\Shared\Dao\Rol\Domain;

use Zataca\Hydrator\Criteria;

interface RolBaseRepositoryInterface
{
    public function getEntity(Criteria $criteria): RolBase;
    public function getCollection(Criteria $criteria): RolBaseCollection;
}
