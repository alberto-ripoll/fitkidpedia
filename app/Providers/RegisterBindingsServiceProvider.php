<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
// use Src\Auth\Infrastructure\AuthRegisterBindings;
// use Src\Administracion\Zonas\Infrastructure\Bindings\ZonaBindings;
// use Src\Administracion\Pagos\Infrastructure\Bindings\PagosBindings;
// use Src\Administracion\Clases\Infrastructure\Bindings\ClaseBindings;
// use Src\Administracion\Equipos\Infrastructure\Bindings\EquipoBindings;
// use Src\Shared\Dao\Rol\Infrastructure\Bindings\RolBaseRegisterBindings;
// use Src\Shared\Dao\Clase\Infrastructure\Bindings\ClasesRegisterBindings;
// use Src\Shared\Dao\Pago\Infrastructure\Bindings\PagoBaseRegisterBindings;
// use Src\Shared\Dao\Zona\Infrastructure\Bindings\ZonaBaseRegisterBindings;
// use Src\Shared\Dao\Equipo\Infrastructure\Bindings\EquipoBaseRegisterBindings;
// use Src\Shared\Dao\Usuario\Infrastructure\Bindings\UsuarioDaoRegisterBindings;
// use Src\Administracion\Usuarios\Shared\Infrastructure\Bindings\DeportistaBindings;
// use Src\Shared\Dao\UsuarioDeportista\Infrastructure\Bindings\UsuarioDeportistaRegisterBindings;
// use Src\Shared\Dao\UsuarioMensualidadesPagadas\Infrastructure\Bindings\UsuarioMensualidadesPagadasBaseBindings;

class RegisterBindingsServiceProvider extends ServiceProvider
{
    /**
     * Seguir orden alfabético para facilitar encontrar los módulos
     *
     * @var array
     */
    protected $packagesBindingsRegister = [
        // ClasesRegisterBindings::class,
        // ZonaBaseRegisterBindings::class,
        // EquipoBaseRegisterBindings::class,
        // UsuarioDaoRegisterBindings::class,
        // PagoBaseRegisterBindings::class,
        // ClaseBindings::class,
        // DeportistaBindings::class,
        // EquipoBindings::class,
        // ZonaBindings::class,
        // UsuarioMensualidadesPagadasBaseBindings::class,
        // PagosBindings::class,
        // AuthRegisterBindings::class,
        // UsuarioDeportistaRegisterBindings::class,
        // RolBaseRegisterBindings::class,
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
