<?php

namespace Src\Elements\Infrastructure\Web;

use \Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Src\Shared\Core\Foundation\Http\ApiResponse;
use Src\ChatBot\Application\PreguntarChatBotQuery;
use Src\Elements\Application\BuscarEjerciciosQuery;
use Src\ChatBot\Application\PreguntarChatBotQueryHandler;
use Src\Elements\Application\BuscarEjerciciosQueryHandler;
use Src\Elements\Application\MostrarDetalleEjercicioQuery;
use Src\Elements\Application\ListarEjerciciosDeCategoriaQuery;
use Src\Elements\Application\ListarEjerciciosRelacionadosQuery;
use Src\Elements\Application\MostrarDetalleEjercicioQueryHandler;
use Src\Elements\Application\ListarEjerciciosDeCategoriaQueryHandler;
use Src\Elements\Application\ListarEjerciciosRelacionadosQueryHandler;

class ElementsController extends Controller
{

    public function __construct(
        public readonly BuscarEjerciciosQueryHandler $buscarEjerciciosQueryHandler,
        public readonly ListarEjerciciosDeCategoriaQueryHandler $listarEjerciciosDeCategoriaQueryHandler,
        public readonly ListarEjerciciosRelacionadosQueryHandler $listarEjerciciosRelacionadosQueryHandler,
        public readonly MostrarDetalleEjercicioQueryHandler $mostrarDetalleEjercicioQueryHandler,
        public readonly PreguntarChatBotQueryHandler $preguntarChatBotQueryHandler,

    ) {
    }
    public function crear(Request $request)
    {
        $pregunta = $request->input('pregunta');
        $respuesta = $this->preguntarChatBotQueryHandler->run(new PreguntarChatBotQuery($pregunta));
        return ApiResponse::json($respuesta);
        return ApiResponse::json(['message' => 'Not implemented yet'], 200);
    }


    public function index(string $categoria)
    {
        $ejercicios = $this->listarEjerciciosDeCategoriaQueryHandler->run(new ListarEjerciciosDeCategoriaQuery($categoria));
        return ApiResponse::json($ejercicios);
    }

    public function show(string $id)
    {
        $ejercicio = $this->mostrarDetalleEjercicioQueryHandler->run(new MostrarDetalleEjercicioQuery($id));
        return ApiResponse::json($ejercicio);
    }

    public function buscarRelacionados(string $id)
    {
        $ejercicios = $this->listarEjerciciosRelacionadosQueryHandler->run(new ListarEjerciciosRelacionadosQuery($id));
        return ApiResponse::json($ejercicios);
    }

    public function search(string $query)
    {
        $ejercicios = $this->buscarEjerciciosQueryHandler->run(new BuscarEjerciciosQuery($query));
        return ApiResponse::json($ejercicios);
    }
}
