<?php

namespace Src\Shared\Dao\Usuario\Domain;

use Src\Shared\Dao\Rol\Domain\RolBaseCollection;

class UsuarioBase
{
    public function __construct(
        public readonly string $id,
        public readonly string $nombre,
        public readonly string $nombreUsuario,
        public readonly RolBaseCollection $roles,
        public readonly ?string $avatar = '',
        public readonly ?string $telefono = '',
    ) {
    }
}
