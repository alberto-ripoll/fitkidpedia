<?php

namespace Src\Shared\Core\Bus\QueryBus\Application;

use Src\Shared\Core\Bus\QueryBus\Infrastructure\QueryBusFacade;

class QueryBusAnidadoQueryHandler
{
    public function __construct()
    {
    }

    public function run(QueryBusAnidadoQuery $query): string
    {
        [$query];
        $query2 = new  QueryBusEvent2Query();
        return QueryBusFacade::process($query2);
    }
}
