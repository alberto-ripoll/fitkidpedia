<?php

declare(strict_types=1);

namespace Src\Shared\Dao\Zona\Infrastructure\Eloquent;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class ZonaEloquentModel extends Model
{
    use HasFactory;
    use HasUuids;

    protected $table = 'zonas';

    protected static function newFactory()
    {
        return ZonaEloquentFactory::new();
    }
}
