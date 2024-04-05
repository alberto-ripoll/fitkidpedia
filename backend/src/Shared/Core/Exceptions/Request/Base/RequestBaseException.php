<?php

namespace Src\Shared\Core\Exceptions\Request\Base;

use Src\Shared\Core\Exceptions\Request\Shared\CampoNoEsUuid;
use Src\Shared\Core\Exceptions\Request\Shared\CampoNoEsPdfException;
use Src\Shared\Core\Exceptions\Request\Shared\CampoNoEsBoolException;
use Src\Shared\Core\Exceptions\Request\Shared\CampoNoEsArrayException;
use Src\Shared\Core\Exceptions\Request\Shared\CampoNoEsEmailException;
use Src\Shared\Core\Exceptions\Request\Shared\CampoRequeridoException;
use Src\Shared\Core\Exceptions\Request\Shared\CampoNoEsImagenException;
use Src\Shared\Core\Exceptions\Request\Shared\CampoNoEsStringException;
use Src\Shared\Core\Exceptions\Request\Shared\CampoNoEsNumericoException;
use Src\Shared\Core\Exceptions\Request\Shared\CampoNoEsFechaValidaException;
use Src\Shared\Core\Exceptions\Request\Shared\CampoTamanyoExcedidoException;

abstract class RequestBaseException extends BaseException
{
    protected static $messages = [
        CampoRequeridoException::class => ExceptionCodes::CAMPO_REQUERIDO,
        CampoNoEsStringException::class => ExceptionCodes::CAMPO_DEBE_SER_STRING,
        CampoNoEsNumericoException::class => ExceptionCodes::CAMPO_DEBE_SER_NUMERICO,
        CampoNoEsBoolException::class => ExceptionCodes::CAMPO_DEBE_SER_BOOL,
        CampoNoEsFechaValidaException::class => ExceptionCodes::CAMPO_DEBE_SER_FECHA_VALIDA,
        CampoNoEsImagenException::class => ExceptionCodes::CAMPO_DEBE_SER_IMAGEN,
        CampoNoEsArrayException::class => ExceptionCodes::CAMPO_DEBE_SER_ARRAY,
        CampoNoEsEmailException::class => ExceptionCodes::CAMPO_DEBE_SER_EMAIL,
        CampoNoEsPdfException::class => ExceptionCodes::CAMPO_DEBE_SER_PDF,
        CampoTamanyoExcedidoException::class => ExceptionCodes::TAMANYO_EXCEDIDO,
        CampoNoEsUuid::class => ExceptionCodes::CAMPO_DEBE_SER_UUID,
    ];
}
