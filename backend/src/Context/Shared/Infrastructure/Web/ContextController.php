<?php

namespace Src\Context\Shared\Infrastructure\Web;

use App\Http\Controllers\Controller;
use Src\Shared\Core\Foundation\Http\ApiResponse;
use Src\Shared\Core\Bus\QueryBus\Infrastructure\QueryBusFacade;
use Src\Shared\Core\Bus\CommandBus\Infrastructure\CommandBusFacade;

class ContextController extends Controller
{
    public function show()
    {
        return ApiResponse::json();
    }
}
