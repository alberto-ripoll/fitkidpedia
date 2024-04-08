<?php

namespace Src\Shared\Core\Bus\QueryBus\Domain\Listener;

use Src\Shared\Core\Bus\QueryBus\Application\QueryBusSimpleExceptionQuery;
use Src\Shared\Core\Bus\QueryBus\Application\QueryBusSimpleExceptionQueryHandler;
use Src\Shared\Event\BaseEvent;

class UseCaseExceptionListener
{
    public function __construct(
        protected QueryBusSimpleExceptionQueryHandler $casoUso
    ) {
    }
    public function __invoke(
        BaseEvent $event
    ) {
        [$event];
        $query = new QueryBusSimpleExceptionQuery();
        return $this->casoUso->run($query);
    }
}
