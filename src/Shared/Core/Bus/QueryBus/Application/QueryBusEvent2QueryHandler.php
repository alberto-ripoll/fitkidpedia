<?php

namespace Src\Shared\Core\Bus\QueryBus\Application;

use Src\Shared\Core\Bus\QueryBus\Domain\Events\FakeEvent2;
use Src\Shared\Core\Bus\Shared\Domain\Entity\EventDispatcher;
use Tests\Unit\Shared\Bus\QueryBusTest;

class QueryBusEvent2QueryHandler
{
    public function __construct()
    {
    }

    public function run(QueryBusEvent2Query $query): string
    {
        [$query];
        EventDispatcher::publish(new FakeEvent2());
        return QueryBusTest::QUERY_2_EXECUTED;
    }
}
