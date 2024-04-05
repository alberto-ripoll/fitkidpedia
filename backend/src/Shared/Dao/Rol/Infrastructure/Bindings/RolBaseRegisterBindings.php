<?php

namespace Src\Shared\Dao\Rol\Infrastructure\Bindings;

use Src\Shared\Dao\Rol\Domain\RolBaseRepositoryInterface;
use Src\Shared\Core\Foundation\Container\BaseRegisterBindings;
use Src\Shared\Dao\Rol\Infrastructure\Datasource\RolBaseRepository;

class RolBaseRegisterBindings extends BaseRegisterBindings
{
    protected function singletons(): array
    {
        return [
            RolBaseRepositoryInterface::class => RolBaseRepository::class,
        ];
    }
}
