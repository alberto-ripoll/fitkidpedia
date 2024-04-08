<?php

declare(strict_types=1);

namespace Src\Auth\Infrastructure;

use Src\Auth\Domain\Interface\LoginInterface;
use Src\Auth\Domain\Interface\UsuarioRepositoryInterface;
use Src\Shared\Core\Foundation\Container\BaseRegisterBindings;
use Src\Auth\Infrastructure\Persistence\UsuarioRepository;

class AuthRegisterBindings extends BaseRegisterBindings
{
    /**
     * Register singletons
     *
     * @return array
     */
    protected function singletons(): array
    {
        return [
            LoginInterface::class => LoginService::class,
            UsuarioRepositoryInterface::class => UsuarioRepository::class
        ];
    }
}
