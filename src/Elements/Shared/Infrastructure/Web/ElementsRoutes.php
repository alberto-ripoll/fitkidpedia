<?php

namespace Src\Elements\Shared\Infrastructure\Web;

use Illuminate\Support\Facades\Route;
use Src\Shared\Core\Routes\ApiBaseRoutes;

class ElementsRoutes extends ApiBaseRoutes
{
    protected static string $prefix = '/api/ejercicios';

    public static function configure(): void
    {
        Route::prefix(self::$prefix)
            ->group(function () {
                Route::get('/{category}', [ElementsController::class, 'index']);
                Route::get('/elemento/{exercise}', [ElementsController::class, 'show']);
                Route::get('/relacionados/{exercise}', [ElementsController::class, 'index']);
            });
    }
}
