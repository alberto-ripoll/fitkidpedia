<?php

namespace Src\Shared\Dao\Usuario\Domain;

class DeportistaTelefono
{
    public function __construct(
        public ?string $telefono = '',
    ) {
        if ($telefono === null) {
            $this->telefono = '';
        }
    }
}
