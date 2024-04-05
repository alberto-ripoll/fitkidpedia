<?php

namespace Src\Shared\Core\Foundation\BaseRepository;

use Zataca\Hydrator\Criteria;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\DB;
use Zataca\Hydrator\HydratorTrait;
use Illuminate\Database\Query\Builder;
use Illuminate\Database\Eloquent\Model;
use Zataca\Hydrator\CriteriaEloquentModel;
use Illuminate\Database\Eloquent\Collection as EloquentCollection;

/**
 * @SuppressWarnings(PHPMD.NumberOfChildren)
 */
abstract class BaseRepository
{
    use HydratorTrait;

    protected $with = false;
    protected string $modelClass;
    protected $model = null;
    private $criteriaModel = null;

    public function __construct()
    {
        $this->model = new $this->modelClass();
    }

    public function nextValId(?Model $model = null): int
    {
        $sourceModel = $this->model;
        if ($model) {
            $sourceModel = $model;
        }
        $seq = $sourceModel->getTable() . '_id_seq';
        $query = DB::select("select nextval('$seq'::regclass)");
        return $query[0]->nextval;
    }

    public function getModel(Criteria $criteria): ?Model
    {
        $result = $this->applyCriteria($criteria);

        return $result->first();
    }

    public function getModelCollection(Criteria $criteria): EloquentCollection
    {
        $result = $this->applyCriteria($criteria);

        return $result->get();
    }

    public function getRow(Criteria $criteria): ?array
    {
        $result = $this->applyCriteria($criteria);
        $result = $result->first();
        if ($result) {
            return $result->toArray();
        }

        return $result;
    }

    public function getArray(Criteria $criteria): Collection
    {
        $result = $this->applyCriteria($criteria);
        $result = $result->get();
        if ($result) {
            return new Collection($result->toArray());
        }

        return new Collection();
    }

    public function datagrid(Criteria $criteria): Builder
    {
        $builder = $this->applyCriteria($criteria)->getQuery();

        return $builder;
    }

    public function toSql(Criteria $criteria)
    {
        $result = $this->applyCriteria($criteria);
        dd($result->toSql());
    }

    private function applyCriteria(Criteria $criteria)
    {
        if ($this->with) {
            $criteria->with($this->with);
        }

        if (!$this->criteriaModel) {
            $this->criteriaModel = new CriteriaEloquentModel($this->model);
        }

        $result = $this->criteriaModel->apply($criteria);
        return $result;
    }

    // abstract public function getCollection(Criteria $criteria): BaseCollection;
    // abstract public function getEntity(Criteria $criteria): BaseEntity;
}
