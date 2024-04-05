<?php

declare(strict_types=1);

namespace Src\Auth\Domain\DTO;

use JsonSerializable;
use Src\Shared\Dao\Usuario\Domain\UsuarioBase;

class ValidarCredencialesDTO implements JsonSerializable
{
    public function __construct(protected UsuarioBase $usuario)
    {
    }

    public function jsonSerialize(): array
    {
        return [
            'id' => $this->usuario->id,
            'nombre_usuario' => $this->usuario->nombreUsuario,
            'nombre' => $this->usuario->nombre,
            'avatar' => $this->usuario->avatar,
            'roles' => $this->usuario->roles,
        ];
    }
}
