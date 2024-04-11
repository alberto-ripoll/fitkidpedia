<?php

namespace Src\Elements\Infrastructure\Web;

use App\Http\Controllers\Controller;
use Src\Shared\Core\Foundation\Http\ApiResponse;
use Src\Elements\Application\BuscarEjerciciosQuery;
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
        public readonly MostrarDetalleEjercicioQueryHandler $mostrarDetalleEjercicioQueryHandler
    ) {
    }

    public function index()
    {
        $ejercicios = $this->listarEjerciciosDeCategoriaQueryHandler->run(new ListarEjerciciosDeCategoriaQuery(''));
        return ApiResponse::json($ejercicios);
    }

    public function show()
    {
        $ejercicio = $this->mostrarDetalleEjercicioQueryHandler->run(new MostrarDetalleEjercicioQuery(''));
        return ApiResponse::json($ejercicio);
    }

    public function buscarRelacionados()
    {
        $ejercicios = $this->listarEjerciciosRelacionadosQueryHandler->run(new ListarEjerciciosRelacionadosQuery(''));
        return ApiResponse::json($ejercicios);
    }

    public function search()
    {
        $ejercicios = $this->buscarEjerciciosQueryHandler->run(new BuscarEjerciciosQuery(''));
        return ApiResponse::json($ejercicios);
    }
}
