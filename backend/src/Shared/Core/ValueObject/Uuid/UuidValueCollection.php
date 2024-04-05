<?php

namespace Src\Shared\Core\ValueObject\Uuid;

use Zataca\Hydrator\BaseCollection;

class UuidValueCollection extends BaseCollection
{
    protected $type = UuidValue::class;

    public function toArray(): array
    {
        $ids = [];

        $this->foreach(function (UuidValue $item) use (&$ids) {
            $ids[] = $item->uuid();
        });

        return $ids;
    }
}
