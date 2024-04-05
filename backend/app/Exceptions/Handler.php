<?php

namespace App\Exceptions;

use Throwable;
use Src\Shared\Core\Foundation\Http\ApiResponse;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Src\Shared\Exceptions\PermisosInsuficientesException;
use Illuminate\Foundation\Exceptions\Handler as ExceptionHandler;

class Handler extends ExceptionHandler
{
    /**
     * The list of the inputs that are never flashed to the session on validation exceptions.
     *
     * @var array<int, string>
     */
    protected $dontFlash = [
        'current_password',
        'password',
        'password_confirmation',
    ];

    /**
     * Render an exception into an HTTP response.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Throwable  $exception
     * @return \Symfony\Component\HttpFoundation\Response
     *
     * @throws \Throwable
     */
    public function render($request, Throwable $exception)
    {
        if ($exception instanceof ModelNotFoundException) {
            return ApiResponse::json(null, ApiResponse::ESTADO_404_RECURSO_NO_ENCONTRADO, [['mensaje' => 'El recurso no ha sido encontrado']]);
        }

        // Excepciones de Dominio
        if (
            'Src' === explode('\\', get_class($exception))[0] ||
            'Shared' === explode('\\', get_class($exception))[0]
        ) {
            if (0 !== $exception->getCode()) {
                return ApiResponse::json(null, $exception->getCode(), [['mensaje' => $exception->getMessage()]]);
            } else {
                // Por defecto, las excepciones de domino devuelven 400.
                return ApiResponse::json(null, ApiResponse::ESTADO_400_ERROR, [['mensaje' => $exception->getMessage()]]);
            }
        }

        return ApiResponse::json(null, 403, [['mensaje' => $exception->getMessage()]]);
    }

    /**
     * Register the exception handling callbacks for the application.
     */
    public function register(): void
    {
        $this->reportable(function (Throwable $e) {
            //
        });
    }
}
