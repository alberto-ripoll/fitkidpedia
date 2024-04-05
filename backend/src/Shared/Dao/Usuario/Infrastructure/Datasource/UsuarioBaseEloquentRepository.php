<?php

namespace Src\Shared\Dao\Usuario\Infrastructure\Datasource;

use Zataca\Hydrator\Criteria;

use Src\Shared\Dao\Rol\Domain\RolesConstants;
use Src\Shared\Dao\Usuario\Domain\UsuarioBase;
use Src\Shared\Dao\Usuario\Domain\UsuarioBaseCollection;
use Src\Shared\Core\Foundation\BaseRepository\BaseRepository;
use Src\Shared\Dao\Usuario\Domain\UsuarioBaseRepositoryInterface;
use Src\Shared\Dao\Usuario\Domain\DeportistaNoEncontradoException;
use Src\Shared\Dao\Usuario\Infrastructure\Eloquent\UsuarioEloquentModel;

class UsuarioBaseEloquentRepository extends BaseRepository implements UsuarioBaseRepositoryInterface
{
    protected string $modelClass = UsuarioEloquentModel::class;

    public function searchAll(): UsuarioBaseCollection
    {
        $deportistas = UsuarioEloquentModel::all()->toArray();
        return new UsuarioBaseCollection($deportistas);
    }

    public function getEntity(Criteria $criteria): UsuarioBase
    {
        $deportista = $this->getModel($criteria);
        if (!$deportista) {
            throw new DeportistaNoEncontradoException();
        }
        return $this->hydrate(UsuarioBase::class, $deportista->toArray());
    }

    public function getCollection(Criteria $criteria): UsuarioBaseCollection
    {
        $deportistas = $this->getModelCollection($criteria);
        return new UsuarioBaseCollection($deportistas->toArray());
    }

    public function exists(Criteria $criteria): bool
    {
        return $this->getModel($criteria) !== null;
    }

    public function save(UsuarioBase $deportista): void
    {
        $model = new UsuarioEloquentModel();

        $model->id = $deportista->id;
        $model->nombre = $deportista->nombre;
        $model->nombre_usuario = $deportista->nombreUsuario;
        $model->telefono = $deportista->telefono;
        $model->avatar = $deportista->avatar;

        $model->save();
        $model->assignRole($deportista->roles->arrayOfRoles());
    }

    public function update(UsuarioBase $deportista): void
    {
        $model = UsuarioEloquentModel::find($deportista->id);

        $model->nombre = $deportista->nombre;
        $model->nombre_usuario = $deportista->nombreUsuario;
        $model->telefono = $deportista->telefono;
        $model->avatar = $deportista->avatar;

        $model->save();
        $model->syncRoles($deportista->roles->arrayOfRoles());
    }

    public function delete(UsuarioBase $deportista): void
    {
        $model = UsuarioEloquentModel::find($deportista->id);
        $model->delete();
    }
}
