<?php

namespace Database\Seeders\Deploy;

use Illuminate\Database\Seeder;
use Src\Shared\Dao\Rol\Domain\RolesConstants;
use Src\Shared\Dao\Rol\Infrastructure\Eloquent\RolEloquentModel;

class RoleSeeder extends Seeder
{
    public function run(): void
    {
        RolEloquentModel::firstOrCreate(['name' => RolesConstants::ADMIN]);
    }
}
