<?php

namespace Src\Shared\Core\Bus\Shared\Domain\Interfaces;

interface MiddlewareInterface
{
    public function process($request, $handler);
}
