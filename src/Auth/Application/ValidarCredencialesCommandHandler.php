<?php

declare(strict_types=1);

namespace Src\Auth\Application;

use Zataca\Hydrator\Criteria;
use Src\Auth\Domain\Interface\LoginInterface;
use Src\Auth\Domain\DTO\ValidarCredencialesDTO;
use Src\Auth\Domain\Interface\UsuarioRepositoryInterface;
use Src\Auth\Domain\Exception\PasswordIncorrectoException;
use Src\Auth\Domain\Specification\UsuarioPorLoginSpecification;

class ValidarCredencialesCommandHandler
{
    protected UsuarioRepositoryInterface $usuarioRepository;
    protected LoginInterface $loginService;

    public function __construct(UsuarioRepositoryInterface $usuarioRepository, LoginInterface $loginService)
    {
        $this->usuarioRepository = $usuarioRepository;
        $this->loginService = $loginService;
    }

    /**
     * Undocumented function
     *
     * @param ValidarCredencialesCommand $validarCredencialesDTO
     * @return ValidarCredencialesDTO
     * @throws PasswordIncorrectoException
     */
    public function run(ValidarCredencialesCommand $validarCredencialesDTO): ValidarCredencialesDTO
    {

        $criteria = (new Criteria())->where('nombre_usuario', $validarCredencialesDTO->identity)->orWhere('telefono', $validarCredencialesDTO->identity);

        $user = $this->usuarioRepository->getEntity($criteria);

        if (
            $this->loginService->loginEmail($validarCredencialesDTO->identity, $validarCredencialesDTO->password)
            || $this->loginService->loginTelefono($validarCredencialesDTO->identity, $validarCredencialesDTO->password)
        ) {
            $criteria = (new UsuarioPorLoginSpecification($validarCredencialesDTO->identity, $validarCredencialesDTO->identity));

            $user = $this->usuarioRepository->getEntity($criteria->getCriteria());

            return new ValidarCredencialesDTO($user);
        }

        throw PasswordIncorrectoException::porPassword($validarCredencialesDTO->password);
    }
}
