<?php

namespace Tests\Src\Context\Infrastructure\Web;

use Tests\TestCase;

class ContextApiTest extends TestCase
{
    protected function setUp(): void
    {
        parent::setUp();
    }

    /** @test*/
    function deberia_devolver_status_200()
    {
        $response = $this->get('/api/elementos/flexibilidad');

        $response->assertStatus(200);
        $response->assertJsonStructure([
            'data' => [
                'id',
                'nombre',
                'nombreUsuario',
                'avatar',
                'telefono',
                'cuotaMensual'
            ]
        ]);
    }
}
