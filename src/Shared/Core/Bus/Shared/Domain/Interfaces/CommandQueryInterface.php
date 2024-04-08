<?php

namespace Src\Shared\Core\Bus\Shared\Domain\Interfaces;

use Src\Shared\Core\ValueObject\Fecha\FechaValue;

interface CommandQueryInterface
{
    public function executedOn(): FechaValue;
}
