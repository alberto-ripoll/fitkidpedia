<?php

namespace Src\Shared\Core\Bus\CommandBus\Domain\Entity;

use Src\Shared\Core\ValueObject\Fecha\FechaValue;
use Src\Shared\Core\Bus\Shared\Domain\Interfaces\CommandQueryInterface;

/**
 * @SuppressWarnings(PHPMD.NumberOfChildren)
 */
abstract class Command implements CommandQueryInterface
{
    private FechaValue $executedOn;

    public function __construct()
    {
        $this->executedOn = FechaValue::ahora();
    }
    public function executedOn(): FechaValue
    {
        return $this->executedOn;
    }
}
