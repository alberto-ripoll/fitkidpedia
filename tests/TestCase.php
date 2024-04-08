<?php

namespace Tests;

use Illuminate\Support\Collection;
use Illuminate\Support\Facades\DB;
use Zataca\Hydrator\HydratorTrait;
use Illuminate\Foundation\Testing\WithFaker;
use PHPUnit\Framework\MockObject\MockObject;
use Illuminate\Foundation\Testing\DatabaseTransactions;
use Src\Shared\Core\Bus\Shared\Domain\Entity\EventDispatcher;
use Illuminate\Foundation\Testing\TestCase as BaseTestCase;

/**
 * @SuppressWarnings(PHPMD.NumberOfChildren)
 */
abstract class TestCase extends BaseTestCase
{
    use DatabaseTransactions;
    use CreatesApplication;
    use HydratorTrait;
    use WithFaker;

    protected function setUp(): void
    {
        EventDispatcher::clearAll();
        parent::setUp();
    }

    /**
     * Metodo para simular el paso del tiempo en un test
     * @param int $minutos Cantidad de minutos a viajar en el tiempo (positivo para el futuro, negativo para el pasado)
     */
    public function viajarEnElTiempo(int $minutos)
    {
        $this->travel($minutos)->minutes();
    }

    public function volverAlPresente()
    {
        $this->travelBack();
    }

    /**
     * Formatea un endpoint con los parametros pasados
     * @param string $url Endpoint a formatear
     */
    public function formatEndpoint($url, ...$parametros)
    {
        $patron = '/{[^}]+}/';
        $i = 0;
        $endPoint = preg_replace_callback($patron, function () use ($parametros, &$i) {
            $valor = isset($parametros[$i]) ? $parametros[$i] : '';
            $i++;
            return $valor;
        }, $url);
        return $endPoint;
    }

    protected function deberiaLlamarAlMetodoDelRepositorio(MockObject $repository, $nombreMetodo = 'persistir', int $veces = 1, mixed $args = null): void
    {
        if ($args) {
            $repository->expects(self::exactly($veces))->method($nombreMetodo)->with($args);
        } else {
            $repository->expects(self::exactly($veces))->method($nombreMetodo);
        }
    }

    protected function shouldSave(MockObject $repository, $nombreMetodo = 'persistir'): void
    {
        $repository->expects(self::once())->method($nombreMetodo);
    }

    protected function shouldSearch(MockObject $repository, $entity, $nombreMetodo = 'getEntity',): void
    {
        $repository->expects(self::once())->method($nombreMetodo)->willReturn($entity);
    }

    public function getTodosLosPermisos(): Collection
    {
        return DB::table('permissions')->get()->pluck('name');
    }
}
