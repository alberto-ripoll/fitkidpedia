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
            'name' => 'Infernal',
            'category' => 'Fuerza',
            'difficulty' => 'A',
            'imageUrl' => '/ejercicios/fuerza/straddle.jpeg',
            'video' => '/ejercicios/fuerza/straddle.mp4',
            'descripcion' => 'Ejercicio de fuerza que consiste en mantener el cuerpo en posición de plancha con las piernas abiertas sin tocar el suelo.',
        ];
    }
}
