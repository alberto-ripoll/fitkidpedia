<?php

namespace Src\Auth\Domain\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Src\Auth\Domain\Exception\UsuarioNoActivadoException;

class UsuarioActivadoMiddleware
{
    public const NAME = 'usuario-activado';

    public function handle(Request $request, Closure $next)
    {
        $usuarioLogeado = Auth::user();
        if (!$usuarioLogeado->estado) {
            $request->session()->invalidate();
            $request->session()->regenerateToken();

            Auth::guard('api')->logout();
            throw UsuarioNoActivadoException::create();
        }

        return $next($request);
    }
}
