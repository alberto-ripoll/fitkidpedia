<?php

declare(strict_types=1);

namespace Src\Shared\Dao\Usuario\Infrastructure\Eloquent;

use Illuminate\Support\Facades\Hash;
use Src\Shared\Core\ValueObject\Uuid\UuidValue;
use Illuminate\Database\Eloquent\Factories\Factory;

class UsuarioEloquentFactory extends Factory
{
    protected $model = UsuarioEloquentModel::class;

    /**
     * Define the model's default state.
     * @return array
     */
    public function definition()
    {
        return [
            'id' => UuidValue::create()->uuid(),
            'nombre' => $this->faker->name(),
            'telefono' => $this->faker->phoneNumber(),
            'nombre_usuario' => $this->faker->userName(),
            'password' => Hash::make('password'),
        ];
    }
}
