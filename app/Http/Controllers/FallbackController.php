<?php

namespace App\Http\Controllers;

class FallbackController extends Controller
{
    public function __invoke()
    {
        return response()->json(['message' => 'Página no encontrada, si el error persiste contacte con el administrador'], 404);
    }
}
