<?php

namespace Src\ChatBot\Domain;

interface ChatBotRepositoryInterface
{
    public function ask(string $pregunta): string;
}
