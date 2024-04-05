<?php

namespace Src\Shared\Core\ValueObject\Fecha;

use Exception;
use Carbon\Carbon;
use JsonSerializable;
use Src\Shared\Core\ValueObject\Value;
use Src\Shared\Core\ValueObject\RangoFecha\RangoFechaValue;

/**
 * @SuppressWarnings(PHPMD)
 */
class FechaValue implements JsonSerializable, Value
{
    private $carbon;

    public function __construct(private readonly string $fecha)
    {
        try {
            $this->carbon = new Carbon($this->fecha);
        } catch (Exception) {
            throw FormatoFechaException::create();
        }
    }

    public function esPosterior(FechaValue $otraFecha)
    {
        return $this->carbon->isAfter($otraFecha->getCarbon());
    }

    public function diferenciaEnMinutos(FechaValue $otraFecha)
    {
        // dd($this->toUTC(),$otraFecha->toUTC());
        $carbonFechaUTC = new Carbon($this->toUTC());
        $carbonOtraFecha = new Carbon($otraFecha->toUTC());

        return $carbonFechaUTC->diffInMinutes($carbonOtraFecha);
    }

    public function mes(): int
    {
        return $this->carbon->month;
    }

    public function diferenciaEnSegundos(FechaValue $otraFecha)
    {
        $carbonFechaUTC = new Carbon($this->toUTC());
        $carbonOtraFecha = new Carbon($otraFecha->toUTC());

        return $carbonFechaUTC->diffInSeconds($carbonOtraFecha);
    }

    public function esAnterior(FechaValue $otraFecha)
    {
        return $this->carbon->isBefore($otraFecha->getCarbon());
    }
    public function esIgual(FechaValue $otraFecha)
    {
        return $this->carbon->equalTo($otraFecha->getCarbon());
    }

    public function enRangoFecha(RangoFechaValue $rangoFecha): bool
    {
        return $this->carbon->betweenIncluded((string)$rangoFecha->getFechaDesde(), (string)$rangoFecha->getFechaHasta());
    }

    public function getCarbon()
    {
        return $this->carbon;
    }

    public function dia(): string
    {
        return $this->carbon->format('Y-m-d');
    }

    public function diaSemana(): string
    {
        return $this->carbon->format('l');
    }

    public static function ayer()
    {
        $ayer = Carbon::yesterday()->format('Y-m-d');
        return new self($ayer);
    }
    public static function ahora()
    {
        $hoy = Carbon::now()->format('Y-m-d H:i:s');
        return new self($hoy);
    }

    public static function hoy()
    {
        $hoy = Carbon::now()->format('Y-m-d');
        return new self($hoy);
    }

    public static function tomorrow()
    {
        $tomorrow = Carbon::tomorrow()->format('Y-m-d');
        return new self($tomorrow);
    }

    public function retrocederDias(int $dias)
    {
        $carbon = new Carbon($this->fecha);
        $fecha = $carbon->subRealDays($dias);
        return new self($fecha);
    }

    public function addDays(int $dias)
    {
        $carbon = new Carbon($this->fecha);
        $fecha = $carbon->addDays($dias);
        return new self($fecha);
    }

    public function anyadirHoras(int $horas)
    {
        $carbon = new Carbon($this->fecha);
        $fecha  = $carbon->addHours($horas);
        return new self($fecha);
    }

    public function restarHoras(int $horas)
    {
        $carbon = new Carbon($this->fecha);
        $fecha  = $carbon->subHours($horas);
        return new self($fecha);
    }
    public function restarMinutos(int $horas)
    {
        $carbon = new Carbon($this->fecha);
        $fecha  = $carbon->subRealMinutes($horas);
        return new self($fecha);
    }

    public function restarSegundos(int $segundos)
    {
        $carbon = new Carbon($this->fecha);
        $fecha  = $carbon->subRealSeconds($segundos);
        return new self($fecha);
    }

    public function hora()
    {
        return $this->carbon->format('H');
    }

    public function minutos()
    {
        return $this->carbon->format('i');
    }

    public function toUTC()
    {
        return $this->carbon->tz('UTC')->format('Y-m-d H:i:s');
    }

    public function format(string $formato): string
    {
        return $this->carbon->format($formato);
    }

    public function timezone(string $timezone): self
    {
        return new self($this->carbon->tz($timezone));
    }

    public function toIso8601ZuluString()
    {
        return $this->carbon->toIso8601ZuluString();
    }
    public function __toString(): string
    {
        return $this->carbon->toIso8601String();
    }
    public function value(): mixed
    {
        return $this->carbon->toIso8601String();
    }

    public function jsonSerialize(): mixed
    {
        return $this->carbon->toIso8601String();
    }
}
