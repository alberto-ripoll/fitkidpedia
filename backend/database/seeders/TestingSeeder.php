<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Database\Seeders\Deploy\RoleSeeder;
use Src\Shared\Dao\Rol\Infrastructure\Eloquent\RolEloquentModel;
use Src\Shared\Dao\Zona\Infrastructure\Eloquent\ZonaEloquentModel;
use Src\Shared\Dao\Clase\Infrastructure\Eloquent\ClaseEloquentModel;
use Src\Shared\Dao\Equipo\Infrastructure\Eloquent\EquipoEloquentModel;
use Src\Shared\Dao\Usuario\Infrastructure\Eloquent\UsuarioEloquentModel;
use Src\Shared\Dao\Usuario\Infrastructure\Eloquent\UsuarioEloquentFactory;
use Src\Shared\Dao\UsuarioDeportista\Infrastructure\Eloquent\UsuarioDeportistaEloquentModel;

class TestingSeeder extends Seeder
{
    public function run(): void
    {
        $this->call(TruncateAllTablesSeeder::class);
        $this->call(RoleSeeder::class);
    }
}
