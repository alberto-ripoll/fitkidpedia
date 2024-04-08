<?php

namespace Src\Shared\Dao\Ejercicio\Domain;

class EjercicioYaExisteException extends \Exception
{
    public function __construct()
    {
        parent::__construct("El ejercicio ya existe");
    }
}
