<?php

namespace Src\Auth\Domain\Specification;

use Zataca\Hydrator\Criteria;
use Zataca\Hydrator\Specification;

class UsuarioPorEmailSpecification extends Specification
{
    public function __construct(protected string $email)
    {
        $this->email = $email;
    }
    public function getCriteria(?Criteria $criteria = null): Criteria
    {
        $criteria = $this->createCriteria($criteria);
        $criteria->where('email', $this->email);


        return $criteria;
    }

    public function isSatisfiedBy($entity): bool
    {
        if ($entity->email === $this->email) {
            return true;
        }

        return false;
    }
}
