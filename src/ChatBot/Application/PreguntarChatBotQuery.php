<?php

namespace Src\ChatBot\Application;

class PreguntarChatBotQuery
{
    public function __construct(
        private readonly string $pregunta
    ) {
    }

    public function pregunta(): string
    {
        return $this->pregunta;
    }
}
