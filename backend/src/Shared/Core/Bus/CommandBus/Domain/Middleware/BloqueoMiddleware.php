<?php

namespace Src\Shared\Core\Bus\CommandBus\Domain\Middleware;

use Exception;
use Error;
use Throwable;

class BloqueoMiddleware
{
    private $creadoEn;
    private static $ejecutadoEn;
    private static $comandoEnCurso;
    private static $isRunning = false;

    public function __construct()
    {
        $this->creadoEn = date('Y-m-d H:i:s');
    }

    public function process($command, $handler)
    {
        try {
            $this->comprobarBloqueo($command);

            self::$isRunning = true;
            self::$ejecutadoEn = date('Y-m-d H:i:s');
            self::$comandoEnCurso = $command;
            $result = $handler->handle($command);
            $handler->handle($command);
            self::$isRunning = false;

            return $result;
        } catch (Exception $err) {
            $this->lanzarExcepcion($err);
        } catch (Error $err) {
            $this->lanzarExcepcion($err);
        } catch (Throwable $err) {
            $this->lanzarExcepcion($err);
        }
    }

    private function lanzarExcepcion($err)
    {
        self::$isRunning = false;
        throw $err;
    }

    private function comprobarBloqueo($command)
    {
        if (self::$isRunning) {
            //$this->cola[] = $command;
            $texto = '
                Command Bus is running
                creado el: %s,
                ejecutado el: %s,
                comando en curso: %s
                clase del comando: %s
                comando a ejecutar: %s
                comando a ejecutar: %s
                ';
            $mensaje = sprintf($texto, $this->creadoEn, self::$ejecutadoEn, get_class(self::$comandoEnCurso), json_encode(self::$comandoEnCurso), get_class($command), json_encode($command));
            throw new Exception($mensaje);
            //return ;
        }
    }
}
