<?php

namespace Src\Auth\Infrastructure\Persistence\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Src\Auth\Infrastructure\Persistence\User;
use Src\Shared\ValueObject\Shared\UuidValue\Domain\Entity\UuidValue;

class AdminUserSeeder extends Seeder
{
    public const ADMIN_ROL = 'administrador';
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $admin = User::updateOrCreate(
            [
                'email' => 'superadmin@zataca.com',
            ],
            [
                'nombre_completo' => 'SuperAdmin',
                'nombre' => 'Super',
                'apellido_primero' => 'Admin',
                'apellido_segundo' => 'Zataca',
                'email' => 'superadmin@zataca.com',
                'telefono' => '661637458',
                'apichat_doctor_code' => json_encode([['code' => 'ADMIN']]),
                'id' => UuidValue::create()->uuid(),
                'password' => Hash::make(config('app.super_admin_password')),
                'testing' => true
            ]
        );

        $admin->assignRole(self::ADMIN_ROL);
        $admin->assignRole('user');
    }
}
