<?php

namespace Src\Shared\Core\Bus\Shared\Domain\Middleware;

use Src\Shared\Core\Bus\Shared\Domain\Entity\EventDispatcher;

class EventsMiddleware
{
    public function process($command, $handler)
    {
        $result =  $handler->handle($command);
        EventDispatcher::dispatch();
        return $result;
    }
}
