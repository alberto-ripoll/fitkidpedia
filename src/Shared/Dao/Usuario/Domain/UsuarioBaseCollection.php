<?php

namespace Src\Shared\Dao\Usuario\Domain;

use Zataca\Hydrator\BaseCollection;
use Src\Shared\Dao\Usuario\Domain\UsuarioBase;

class UsuarioBaseCollection extends BaseCollection
{
    protected $type = UsuarioBase::class;

    public function arrayOfIds(): array
    {
        $ids = [];
        $this->foreach(function (UsuarioBase $deportista) use (&$ids) {
            $ids[] = $deportista->id;
        });

        return $ids;
    }
}
