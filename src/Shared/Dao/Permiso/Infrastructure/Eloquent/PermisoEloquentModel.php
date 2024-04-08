<?php

declare(strict_types=1);

namespace Src\Shared\Dao\Permiso\Infrastructure\Eloquent;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Spatie\Permission\Models\Permission as PermissionSpatie;

class PermisoEloquentModel extends PermissionSpatie
{
    use HasUuids;
    use HasFactory;

    protected static function newFactory()
    {
        return PermisoEloquentFactory::new();
    }
}
