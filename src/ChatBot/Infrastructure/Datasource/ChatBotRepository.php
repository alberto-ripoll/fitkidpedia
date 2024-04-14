<?php

namespace Src\ChatBot\Infrastructure\Datasource;

use Illuminate\Support\Facades\DB;
use Src\ChatBot\Domain\ChatBotRepositoryInterface;

class ChatBotRepository implements ChatBotRepositoryInterface
{
    public function ask(string $pregunta): string
    {
        return "jaja";
    }
}
