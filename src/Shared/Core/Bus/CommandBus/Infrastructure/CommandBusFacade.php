<?php

namespace Src\Shared\Core\Bus\CommandBus\Infrastructure;

use Src\Shared\Core\Bus\CommandBus\Domain\Entity\CommandBus;
use Src\Shared\CommandBus\Domain\Middleware\BloqueoMiddleware;
use Src\Shared\Core\Bus\Shared\Domain\Middleware\EventsMiddleware;
use Src\Shared\Core\Bus\CommandBus\Domain\Middleware\EncoladoMiddleware;
use Src\Shared\Core\Bus\CommandBus\Domain\Middleware\TransaccionMiddleware;
use Src\Shared\Core\Bus\Shared\Domain\Entity\CommandQueryHandler;

class CommandBusFacade
{
    public static function create(): CommandBus
    {
        return (new CommandBus(
            //BloqueoMiddleware::class,
            EncoladoMiddleware::class,
            EventsMiddleware::class,
            TransaccionMiddleware::class,
            CommandQueryHandler::class
        ));
    }

    public static function process($command)
    {
        return self::create()->handle($command);
    }
}
