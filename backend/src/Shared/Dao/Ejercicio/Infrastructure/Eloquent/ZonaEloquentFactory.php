<?php

declare(strict_types=1);

namespace Src\Shared\Dao\Zona\Infrastructure\Eloquent;

use Src\Shared\Core\ValueObject\Uuid\UuidValue;
use Illuminate\Database\Eloquent\Factories\Factory;

class ZonaEloquentFactory extends Factory
{
    protected $model = ZonaEloquentModel::class;

    /**
     * Define the model's default state.
     * @return array
     */
    public function definition()
    {
        return [
            'id' => UuidValue::create()->uuid(),
            'nombre' => $this->faker->name(),
        ];
    }
}
