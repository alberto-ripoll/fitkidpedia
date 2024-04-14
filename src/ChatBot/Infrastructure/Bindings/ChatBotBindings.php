<?php

namespace Src\ChatBot\Infrastructure\Bindings;

use Src\ChatBot\Domain\ChatBotRepositoryInterface;
use Src\ChatBot\Infrastructure\Datasource\ChatBotRepository;
use Src\Shared\Core\Foundation\Container\BaseRegisterBindings;

class ChatBotBindings extends BaseRegisterBindings
{
    protected function singletons(): array
    {
        return [
            ChatBotRepositoryInterface::class => ChatBotRepository::class,
        ];
    }
}
