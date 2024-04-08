<?php

namespace Src\Shared\Core\ValueObject\Uuid;

use JsonSerializable;
use Illuminate\Support\Str;

/**
 * @SuppressWarnings(PHPMD.NumberOfChildren)
 */
class UuidValue implements JsonSerializable
{
    public function __construct(private string $id)
    {
        if (!str($id)->isUuid()) {
            throw UuidInvalidoException::porUuid($id);
        }
    }

    public static function create(): self
    {
        return new self(Str::uuid());
    }
    public function __toString()
    {
        return $this->id;
    }

    public function uuid(): string
    {
        return $this->id;
    }

    public function jsonSerialize(): mixed
    {
        return $this->id;
    }
    public function value(): mixed
    {
        return $this->id;
    }
}
