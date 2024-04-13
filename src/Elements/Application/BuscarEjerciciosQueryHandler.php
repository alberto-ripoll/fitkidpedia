<?php

namespace Src\Elements\Application;

class BuscarEjerciciosQueryHandler
{
    public function __construct()
    {
    }

    public function run(BuscarEjerciciosQuery $query)
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
            ]
        ];
    }
}
