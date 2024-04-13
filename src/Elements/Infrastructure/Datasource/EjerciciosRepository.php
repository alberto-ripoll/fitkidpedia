<?php

namespace Src\Elements\Infrastructure\Datasource;

use Illuminate\Support\Facades\DB;
use Src\Elements\Domain\EjerciciosRepositoryInterface;

class EjerciciosRepository implements EjerciciosRepositoryInterface
{
    public function withCategory(string $category): array
    {
        return DB::table('ejercicios')->where('tipo', $category)->get()->toArray();
    }

    public function search(string $query): array
    {
        return DB::table('ejercicios')->where('name', 'like', "%$query%")->get()->toArray();
    }

    public function all(): array
    {
        return DB::table('ejercicios')->get()->toArray();
    }

    public function find(string $name): array
    {
        return DB::table('ejercicios')->where('id', $name)->get()->toArray()[0];
    }
}
