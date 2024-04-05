<?php

namespace Src\Shared\Dao\Zona\Infrastructure\Datasource;

use Zataca\Hydrator\Criteria;
use Src\Shared\Dao\Zona\Domain\ZonaBase;
use Src\Shared\Dao\Zona\Domain\ZonaBaseCollection;
use Src\Shared\Core\Foundation\BaseRepository\BaseRepository;
use Src\Shared\Dao\Zona\Domain\ZonaNoEncontradaException;
use Src\Shared\Dao\Zona\Domain\ZonaBaseRepositoryInterface;
use Src\Shared\Dao\Zona\Infrastructure\Eloquent\ZonaEloquentModel;

class ZonaBaseEloquentRepository extends BaseRepository implements ZonaBaseRepositoryInterface
{
    protected string $modelClass = ZonaEloquentModel::class;

    public function searchAll(): ZonaBaseCollection
    {
        $zonas = ZonaEloquentModel::all()->toArray();
        return new ZonaBaseCollection($zonas);
    }

    public function getEntity(Criteria $criteria): ZonaBase
    {
        $zona = $this->getModel($criteria);
        if (!$zona) {
            throw new ZonaNoEncontradaException();
        }
        return $this->hydrate(ZonaBase::class, $zona->toArray());
    }

    public function getCollection(Criteria $criteria): ZonaBaseCollection
    {
        $zonas = $this->getModelCollection($criteria);
        return new ZonaBaseCollection($zonas->toArray());
    }
}
