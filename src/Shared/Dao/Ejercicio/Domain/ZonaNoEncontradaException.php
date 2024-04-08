<?php

namespace Src\Shared\Dao\Ejercicio\Domain;

class EjercicioNoEncontradaException extends \Exception
{
    public function __construct()
    {
        parent::__construct("Ejercicio no encontrado");
    }
}
