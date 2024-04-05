<?php

namespace Src\Shared\Core\Bus\QueryBus\Domain\Listener;

use Src\Shared\Core\Bus\QueryBus\Application\QueryBusSimpleQuery;
use Src\Shared\Core\Bus\QueryBus\Infrastructure\QueryBusFacade;
use Src\Shared\Event\BaseEvent;

class QueryBusSimpleQueryListener
{
    public function __invoke(
        BaseEvent $event
    ) {
        [$event];
        $query = new QueryBusSimpleQuery();
        return QueryBusFacade::process($query);
    }
}
