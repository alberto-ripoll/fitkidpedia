<?php

namespace Src\Shared\Core\Bus\QueryBus\Application;

use Tests\Unit\Shared\Bus\QueryBusTest;

class QueryBusSimpleQueryHandler
{
    public function __construct()
    {
    }

    public function run(QueryBusSimpleQuery $query): string
    {
        [$query];
        return QueryBusTest::QUERY_EXECUTED;
    }
}
