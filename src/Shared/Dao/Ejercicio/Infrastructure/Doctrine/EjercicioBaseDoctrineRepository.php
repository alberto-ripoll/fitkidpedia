<?php

namespace Src\Shared\Dao\Ejercicio\Infrastructure\Doctrine;

use Doctrine\ORM\EntityRepository;

class EjercicioBaseDoctrineRepository extends EntityRepository
{

    public function findEjerciciosByDifficulty($difficulty)
    {
        return $this->createQueryBuilder('e')
            ->where('e.difficulty = :difficulty')
            ->setParameter('difficulty', $difficulty)
            ->getQuery()
            ->getResult();
    }
}
