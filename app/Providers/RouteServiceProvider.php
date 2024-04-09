<?php

namespace App\Providers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Illuminate\Cache\RateLimiting\Limit;
use Illuminate\Support\Facades\RateLimiter;
use Src\Auth\Infrastructure\Web\AuthRoutes;
// use Src\Clientes\Shared\Infrastructure\Web\ClientesRoutes;
// use Src\Administracion\Pagos\Infrastructure\Web\PagosRoutes;
// use Src\Administracion\Zonas\Infrastructure\Web\ZonasRoutes;
// use Src\Administracion\Clases\Infrastructure\Web\ClasesRoutes;
// use Src\Administracion\Equipos\Infrastructure\Web\EquiposRoutes;
// use Src\Administracion\Usuarios\Shared\Infrastructure\Web\UsuariosRoutes;
// use Src\Shared\Usuarios\Deportistas\Infrastructure\Web\DeportistasRoutes;
use Src\Context\Shared\Infrastructure\Web\ContextRoutes;
use Src\Elements\Shared\Infrastructure\Web\ElementsRoutes;
use Src\Elements\Shared\Infrastructure\Web\ElementsController;
use Illuminate\Foundation\Support\Providers\RouteServiceProvider as ServiceProvider;

// use Src\Administracion\Clientes\Mensualidades\Infrastructure\Web\MensualidadesRoutes;

class RouteServiceProvider extends ServiceProvider
{

    /**
     * The path to your application's "home" route.
     *
     * Typically, users are redirected here after authentication.
     *
     * @var string
     */
    public const HOME = '/home';

    /**
     * Define your route model bindings, pattern filters, and other route configuration.
     */
    public function boot(): void
    {
        RateLimiter::for('api', function (Request $request) {
            return Limit::perMinute(60)->by($request->user()?->id ?: $request->ip());
        });

        Route::middleware(['api'])->group(function () {
            AuthRoutes::configure();
            ElementsRoutes::configure();
        });

        //Otras rutas
        $this->routes(function () {
            Route::middleware('api')
                ->prefix('api')
                ->group(base_path('routes/api.php'));

            Route::middleware('web')
                ->group(base_path('routes/web.php'));
        });
    }
}
