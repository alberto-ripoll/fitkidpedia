<?php

namespace Src\Shared\Dao\Usuario\Domain;

class DeportistaNoEncontradoException extends \Exception
{
    public function __construct()
    {
        parent::__construct("El deportista no existe");
    }
}
