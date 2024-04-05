<?php

namespace Src\Shared\Core\Bus\QueryBus\Domain\Entity;

use Src\Shared\Core\ValueObject\Fecha\FechaValue;
use Src\Shared\Core\Bus\Shared\Domain\Interfaces\CommandQueryInterface;

abstract class Query implements CommandQueryInterface
{
    private FechaValue $executedOn;

    public function __construct()
    {
        $this->executedOn = FechaValue::ahora();
    }
    public function getExecutedOn(): FechaValue
    {
        return $this->executedOn;
    }
}
