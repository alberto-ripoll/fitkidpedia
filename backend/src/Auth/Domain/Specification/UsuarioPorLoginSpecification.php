<?php

namespace Src\Auth\Domain\Specification;

use Zataca\Hydrator\Criteria;
use Zataca\Hydrator\Specification;

class UsuarioPorLoginSpecification extends Specification
{
    public function __construct(protected string $email, protected string $phoneNumber)
    {
        $this->email = $email;
        $this->phoneNumber = $phoneNumber;
    }

    public function getCriteria(?Criteria $criteria = null): Criteria
    {
        $criteria = $this->createCriteria($criteria);
        $criteria->where('nombre_usuario', $this->email);
        $criteria->orWhere('telefono', $this->phoneNumber);

        return $criteria;
    }

    public function isSatisfiedBy($entity): bool
    {
        if ($entity->email === $this->email || $entity->phoneNumber === $this->phoneNumber) {
            return true;
        }

        return false;
    }
}
