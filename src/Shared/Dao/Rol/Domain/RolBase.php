<?php

namespace Src\Shared\Dao\Rol\Domain;

class RolBase
{

    public function __construct(
        public readonly string $id,
        public readonly string $name,
    ) {
    }
}
