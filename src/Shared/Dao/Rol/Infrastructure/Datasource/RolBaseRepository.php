<?php

namespace Src\Shared\Dao\Rol\Infrastructure\Datasource;

use Zataca\Hydrator\Criteria;
use Src\Shared\Dao\Rol\Domain\RolBase;
use Src\Shared\Dao\Rol\Domain\RolBaseCollection;
use Src\Shared\Dao\Rol\Domain\RolNoEncontradoException;
use Src\Shared\Dao\Rol\Domain\RolBaseRepositoryInterface;
use Src\Shared\Core\Foundation\BaseRepository\BaseRepository;
use Src\Shared\Dao\Rol\Infrastructure\Eloquent\RolEloquentModel;

class RolBaseRepository extends BaseRepository implements RolBaseRepositoryInterface
{
    protected string $modelClass = RolEloquentModel::class;

    public function getEntity(Criteria $criteria): RolBase
    {
        $rol = $this->getModel($criteria);
        if (!$rol) {
            throw  RolNoEncontradoException::create();
        }
        return $this->hydrate(RolBase::class, $rol->toArray());
    }

    public function getCollection(Criteria $criteria): RolBaseCollection
    {
        $roles = $this->getModelCollection($criteria);
        return new RolBaseCollection($roles->toArray());
    }
}
