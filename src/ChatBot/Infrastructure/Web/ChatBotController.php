<?php

namespace Src\ChatBot\Infrastructure\Web;

use App\Http\Controllers\Controller;
use Src\Shared\Core\Foundation\Http\ApiResponse;
use Src\ChatBot\Application\PreguntarChatBotQuery;
use Src\ChatBot\Application\PreguntarChatBotQueryHandler;

class ChatBotController extends Controller
{
    public function __construct(
        public readonly PreguntarChatBotQueryHandler $preguntarChatBotQueryHandler,
    ) {
    }

    public function ask($request)
    {
        $pregunta = $request->input('pregunta');
        return ApiResponse::json($pregunta, 200);

        $respuesta = $this->preguntarChatBotQueryHandler->run(new PreguntarChatBotQuery($pregunta));
        return ApiResponse::json($respuesta);
    }
}
