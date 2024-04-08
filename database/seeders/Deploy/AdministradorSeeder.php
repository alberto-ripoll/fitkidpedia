<?php

namespace Database\Seeders\Deploy;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Src\Shared\Dao\Rol\Domain\RolesConstants;
use Src\Shared\Dao\Zona\Infrastructure\Eloquent\ZonaEloquentModel;
use Src\Shared\Dao\Usuario\Infrastructure\Eloquent\UsuarioEloquentModel;

class AdministradorSeeder extends Seeder
{
    public function run(): void
    {
        UsuarioEloquentModel::factory([
            'nombre' => 'Alberto Ripoll',
            'nombre_usuario' => 'alberto',
            'password' => Hash::make('password'),
            'telefono' => '666666666',
        ])->create()
            ->assignRole(RolesConstants::ADMIN);
    }
}
