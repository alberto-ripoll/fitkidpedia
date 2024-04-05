<?php

namespace Src\Auth\Application;

use App\Models\User;
use Illuminate\Support\Facades\Auth;

class LoginMobileCommandHandler
{

    public function __construct()
    {
    }

    public function run(LoginMobileCommand $loginMobileCommand)
    {
        $user = User::where('nombre_usuario', $loginMobileCommand->identity)->first();

        if (Auth::attempt(['nombre_usuario' => strtolower($loginMobileCommand->identity), 'password' => $loginMobileCommand->password])) {
            return $user->createToken($loginMobileCommand->device_name)->plainTextToken;
        }

        return false;
    }
}
