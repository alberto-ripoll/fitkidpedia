<?php

namespace Src\Shared\Core\Bus\Shared\Domain\Entity;

use Throwable;

class EventDispatcher
{
    private static $events = [];
    public static function publish($event)
    {
        self::$events[] = $event;
    }
    public static function dispatch()
    {
        try {
            $events = self::$events;
            self::clearAll();
            foreach ($events as $event) {
                event($event);
            }
            self::clearAll();
        } catch (Throwable $e) {
            self::clearAll();
            throw $e;
        }
    }

    public static function clearAll()
    {
        self::$events = [];
    }

    public static function getAll()
    {
        return self::$events;
    }
}
