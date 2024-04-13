<?php

namespace Src\Elements\Application;

class ListarEjerciciosDeCategoriaQueryHandler
{
    public function __construct()
    {
    }

    public function run(ListarEjerciciosDeCategoriaQuery $query)
    {
        return [
            [
                'id' => 1,
                'name' => 'Infernal',
                'category' => 'Fuerza',
                'difficulty' => 'A',
                'imageUrl' => '/ejercicios/fuerza/straddle.jpeg',
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
        ];
    }
}
