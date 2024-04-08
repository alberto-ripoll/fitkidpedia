<?php

namespace Src\Auth\Domain\Specification;

use Zataca\Hydrator\Criteria;
use Zataca\Hydrator\Specification;

class UsuarioPorTelefonoSpecitification extends Specification
{
    public function __construct(protected string $phoneNumber)
    {
        $this->phoneNumber = $phoneNumber;
    }
    public function getCriteria(?Criteria $criteria = null): Criteria
    {
        $criteria = $this->createCriteria($criteria);
        $criteria->where('telefono', $this->phoneNumber);


        return $criteria;
    }

    public function isSatisfiedBy($entity): bool
    {
        if ($entity->phoneNumber === $this->phoneNumber) {
            return true;
        }

        return false;
    }
}
