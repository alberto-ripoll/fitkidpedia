<?php

namespace Database\Seeders\Deploy;

use Illuminate\Database\Seeder;
use Src\Shared\Dao\Zona\Infrastructure\Eloquent\ZonaEloquentModel;
use Src\Shared\Dao\Clase\Infrastructure\Eloquent\ClaseEloquentModel;
use Src\Shared\Dao\Usuario\Infrastructure\Eloquent\UsuarioEloquentModel;

class EjerciciosSeeder extends Seeder
{
    public function run(): void
    {
        Ejercicio::factory([
            'nombre' => 'Acrobacias',
            'fk_zona_id' => ZonaEloquentModel::first()->id,
            'hora' => '16:30',
            'dias' => json_encode([['dia' => 'X']]),
            'fk_usuario_id' => UsuarioEloquentModel::first()->id,
        ])->create();
    }
}
