<?php

namespace Src\Shared\Core\Bus\CommandBus\Domain\Middleware;

use Src\Shared\Core\Bus\CommandBus\Infrastructure\CommandBusFacade;
use Exception;
use Error;
use Throwable;

class EncoladoMiddleware
{
    private static $isRunning = false;
    private static $buses = [];

    public function __construct()
    {
    }

    public function process($command, $handler)
    {
        try {
            if (self::$isRunning) {
                self::$buses[] = $command;
                return;
            }

            self::$isRunning = true;
            //self::$ejecutadoEn = date('Y-m-d H:i:s');
            //self::$comandoEnCurso = $command;

            $result =  $handler->handle($command);
            self::$isRunning = false;
            $this->siguiente();
            return $result;
        } catch (Exception $err) {
            $this->lanzarExcepcion($err);
        } catch (Error $err) {
            $this->lanzarExcepcion($err);
        } catch (Throwable $err) {
            $this->lanzarExcepcion($err);
        }
    }

    public function siguiente()
    {
        $command = array_shift(self::$buses);
        if ($command) {
            CommandBusFacade::process($command);
        }
    }

    private function lanzarExcepcion($err)
    {
        self::$isRunning = false;
        self::$buses = [];
        throw $err;
    }
}
