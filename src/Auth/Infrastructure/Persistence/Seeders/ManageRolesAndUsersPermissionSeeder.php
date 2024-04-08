<?php

namespace Src\Auth\Infrastructure\Persistence\Seeders;

use Illuminate\Database\Seeder;
use Src\Shared\Eloquent\Role\Role;
use Src\Shared\Eloquent\Permission\Permission;
use Src\Shared\Sistema\Permisologia\Roles\Domain\Constants\RolesConstants;
use Src\Shared\Sistema\Permisologia\Modulos\ConfiguracionMedica\Directorio\PermisosDirectorioConfiguracionMedica;
use Src\Shared\Sistema\Permisologia\Modulos\ConfiguracionMedica\Administracion\PermisosAdministracionConfiguracionMedica;

/**
 * @SuppressWarnings(PHPMD)
 */
class ManageRolesAndUsersPermissionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $admin = Role::firstOrCreate(['name' => 'administrador']);
        $user = Role::firstOrCreate(['name' => 'user']);
        $doctorConsulta = Role::firstOrCreate(['name' => RolesConstants::DOCTOR_EN_CONSULTA, 'id' => RolesConstants::ID_ROL_DOCTOR_CONSULTA]);
        $medicoLector = Role::firstOrCreate(['name' => RolesConstants::MEDICO_LECTOR, 'id' => RolesConstants::ID_ROL_MEDICO_LECTOR]);
        $asistenteRemoto = Role::firstOrCreate(['name' => RolesConstants::ASISTENTE_REMOTO, 'id' => RolesConstants::ID_ROL_ASISTENTE_REMOTO]);
        $gerente = Role::firstOrCreate(['name' => RolesConstants::GERENTE]);
        $medico = Role::firstOrCreate(['name' => RolesConstants::MEDICO]);
        $optico = Role::firstOrCreate(['name' => RolesConstants::OPTICO]);
        $direccion = Role::firstOrCreate(['name' => RolesConstants::DIRECTOR_GOINGUP]);
        Role::firstOrCreate(['name' => RolesConstants::USUARIO_BAVIERA]);
        Role::firstOrCreate(['name' => RolesConstants::ADJUNTO]);
        Role::firstOrCreate(['name' => RolesConstants::ADMINISTRACION]);
        Role::firstOrCreate(['name' => RolesConstants::ANESTESIA]);
        Role::firstOrCreate(['name' => RolesConstants::APARATOS]);
        Role::firstOrCreate(['name' => RolesConstants::AUXILIAR]);
        Role::firstOrCreate(['name' => RolesConstants::AUXILIAR_DUE]);
        $adminBaviera = Role::firstOrCreate(['name' => RolesConstants::ADMIN_BAVIERA]);

        Permission::findOrCreate(PermisosDirectorioConfiguracionMedica::DIRECTORIO_CONFIGURACION_MEDICA_GRUPO_LECTURA);
        Permission::findOrCreate(PermisosAdministracionConfiguracionMedica::ADMINISTRACION_CONFIGURACION_MEDICA_GRUPO_LECTURA);
        Permission::findOrCreate('administracion/sistema/unidad-regional');
        Permission::findOrCreate('administracion/sistema/puestos');
        Permission::findOrCreate('administracion/sistema/unidad-organizativa');
        Permission::findOrCreate('administracion/sistema/unidad-medica');
        Permission::findOrCreate('administracion_protocolos');
        Permission::findOrCreate('administracion_usuarios');
        Permission::findOrCreate('direccion_cuadro_mandos');

        //TODO CREAR PERMISOS PARA LOS MEDICOS Y SINCRONIZARLOS

        // Sync will delete then re-add all the permissions.
        $admin->syncPermissions([
            PermisosDirectorioConfiguracionMedica::DIRECTORIO_CONFIGURACION_MEDICA_GRUPO_LECTURA,
            PermisosAdministracionConfiguracionMedica::ADMINISTRACION_CONFIGURACION_MEDICA_GRUPO_LECTURA,
            'administracion/sistema/unidad-regional',
            'administracion/sistema/puestos',
            'administracion/sistema/unidad-organizativa',
            'administracion/sistema/unidad-medica',
            'administracion_usuarios',
            'administracion_protocolos',
            'direccion_cuadro_mandos'
        ]);

        $direccion->syncPermissions([
            PermisosDirectorioConfiguracionMedica::DIRECTORIO_CONFIGURACION_MEDICA_GRUPO_LECTURA,
            PermisosAdministracionConfiguracionMedica::ADMINISTRACION_CONFIGURACION_MEDICA_GRUPO_LECTURA,
            'direccion_cuadro_mandos'
        ]);
    }
}
