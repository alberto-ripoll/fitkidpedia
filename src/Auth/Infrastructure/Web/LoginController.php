<?php

namespace Src\Auth\Infrastructure\Web;

use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Src\Shared\Core\Foundation\Http\ApiResponse;
use Src\Auth\Application\LoginMobileCommand;
use Illuminate\Validation\ValidationException;
use Src\Auth\Application\LoginMobileCommandHandler;
use Src\Auth\Application\UsuarioAutenticadoCommand;
use Src\Auth\Application\ValidarCredencialesCommand;
use Src\Auth\Application\UsuarioAutenticadoCommandHandler;
use Src\Auth\Application\ValidarCredencialesCommandHandler;

class LoginController extends Controller
{
    public function __construct(protected ValidarCredencialesCommandHandler $validarCredencialesCommandHandler, protected LoginMobileCommandHandler $loginMobileCommandHandler)
    {
    }

    public function loginMobile(MobileAuthenticateRequest $request)
    {
        $token = $this->loginMobileCommandHandler->run($this->hydrate(LoginMobileCommand::class, $request->validated()));

        return ApiResponse::json($token, ApiResponse::ESTADO_200_OK);
    }
    /**
     * Login
     */
    public function login(AuthenticateRequest $request)
    {
        $validarCredencialesDTO = $this->hydrate(ValidarCredencialesCommand::class, $request->validated());
        $validarCredencialesDTO->identity = strtolower($validarCredencialesDTO->identity);

        $user = $this->validarCredencialesCommandHandler->run($validarCredencialesDTO);

        return ApiResponse::json($user, ApiResponse::ESTADO_200_OK);
    }

    /**
     * Usuario logueado.
     *
     */
    public function self(UsuarioAutenticadoCommandHandler $usuarioAutenticadoCommandHandler)
    {
        $usuarioAutenticadoCommand = new UsuarioAutenticadoCommand(Auth::id());
        $user = $usuarioAutenticadoCommandHandler->run($usuarioAutenticadoCommand);

        return ApiResponse::json($user, ApiResponse::ESTADO_200_OK);
    }

    /**
     * Log the user out of the application.
     *
     * @return \Illuminate\Http\Response
     */
    public function logout(Request $request)
    {
        User::where('id', Auth::id())->tokens()->delete();

        Auth::guard('api')->logout();
        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return response([], 200);
    }
}
