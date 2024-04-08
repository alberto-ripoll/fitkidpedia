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
        Schema::create('ejercicios', function (Blueprint $table) {
            $table->uuid('id')->primary();

            $table->string('nombre');
            $table->string('image')->nullable();
            $table->string('video')->nullable();
            $table->string('descripcion')->nullable();
            $table->string('dificultad')->nullable();
            $table->string('tipo')->nullable();

            $table->timestampsTz();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('ejercicios');
    }
};
