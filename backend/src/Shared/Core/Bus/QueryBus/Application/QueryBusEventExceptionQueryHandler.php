<?php

namespace Src\Shared\Core\Bus\QueryBus\Application;

use Exception;
use Src\Shared\Core\Bus\QueryBus\Domain\Events\FakeEvent;
use Src\Shared\Core\Bus\Shared\Domain\Entity\EventDispatcher;

class QueryBusEventExceptionQueryHandler
{
    public function __construct()
    {
    }

    public function run(QueryBusEventExceptionQuery $query): string
    {
        [$query];
        EventDispatcher::publish(new FakeEvent());
        throw new Exception();
    }
}
