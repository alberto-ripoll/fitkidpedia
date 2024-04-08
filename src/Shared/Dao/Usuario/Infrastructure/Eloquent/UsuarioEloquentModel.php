<?php

declare(strict_types=1);

namespace Src\Shared\Dao\Usuario\Infrastructure\Eloquent;

use App\Models\User;
use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Src\Shared\Dao\UsuarioDeportista\Infrastructure\Eloquent\UsuarioDeportistaEloquentModel;

class UsuarioEloquentModel extends User
{
    use HasFactory;
    use HasUuids;

    protected $table = 'usuarios';

    protected static function newFactory()
    {
        return UsuarioEloquentFactory::new();
    }
}
