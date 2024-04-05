<?php

declare(strict_types=1);

namespace Src\Auth\Infrastructure\Persistence\Exception;

use Exception;
use Zataca\Hydrator\Criteria;

class UsuarioNotFoundException extends Exception
{
    private $criteria;

    public static function paraValores(Criteria $criteria)
    {
        $exception = new self('Usuario no encontrado.');

        $exception->criteria = $criteria;

        return $exception;
    }

    public function getCriteria()
    {
        return $this->criteria;
    }
}
