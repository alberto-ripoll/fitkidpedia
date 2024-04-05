<?php

namespace Src\Shared\Dao\Usuario\Infrastructure\Bindings;

use Src\Shared\Core\Foundation\Container\BaseRegisterBindings;
use Src\Shared\Dao\Usuario\Domain\UsuarioBaseRepositoryInterface;
use Src\Shared\Dao\Usuario\Infrastructure\Datasource\UsuarioBaseEloquentRepository;

class UsuarioDaoRegisterBindings extends BaseRegisterBindings
{
    protected function singletons(): array
    {
        return [
            UsuarioBaseRepositoryInterface::class => UsuarioBaseEloquentRepository::class,
        ];
    }
}
