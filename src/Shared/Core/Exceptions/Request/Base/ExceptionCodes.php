<?php

namespace Src\Shared\Core\Exceptions\Request\Base;

class ExceptionCodes
{
    public const CAMPO_REQUERIDO = 'request_required_field_exception_000';
    public const CAMPO_DEBE_SER_STRING = 'request_required_field_exception_001';
    public const CAMPO_DEBE_SER_NUMERICO = 'request_required_field_exception_002';
    public const CAMPO_DEBE_SER_BOOL = 'request_required_field_exception_003';
    public const CAMPO_DEBE_SER_FECHA_VALIDA = 'request_required_field_exception_004';
    public const CAMPO_DEBE_SER_IMAGEN =  'request_required_field_exception_005';
    public const CAMPO_DEBE_SER_ARRAY =  'request_required_field_exception_006';
    public const CAMPO_DEBE_SER_EMAIL =  'request_required_field_exception_007';
    public const CAMPO_DEBE_SER_PDF =  'request_required_field_exception_008';
    public const TAMANYO_EXCEDIDO  = 'request_required_field_exception_009';
    public const CAMPO_DEBE_SER_UUID = 'request_required_field_exception_010';
}
