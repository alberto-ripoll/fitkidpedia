<?php

namespace Src\Elements\Infrastructure\Bindings;

use Src\Elements\Domain\EjerciciosRepositoryInterface;
use Src\Shared\Core\Foundation\Container\BaseRegisterBindings;
use Src\Elements\Infrastructure\Datasource\EjerciciosRepository;

class EjerciciosBindings extends BaseRegisterBindings
{
    protected function singletons(): array
    {
        return [
            EjerciciosRepositoryInterface::class => EjerciciosRepository::class,
        ];
    }
}
