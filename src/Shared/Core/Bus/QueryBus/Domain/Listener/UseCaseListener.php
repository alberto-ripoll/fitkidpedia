<?php

namespace Src\Shared\Core\Bus\QueryBus\Domain\Listener;

use Src\Shared\Core\Bus\QueryBus\Application\QueryBusSimpleQuery;
use Src\Shared\Core\Bus\QueryBus\Application\QueryBusSimpleQueryHandler;
use Src\Shared\Core\Bus\QueryBus\Infrastructure\QueryBusFacade;
use Src\Shared\Event\BaseEvent;

class UseCaseListener
{
    public function __construct(
        protected QueryBusSimpleQueryHandler $casoUso
    ) {
    }
    public function __invoke(
        BaseEvent $event
    ) {
        [$event];
        $query = new QueryBusSimpleQuery();
        return $this->casoUso->run($query);
    }
}
