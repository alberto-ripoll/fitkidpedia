<?php

namespace Src\Shared\Dao\Permiso\Domain;

class PermisoBase
{
    public function __construct(
        public readonly string $id,
        public readonly string $name,
    ) {
    }
}
