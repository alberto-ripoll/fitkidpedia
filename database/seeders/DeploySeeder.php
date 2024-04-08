<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Database\Seeders\Deploy\RoleSeeder;
use Database\Seeders\Deploy\ZonaSeeder;
use Database\Seeders\Deploy\ClaseSeeder;
use Database\Seeders\Deploy\EquipoSeeder;
use Src\Shared\Core\ValueObject\Uuid\UuidValue;
use Database\Seeders\Deploy\AdministradorSeeder;
use Src\Shared\Core\ValueObject\Fecha\FechaValue;
use Database\Seeders\Deploy\UsuariosMinimosSeeder;
use Src\Shared\Dao\Pago\Infrastructure\Eloquent\PagoEloquentModel;
use Src\Shared\Dao\Usuario\Infrastructure\Eloquent\UsuarioEloquentModel;
use Src\Shared\Dao\UsuarioDeportista\Infrastructure\Eloquent\UsuarioDeportistaEloquentModel;
use Src\Shared\Dao\UsuarioMensualidadesPagadas\Infrastructure\Eloquent\UsuarioMensualidadesPagadasModel;

class DeploySeeder extends Seeder
{

    public function run(): void
    {
        DB::beginTransaction();
        $this->call(RoleSeeder::class);
        $this->call(ZonaSeeder::class);
        $this->call(EquipoSeeder::class);
        $this->call(AdministradorSeeder::class);
        $this->call(UsuariosMinimosSeeder::class);
        $this->call(ClaseSeeder::class);



        UsuarioMensualidadesPagadasModel::factory([
            'id' => UuidValue::create()->uuid(),
            'fk_usuario_id' => UsuarioDeportistaEloquentModel::first()->id,
            'cantidad' => 10,
            'fecha' => FechaValue::ahora()->__toString(),
            'tipo' => 'Efectivo',
        ])->create();

        PagoEloquentModel::factory([
            'precio_deportista' => 70,
            'precio_total' => 100,
            'nombre' => 'Lotería',
            'tipo' => 'Otro',
        ])->create();

        DB::commit();
    }
}
