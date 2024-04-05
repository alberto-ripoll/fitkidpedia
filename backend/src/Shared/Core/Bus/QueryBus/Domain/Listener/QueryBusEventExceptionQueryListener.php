<?php

namespace Src\Shared\Core\Bus\QueryBus\Domain\Listener;

use Src\Shared\Core\Bus\QueryBus\Application\QueryBusEventExceptionQuery;
use Src\Shared\Core\Bus\QueryBus\Infrastructure\QueryBusFacade;
use Src\Shared\Event\BaseEvent;

class QueryBusEventExceptionQueryListener
{
    public function __invoke(
        BaseEvent $event
    ) {
        [$event];
        $query = new QueryBusEventExceptionQuery();
        return QueryBusFacade::process($query);
    }
}
