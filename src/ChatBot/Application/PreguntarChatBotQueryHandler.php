<?php

namespace Src\ChatBot\Application;

use Src\ChatBot\Domain\ChatBotRepositoryInterface;

class PreguntarChatBotQueryHandler
{
    public function __construct(
        private readonly ChatBotRepositoryInterface $repository
    ) {
    }

    public function run(PreguntarChatBotQuery $query): string
    {
        $detalle = $this->repository->ask($query->pregunta());

        return $detalle;
    }
}
