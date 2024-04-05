<?php

namespace Src\Shared\Dao\Usuario\Domain;

use Zataca\Hydrator\Criteria;

interface UsuarioBaseRepositoryInterface
{
    public function getEntity(Criteria $criteria): UsuarioBase;
    public function getCollection(Criteria $criteria): UsuarioBaseCollection;
    public function searchAll(): UsuarioBaseCollection;

    public function exists(Criteria $criteria): bool;

    public function save(UsuarioBase $usuarioBase): void;
    public function update(UsuarioBase $usuarioBase): void;
    public function delete(UsuarioBase $usuarioBase): void;
}
