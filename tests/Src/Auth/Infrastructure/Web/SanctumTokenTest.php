<?php

namespace Tests\Src\Usuario\Infrastructure\Web;

use Tests\TestCase;
use Laravel\Sanctum\Sanctum;
use Laravel\Sanctum\PersonalAccessToken;
use Src\Auth\Infrastructure\Web\AuthRoutes;
use Src\Shared\Dao\Usuario\Infrastructure\Eloquent\UsuarioEloquentModel;

class SanctumTokenTest extends TestCase
{
    protected function setUp(): void
    {
        parent::setUp();
    }

    /** @test */
    function devuelve_200_cuando_un_usuario_crea_un_token_sanctum()
    {
        $user = UsuarioEloquentModel::factory()->create();

        $loginRequest = [
            'identity' => $user->nombre_usuario,
            'password' => 'password',
            'device_name' => $user->nombre_usuario
        ];

        $response = $this->post(AuthRoutes::getSanctumTokenEndpoint(), $loginRequest);

        $response->assertJsonStructure([
            'data' => []
        ]);

        $token = UsuarioEloquentModel::with('tokens')->find($user->id)->tokens()->first();

        $responseToken = $response->json()['data'];

        $this->assertEquals($token->name, $user->nombre_usuario);
        $this->assertEquals(PersonalAccessToken::findToken($responseToken), $token);
        $this->assertEquals($token->abilities, ['*']);
    }

    /** @test */
    function un_usuario_puede_acceder_a_las_rutas_bajo_autentificacion_sanctum_con_api_token()
    {
        UsuarioEloquentModel::factory(3)->create();

        Sanctum::actingAs(UsuarioEloquentModel::first(), ['*']);

        $response = $this->get('/api/usuarios/clientes');

        $response->assertStatus(200);
    }


    /** @test */
    // function un_usuario_puede_acceder_a_las_rutas_bajo_autentificacion_sanctum_mediante_login_web()
    // {
    //     $this->markTestSkipped("Implementar si es necesario");
    //     User::factory(3)->create();

    //     $response = $this->actingAs(User::find(1))->get('/api/usuarios');

    //     $this->assertCount(4, $response->json());
    // }

    // /** @test */
    // function devuelve_la_lista_de_tokens_del_usuario()
    // {
    //     $this->markTestSkipped("Implementar si es necesario");
    //     $user = User::factory()->create();

    //     $token1 = $user->createToken('token 1');
    //     $token2 = $user->createToken('token 2');

    //     // dd($token1->accessToken->toArray());
    //     Sanctum::actingAs($user, ['*']);

    //     $response = $this->get(route('token.index'));
    //     // $response = $this->get('/api/sanctum/tokens');

    //     $response->assertOk()
    //         ->assertJson([
    //             'data' => [
    //                 $token2->accessToken->toArray(),
    //                 $token1->accessToken->toArray(),
    //             ]
    //         ]);
    // }

    // /** @test */
    // function devuelve_200_cuando_un_usuario_elimina_un_token()
    // {
    //     $this->markTestSkipped("Implementar si es necesario");
    //     $user = User::factory()->create();

    //     $user->createToken('token 1');

    //     Sanctum::actingAs($user, ['*']);

    //     $response = $this->delete(route('token.delete', 'token 1'));

    //     $response->assertOk()
    //         ->assertJson([
    //             'data' => 'El token ha sido eliminado con éxito.',
    //             'status' => 200
    //         ]);
    // }

    // /** @test */
    // function devuelve_404_cuando_un_usuario_intenta_eliminar_un_token_que_no_existe()
    // {
    //     $this->markTestSkipped("Implementar si es necesario");
    //     $user = User::factory()->create();

    //     $user->createToken('token 1');

    //     Sanctum::actingAs($user, ['*']);

    //     $response = $this->delete(route('token.delete', 'token inventado'));

    //     $response->assertNotFound()
    //         ->assertJson([
    //             'errors' => [['mensaje' => 'El recurso no ha sido encontrado']],
    //             'status' => 404
    //         ]);
    // }

    // /** @test */
    // function devuelve_404_cuando_un_usuario_intenta_eliminar_el_token_de_otro_usuario()
    // {
    //     $this->markTestSkipped("Implementar si es necesario");
    //     $user = User::factory()->create();

    //     $user->createToken('token 1');

    //     $user2 = User::factory()->create();

    //     $user2->createToken('token usuario 2');

    //     Sanctum::actingAs($user, ['*']);

    //     $response = $this->delete(route('token.delete', 'token usuario 2'));

    //     $response->assertNotFound()
    //         ->assertJson([
    //             'errors' => [['mensaje' => 'El recurso no ha sido encontrado']],
    //             'status' => 404
    //         ]);
    // }
}
