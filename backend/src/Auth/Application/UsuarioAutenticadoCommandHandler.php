<?php

declare(strict_types=1);

namespace Src\Auth\Application;

use Zataca\Hydrator\HydratorTrait;
use Src\Auth\Domain\DTO\ValidarCredencialesDTO;
use Src\Auth\Domain\Interface\UsuarioRepositoryInterface;
use Src\Auth\Domain\Specification\UsuarioPorIdSpecification;
use Src\Auth\Infrastructure\Persistence\Exception\UsuarioNotFoundException;

class UsuarioAutenticadoCommandHandler
{
    use HydratorTrait;

    protected UsuarioRepositoryInterface $usuarioRepository;

    public function __construct(UsuarioRepositoryInterface $usuarioRepository)
    {
        $this->usuarioRepository = $usuarioRepository;
    }

    /**
     * Comando para obtener los datos del usuario autenticado
     *
     * @param UsuarioAutenticadoCommand $usuarioAutenticadoCommand
     * @return ValidarCredencialesDTO
     * @throws UsuarioNotFoundException
     */
    public function run(UsuarioAutenticadoCommand $usuarioAutenticadoCommand): ValidarCredencialesDTO
    {
        $specification = (new UsuarioPorIdSpecification($usuarioAutenticadoCommand->id));
        $user = $this->usuarioRepository->getEntity($specification->getCriteria());

        return new ValidarCredencialesDTO($user);
    }
}
