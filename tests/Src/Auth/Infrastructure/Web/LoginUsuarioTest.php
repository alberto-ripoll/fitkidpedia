<?php

namespace Tests\Src\Auth\Infrastructure\Web;

use Tests\TestCase;
use Zataca\Hydrator\HydratorTrait;
use Illuminate\Foundation\Testing\WithFaker;
use Src\Shared\Dao\Rol\Domain\RolesConstants;
use Src\Shared\Dao\Rol\Infrastructure\Eloquent\RolEloquentModel;
use Src\Shared\Dao\Usuario\Infrastructure\Eloquent\UsuarioEloquentModel;

/**
 * Tip: Verificar el status al final ya que si se ha producido un error 500 no te devolverá traza del error.
 * Se crea el grupo login ya que en la pipeline no se pueden resolver las peticiones Http.
 * @group login
 */
class LoginUsuarioTest extends TestCase
{
    use WithFaker;
    use HydratorTrait;

    private const EMAIL_SUPERADMIN_ZATACA = 'superadmin@zataca.com';

    protected function setUp(): void
    {
        parent::setUp();
    }

    protected function userModelToArray(UsuarioEloquentModel $user): array
    {
        return [
            'id' => $user->id,
            'email' => $user->email,
            'telefono' => $user->telefono,
            'nombre' => $user->nombre_completo,
            'description' => $user->description,
            'avatar' => $user->avatar,
        ];
    }

    /** @test*/
    function login_de_usuario_email()
    {
        $user = UsuarioEloquentModel::factory()->create()->assignRole(RolesConstants::ADMIN);
        $loginRequest = [
            'identity' => $user->nombre_usuario,
            'password' => 'password',
        ];

        $response = $this->post('api/login', $loginRequest);
        $response->assertStatus(200);
    }

    /** @test*/
    function user_despues_de_logear()
    {
        $user = UsuarioEloquentModel::factory()->create()->assignRole(RolesConstants::ADMIN);


        $response = $this->actingAs($user)->get('api/user');
        $response->assertStatus(200);
    }
    // /** @test*/
    // function login_de_usuario_telefono()
    // {
    //     $user = User::where('email', self::EMAIL_SUPERADMIN_ZATACA)->first();

    //     $loginRequest = [
    //         'identity' => $user->telefono, // phone_number
    //         'password' => 'password',
    //     ];

    //     $response = $this->post('api/login', $loginRequest);
    //     $response->assertJson([
    //         'data' => $this->userModelToArray($user)
    //     ]);

    //     $response->assertStatus(200);
    // }

    // /** @test*/
    // public function login_incorrecto()
    // {
    //     $user = User::where('email', self::EMAIL_SUPERADMIN_ZATACA)->first();

    //     $loginRequest = [
    //         'identity' => $user->email, // email o phone_number
    //         'password' => 'incorrecto',
    //     ];

    //     $response = $this->post('api/login', $loginRequest);
    //     $response->assertStatus(400);
    //     $response->assertJson([
    //         'errors' => [0 => ['mensaje' => 'El password no se corresponde con el del usuario.']]
    //     ]);
    // }


    //  /** @test*/
    // public function logout()
    // {
    //     $user = UserEloquentModel::where('email', self::EMAIL_SUPERADMIN_ZATACA)->first();
    //     $response = $this->actingAs($user)->post("api/logout");

    //     $this->assertEquals(200, $response->status());
    //     $this->assertEmpty($response->json());
    // }
}
