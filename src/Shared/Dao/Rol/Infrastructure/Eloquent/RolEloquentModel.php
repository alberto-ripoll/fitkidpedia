<?php

declare(strict_types=1);

namespace Src\Shared\Dao\Rol\Infrastructure\Eloquent;

use Spatie\Permission\Models\Role as RoleSpatie;
use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class RolEloquentModel extends RoleSpatie
{
    use HasUuids;
    use HasFactory;

    protected $table = 'roles';

    protected static function newFactory()
    {
        return RolEloquentFactory::new();
    }
}
