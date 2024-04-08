<?php

namespace Src\Shared\Core\Bus\QueryBus\Application;

use Exception;

class QueryBusSimpleExceptionQueryHandler
{
    public function __construct()
    {
    }

    public function run(QueryBusSimpleExceptionQuery $query): string
    {
        [$query];
        throw new Exception();
    }
}
