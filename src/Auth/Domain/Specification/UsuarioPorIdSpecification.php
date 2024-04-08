<?php

namespace Src\Auth\Domain\Specification;

use Zataca\Hydrator\Criteria;
use Zataca\Hydrator\Specification;

class UsuarioPorIdSpecification extends Specification
{
    public function __construct(protected string $userId)
    {
        $this->userId = $userId;
    }
    public function getCriteria(?Criteria $criteria = null): Criteria
    {
        $criteria = $this->createCriteria($criteria);
        $criteria->where('id', $this->userId);


        return $criteria;
    }

    public function isSatisfiedBy($entity): bool
    {
        if ($entity->getId() === $this->userId) {
            return true;
        }

        return false;
    }
}
