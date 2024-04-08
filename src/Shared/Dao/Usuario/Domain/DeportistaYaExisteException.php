<?php

namespace Src\Shared\Dao\Usuario\Domain;

class DeportistaYaExisteException extends \Exception
{
    public function __construct()
    {
        parent::__construct("El deportista ya existe");
    }
}
