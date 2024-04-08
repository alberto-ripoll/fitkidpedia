<?php

namespace Src\Context\Shared\Infrastructure\Web;

use Illuminate\Support\Facades\Route;
use Src\Shared\Core\Routes\ApiBaseRoutes;

class ContextRoutes extends ApiBaseRoutes
{
    protected static string $prefix = '/api/elementos';

    public static function configure(): void
    {
        Route::prefix(self::$prefix)
            ->group(function () {
                Route::get('/flexibilidad', [ContextController::class, 'show']);
            });
    }
}
