<?php

namespace Src\Auth\Infrastructure\Web;

use Src\Shared\Core\Routes\ApiBaseRoutes;
use Illuminate\Support\Facades\Route;
use Src\Auth\Domain\Middleware\UsuarioActivadoMiddleware;

class AuthRoutes extends ApiBaseRoutes
{
    public static string $prefix = '/api';

    public static function configure(): void
    {
        Route::prefix(self::$prefix)
            ->group(function () {
                Route::get('/user', [LoginController::class, 'self']);
                Route::post('/login', [LoginController::class, 'login'])->middleware('throttle: 10,1')->withoutMiddleware(['auth:sanctum', UsuarioActivadoMiddleware::NAME]);
                Route::post('/logout', [LoginController::class, 'logout']);
            });

        Route::prefix(self::$prefix)
            ->group(function () {
                Route::post('/sanctum/token', [LoginController::class, 'loginMobile'])->withoutMiddleware(['auth:sanctum']);
            });
    }

    public static function getEndPoint(): string
    {
        return self::$prefix;
    }

    public static function getSanctumTokenEndpoint(): string
    {
        return self::$prefix . '/sanctum/token';
    }
}
