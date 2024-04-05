<?php

namespace Src\Shared\Core\Bus\Shared\Domain\Entity;

use Illuminate\Container\Container;
use Src\Shared\Core\Bus\Shared\Domain\Interfaces\MiddlewareInterface;

class CommandQueryHandler implements MiddlewareInterface
{
    public function process($request, $handler)
    {
        $handler->handle($request);

        $class = get_class($request) . 'Handler';
        $casoUso = Container::getInstance()->make($class);

        return $casoUso->run($request);
    }
}
