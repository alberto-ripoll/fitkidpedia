<?php

declare(strict_types=1);

namespace Src\Auth\Application;

class UsuarioAutenticadoCommand
{
    /**
     * @param string $id Id del usuario
     */
    public function __construct(
        public string $id,
    ) {
    }
}
