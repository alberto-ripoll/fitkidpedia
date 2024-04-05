<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

class TruncateAllTablesSeeder extends Seeder
{
    /**
     * Se deshabilitan las restricciones de integridad para poder truncar las tablas.
     * Las tablas que empiezan por un número están con dobles dobles comillas (""2_codigo_proceso"") de ahí que tengamos
     * que eliminarlas del nombre de la tabla.
     *
     * @return void
     */
    public function run()
    {
        Schema::disableForeignKeyConstraints();

        $tableNames = $this->getAllTableNames();

        foreach ($tableNames as $name) {
            DB::table(str_replace('"', '', $name))->truncate();
        }

        Schema::enableForeignKeyConstraints();
    }

    /**
     * No queremos truncar la tabla migrations
     *
     * @param array $excepts Tablas que NO han de truncarse
     * @return array
     */
    protected function getAllTableNames($excepts = []): array
    {
        $excepts = array_merge(['migrations'], $excepts);

        return DB::query()->select('table_name')->from('information_schema.tables')
        ->where('table_schema', 'public')
        ->whereNotIn('table_name', $excepts)
        ->get()
        ->pluck('table_name')
        ->toArray();
    }
}
