<?php

namespace Src\Auth\Infrastructure\Persistence\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Src\Auth\Infrastructure\Persistence\User;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $this->call(AdminUserSeeder::class);

        //Getting existing roles
        $roles = DB::table('roles')->get();

        User::factory(10, ['testing' => true])   //->count(10) funciona igual
            ->create()
            ->each(function ($user) use ($roles) {
                $user->save();

                $user->assignRole($roles->random()->name);
            });
    }
}
