<?php

namespace Src\Shared\Core\Bus\QueryBus\Application;

use Src\Shared\Core\Bus\QueryBus\Domain\Events\FakeEvent;
use Src\Shared\Core\Bus\Shared\Domain\Entity\EventDispatcher;
use Tests\Unit\Shared\Bus\QueryBusTest;

class QueryBusEventQueryHandler
{
    public function __construct()
    {
    }

    public function run(QueryBusEventQuery $query): string
    {
        [$query];
        EventDispatcher::publish(new FakeEvent());
        return QueryBusTest::QUERY_EXECUTED;
    }
}
