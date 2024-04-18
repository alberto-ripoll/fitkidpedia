<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Src\Auth\Infrastructure\AuthRegisterBindings;
use Src\ChatBot\Infrastructure\Bindings\ChatBotBindings;
use Src\Elements\Infrastructure\Bindings\EjerciciosBindings;

class RegisterBindingsServiceProvider extends ServiceProvider
{
    /**
     * Seguir orden alfabético para facilitar encontrar los módulos
     *
     * @var array
     */
    protected $packagesBindingsRegister = [
        EjerciciosBindings::class,
        ChatBotBindings::class,
        AuthRegisterBindings::class,
    ];
    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
        foreach ($this->packagesBindingsRegister as $packageRegister) {
            $register = new $packageRegister($this->app);
            $register->register();
        }
    }

    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }
}
