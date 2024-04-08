<?php

namespace Src\Shared\Dao\Zona\Infrastructure\Bindings;

use Src\Shared\Core\Foundation\Container\BaseRegisterBindings;
use Src\Shared\Dao\Zona\Domain\ZonaBaseRepositoryInterface;
use Src\Shared\Dao\Zona\Infrastructure\Datasource\ZonaBaseEloquentRepository;

class ZonaBaseRegisterBindings extends BaseRegisterBindings
{
    protected function singletons(): array
    {
        return [
            ZonaBaseRepositoryInterface::class => ZonaBaseEloquentRepository::class,
        ];
    }
}
