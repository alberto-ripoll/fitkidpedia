<?php

namespace Src\Auth\Infrastructure\Persistence;

use Illuminate\Support\Str;
use Illuminate\Support\Facades\Hash;
use Illuminate\Database\Eloquent\Factories\Factory;

class UserFactory extends Factory
{
    protected $model = User::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        $doctor = $this->faker->doctor();

        return [
            'id' => Str::uuid(),
            'nombre_completo' => $doctor->nombreCompleto(),
            'nombre' => $doctor->nombre(),
            'apellido_primero' => $doctor->primerApellido(),
            'apellido_segundo' => $doctor->segundoApellido(),
            'email' => $doctor->email,
            'apichat_doctor_code' => json_encode($doctor->apichatDoctorCode),
            'password' => Hash::make('password'),
            'remember_token' => Str::random(10),
            'rocket_token' => Str::random(10),
            'bip_user_id' => Str::random(10),
            'telefono' => $doctor->telefono,
            'description' => $this->faker->sentence(),
            'avatar' => '/avatars/default.png',
            'gender' => $doctor->gender,
        ];
    }
}
