<?php

namespace Src\Shared\Dao\Permiso\Domain;

use Zataca\Hydrator\BaseCollection;

class PermisoBaseCollection extends BaseCollection
{
    protected $type = PermisoBase::class;

    public function jsonSerialize(): mixed
    {
        $permisos = [];
        $this->foreach(function ($rol) use (&$permisos) {
            $permisos[] = $rol->name;
        });

        return $permisos;
    }
}
