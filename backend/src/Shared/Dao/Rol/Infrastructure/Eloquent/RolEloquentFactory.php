<?php

declare(strict_types=1);

namespace Src\Shared\Dao\Rol\Infrastructure\Eloquent;

use Illuminate\Database\Eloquent\Factories\Factory;
use Src\Shared\Dao\Permiso\Infrastructure\Eloquent\PermisoEloquentModel;

class RolEloquentFactory extends Factory
{
    protected $model = RolEloquentModel::class;

    /**
     * Define the model's default state.
     * @return array
     */
    public function definition()
    {
        return [
            'id' => $this->faker->uuid(),
            'name' => $this->faker->word(),
            'guard_name' => 'api',
        ];
    }

    public function conPermisos(PermisoEloquentModel ...$permisos)
    {
        return $this->state(function () {
            return [];
        })->afterCreating(
            function (RolEloquentModel $role) use ($permisos) {
                foreach ($permisos as $permiso) {
                    $role->permissions()->attach($permiso);
                    $role->save();
                }
            }
        );
    }
}
