<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DatabaseSeeder extends Seeder
{

    public function run(): void
    {
        DB::beginTransaction();

        DB::insert(
            'insert into ejercicios (nombre, image, video, descripcion, dificultad, tipo) values (?, ?, ?, ?, ?, ?)',
            [
                ['Lateral sin manos', '/ejercicios/lateral-sin-manos-quieta.png', '/ejercicios/lateral-sin-manos.MOV', '...', 'C', 'acrobacias'],
                ['Paloma sin manos', '/ejercicios/paloma-sin-manos-quieta.png', '/ejercicios/paloma-sin-manos.MOV', '...', 'C', 'acrobacias'],
                ['Flic flac', '/ejercicios/flic.png', '/ejercicios/flic.MOV', '...', 'C', 'acrobacias'],
                ['Mortal carpado sin manos', '/ejercicios/paloma-sin-manos-quieta.png', '/ejercicios/carpado.MOV', '...', 'C', 'acrobacias'],
                ['Infernal', '/ejercicios/infernal.jpeg', '/ejercicios/infernal.mp4', '...', 'H', 'fuerza'],

            ]
        );

        DB::commit();
    }
}
