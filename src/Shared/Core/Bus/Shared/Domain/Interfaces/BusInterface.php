<?php

namespace Src\Shared\Core\Bus\Shared\Domain\Interfaces;

interface BusInterface
{
    public function handle($request);
}
