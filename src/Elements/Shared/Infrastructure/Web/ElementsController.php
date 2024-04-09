<?php

namespace Src\Elements\Shared\Infrastructure\Web;

use App\Http\Controllers\Controller;
use Src\Shared\Core\Foundation\Http\ApiResponse;

class ElementsController extends Controller
{
    public function index()
    {
        return ApiResponse::json([
            [
                'id' => 1,
                'name' => 'Mastepanova',
                'category' => 'Flexiblidad',
                'difficulty' => 'A',
                'imageUrl' => 'https://via.placeholder.com/150',
            ],
            [
                'id' => 1,
                'name' => 'Mastepanova',
                'category' => 'Flexiblidad',
                'difficulty' => 'A',
                'imageUrl' => 'https://via.placeholder.com/150',
            ],   [
                'id' => 1,
                'name' => 'Mastepanova',
                'category' => 'Flexiblidad',
                'difficulty' => 'A',
                'imageUrl' => 'https://via.placeholder.com/150',
            ],   [
                'id' => 1,
                'name' => 'Mastepanova',
                'category' => 'Flexiblidad',
                'difficulty' => 'A',
                'imageUrl' => 'https://via.placeholder.com/150',
            ],   [
                'id' => 1,
                'name' => 'Mastepanova',
                'category' => 'Flexiblidad',
                'difficulty' => 'A',
                'imageUrl' => 'https://via.placeholder.com/150',
            ],   [
                'id' => 1,
                'name' => 'Mastepanova',
                'category' => 'Flexiblidad',
                'difficulty' => 'A',
                'imageUrl' => 'https://via.placeholder.com/150',
            ],
        ]);
    }

    public function show()
    {
        return ApiResponse::json(
            [
                'id' => 1,
                'name' => 'Mastepanova',
                'category' => 'Acrobacias',
                'difficulty' => 'A',
                'imageUrl' => 'https://via.placeholder.com/150',
            ],
        );
    }
}
