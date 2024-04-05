<?php

declare(strict_types=1);

namespace Src\Auth\Application;

class ValidarCredencialesCommand
{
    /**
     * @param string $identity Puede ser email o teléfono
     * @param string $password
     */
    public function __construct(
        public string $identity,
        public ?string $password,
    ) {
    }
}
