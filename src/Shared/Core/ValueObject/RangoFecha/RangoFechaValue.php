<?php

namespace Src\Shared\Core\ValueObject\RangoFecha;

use JsonSerializable;
use Src\Shared\Core\ValueObject\Fecha\FechaValue;

class RangoFechaValue implements JsonSerializable
{
    public function __construct(private FechaValue $fechaDesde, private FechaValue $fechaHasta)
    {
        $this->validarRango();
    }

    private function validarRango()
    {
        if ($this->fechaDesde->esPosterior($this->fechaHasta)) {
            throw RangoFechaException::create();
        }
    }

    public function getFechaDesde()
    {
        return $this->fechaDesde;
    }

    public function getFechaHasta()
    {
        return $this->fechaHasta;
    }

    public function getFechaDesdeUTC()
    {
        return $this->fechaDesde->toUTC();
    }

    public function getFechaHastaUTC()
    {
        return $this->fechaHasta->toUTC();
    }

    public static function hoy()
    {
        return new self(FechaValue::hoy(), FechaValue::hoy());
    }

    public static function ayer()
    {
        return new self(FechaValue::ayer(), FechaValue::ayer());
    }
    public static function tomorrow()
    {
        return new self(FechaValue::tomorrow(), FechaValue::tomorrow());
    }

    public function esIgual(RangoFechaValue $otroRango)
    {
        return ($otroRango->getFechaDesde()->esIgual($this->getFechaDesde())) && ($otroRango->getFechaHasta()->esIgual($this->getFechaHasta()));
    }

    public function jsonSerialize(): mixed
    {
        return [
            'fechaDesde' => $this->fechaDesde,
            'fechaHasta' => $this->fechaHasta,
        ];
    }
}
