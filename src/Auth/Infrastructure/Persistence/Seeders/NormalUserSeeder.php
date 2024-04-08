<?php

namespace Src\Auth\Infrastructure\Persistence\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Src\Auth\Infrastructure\Persistence\User;
use Src\Shared\ValueObject\Shared\UuidValue\Domain\Entity\UuidValue;

class NormalUserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $user = User::updateOrCreate(
            [
                'email' => 'user@zataca.com',
            ],
            [
                'nombre_completo' => 'Normal User',
                'nombre' => 'Normal',
                'apellido_primero' => 'User',
                'apellido_segundo' => 'Zataca',
                'email' => 'user@zataca.com',
                'telefono' => '123456789',
                'id' => UuidValue::create()->uuid(),
                'password' => Hash::make(config('app.super_admin_password')),
                'testing' => true
            ]
        );

        $user->assignRole('user');
    }
}
