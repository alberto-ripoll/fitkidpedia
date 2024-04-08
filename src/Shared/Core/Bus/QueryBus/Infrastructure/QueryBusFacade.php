<?php

namespace Src\Shared\Core\Bus\QueryBus\Infrastructure;

use Illuminate\Support\Facades\Facade;
use Src\Shared\Core\Bus\Shared\Domain\Middleware\EventsMiddleware;
use Src\Shared\Core\Bus\QueryBus\Domain\Entity\QueryBus;
use Src\Shared\Core\Bus\Shared\Domain\Entity\CommandQueryHandler;

class QueryBusFacade extends Facade
{
    public static function create(): QueryBus
    {
        return (new QueryBus(
            EventsMiddleware::class,
            CommandQueryHandler::class
        ));
    }

    public static function process($query)
    {
        return self::create()->handle($query);
    }
}
