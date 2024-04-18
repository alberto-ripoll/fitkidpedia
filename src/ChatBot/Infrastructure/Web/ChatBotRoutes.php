<?php

namespace Src\ChatBot\Infrastructure\Web;

use Illuminate\Support\Facades\Route;
use Src\Shared\Core\Routes\ApiBaseRoutes;

class ChatBotRoutes extends ApiBaseRoutes
{
    protected static string $prefix = '/api/chatbot/ask';

    public static function configure(): void
    {
        Route::prefix(self::$prefix)
            ->group(function () {
                Route::post('/', [ChatBotController::class, 'ask']);
            });
    }
}
