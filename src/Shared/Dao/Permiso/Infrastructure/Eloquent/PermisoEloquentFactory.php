<?php

declare(strict_types=1);

namespace Src\Shared\Dao\Permiso\Infrastructure\Eloquent;

use Illuminate\Database\Eloquent\Factories\Factory;

class PermisoEloquentFactory extends Factory
{
    protected $model = PermisoEloquentModel::class;

    /**
     * Define the model's default state.
     * @return array
     */
    public function definition()
    {
        return [];
    }
}
