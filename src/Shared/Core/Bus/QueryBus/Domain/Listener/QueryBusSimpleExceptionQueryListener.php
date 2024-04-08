<?php

namespace Src\Shared\Core\Bus\QueryBus\Domain\Listener;

use Src\Shared\Core\Bus\QueryBus\Application\QueryBusSimpleExceptionQuery;
use Src\Shared\Core\Bus\QueryBus\Infrastructure\QueryBusFacade;
use Src\Shared\Event\BaseEvent;

class QueryBusSimpleExceptionQueryListener
{
    public function __invoke(
        BaseEvent $event
    ) {
        [$event];
        $query = new QueryBusSimpleExceptionQuery();
        return QueryBusFacade::process($query);
    }
}
