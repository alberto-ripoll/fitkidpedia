<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('usuarios', function (Blueprint $table) {
            $table->uuid('id')->primary();

            $table->string('nombre');
            $table->string('nombre_usuario')->unique()->nullable();
            $table->string('telefono')->nullable();
            $table->string('avatar')->nullable()->default('/avatars/default.png');
            $table->string('password')->nullable();
            $table->string('genero')->default('M');

            $table->timestampsTz();
            $table->softDeletesTz();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('users');
    }
};
