<?php

namespace Src\Elements\Application;

class ListarEjerciciosRelacionadosQueryHandler
{
    public function __construct()
    {
    }

    public function run(ListarEjerciciosRelacionadosQuery $query)
    {
        return [
            [
                'id' => 1,
                'name' => 'Straddle planche',
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
