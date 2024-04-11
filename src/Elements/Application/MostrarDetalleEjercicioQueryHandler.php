<?php

namespace Src\Elements\Application;

class MostrarDetalleEjercicioQueryHandler
{
    public function __construct()
    {
    }

    public function run(MostrarDetalleEjercicioQuery $query)
    {
        return             [
            'id' => 1,
            'name' => 'Straddle planche',
            'category' => 'Fuerza',
            'difficulty' => 'A',
            'imageUrl' => '/ejercicios/fuerza/straddle.jpeg',
            'video' => '/ejercicios/fuerza/straddle.mp4',
        ];
    }
}
