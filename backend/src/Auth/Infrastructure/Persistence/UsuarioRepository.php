<?php

namespace Src\Auth\Infrastructure\Persistence;

use Zataca\Hydrator\Criteria;
use Src\Shared\Dao\Usuario\Domain\UsuarioBase;
use Src\Shared\Dao\Usuario\Domain\UsuarioBaseCollection;
use Src\Auth\Domain\Interface\UsuarioRepositoryInterface;
use Src\Shared\Core\Foundation\BaseRepository\BaseRepository;
use Src\Shared\Dao\Usuario\Infrastructure\Eloquent\UsuarioEloquentModel;
use Src\Auth\Infrastructure\Persistence\Exception\UsuarioNotFoundException;

class UsuarioRepository extends BaseRepository implements UsuarioRepositoryInterface
{
    protected $with = ['roles', 'permissions'];
    protected string $modelClass = UsuarioEloquentModel::class;
    /**
     * Updates masivos
     *
     * @param array $criteria
     * @param array $payload
     *
     * @return int El número de registros actualizados.
     *
     */
    public function updateByCriteria(array $criteria, array $payload): int
    {
        return $this->model->where($criteria)->update($payload);
    }

    public function getEntity(Criteria $criteria): UsuarioBase
    {
        $result = $this->getModel($criteria);

        if (!$result) {
            throw UsuarioNotFoundException::paraValores($criteria);
        }


        return $this->hydrate(UsuarioBase::class, $result->toArray());
    }

    public function getCollection(Criteria $criteria): UsuarioBaseCollection
    {
        $result = $this->getModelCollection($criteria);

        return new UsuarioBaseCollection($result->toArray());
    }
}
