<?php

namespace Src\Shared\Dao\Rol\Domain;

use Zataca\Hydrator\BaseCollection;

class RolBaseCollection extends BaseCollection
{
    protected $type = RolBase::class;

    public function jsonSerialize(): mixed
    {
        $permisos = [];
        $this->foreach(function ($rol) use (&$permisos) {
            $permisos[] = $rol->name;
        });

        return $permisos;
    }

    public function arrayOfRoles()
    {
        $roles = [];
        $this->foreach(function ($rol) use (&$roles) {
            $roles[] = $rol->name;
        });

        return $roles;
    }
}
