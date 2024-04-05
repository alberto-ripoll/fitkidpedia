<?php

namespace Src\Shared\Core\Bus\QueryBus\Domain\Entity;

use Illuminate\Container\Container;
use Src\Shared\Core\Bus\Shared\Domain\Interfaces\BusInterface;

class QueryBus implements BusInterface
{
    protected $middlewares = [];

    public function __construct(...$middlewares)
    {
        $this->middlewares = $middlewares;
    }

    public function handle($query)
    {
        $middleware = current($this->middlewares);
        next($this->middlewares);
        $result = $this->execute($query, $middleware);
        return $result;
    }

    public function execute($query, $middleware)
    {
        if ($middleware) {
            $middleware = Container::getInstance()->make($middleware);
            $response = $middleware->process($query, $this);
            return $response;
        }
    }
}
