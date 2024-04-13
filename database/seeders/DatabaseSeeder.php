<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Src\Shared\Core\ValueObject\Uuid\UuidValue;

class DatabaseSeeder extends Seeder
{

    public function run(): void
    {
        DB::beginTransaction();

        $data = [
            [UuidValue::create()->uuid(), 'Lateral sin manos', '/ejercicios/lateral-sin-manos-quieta.png', '/ejercicios/lateral-sin-manos.MOV', '...', 'C', 'acrobacias'],
            [UuidValue::create()->uuid(), 'Paloma sin manos', '/ejercicios/paloma-sin-manos-quieta.png', '/ejercicios/paloma-sin-manos.MOV', '...', 'C', 'acrobacias'],
            [UuidValue::create()->uuid(), 'Flic flac', '/ejercicios/flic.png', '/ejercicios/flic.MOV', '...', 'C', 'acrobacias'],
            [UuidValue::create()->uuid(), 'Mortal carpado sin manos', '/ejercicios/paloma-sin-manos-quieta.png', '/ejercicios/carpado.MOV', '...', 'C', 'acrobacias'],
            [UuidValue::create()->uuid(), 'Infernal', '/ejercicios/infernal.jpeg', '/ejercicios/infernal.mp4', '...', 'H', 'fuerza'],
        ];

        foreach ($data as $row) {
            DB::insert(
                'insert into ejercicios (id, nombre, image, video, descripcion, dificultad, tipo) values (?, ?, ?, ?, ?, ?, ?)',
                $row
            );
        }

        DB::commit();
    }
}
