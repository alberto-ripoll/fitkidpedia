<?php

namespace Src\Elements\Domain;

interface EjerciciosRepositoryInterface
{
    public function withCategory(string $category): array;
    public function search(string $query): array;

    public function all(): array;
    public function find(string $name): array;
}
