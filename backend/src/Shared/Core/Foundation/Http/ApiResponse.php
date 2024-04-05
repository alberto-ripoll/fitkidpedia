<?php

namespace Src\Shared\Core\Foundation\Http;

use Exception;
use Illuminate\Http\Response;
use Illuminate\Http\JsonResponse;
use Symfony\Component\HttpFoundation\StreamedResponse;
use Symfony\Component\HttpFoundation\BinaryFileResponse;

/**
 * Información sobre los diferentes codigos de respuesta https://restfulapi.net/http-status-codes/
 *
 * Codigos que usamos:
 * 200 -> Respuesta correcta
 * 400 -> Error en la parte del servidor, es el error generico cuando ningun codigo 4XX puede ser usado.
 * 401 -> No autorizado, no tiene permisos. Por si algun usuario intenta realizar una accion en la cual no tiene permisos
 * 404 -> Recurso no encontrado, por ejemplo al solicitar los datos de un cliente y que ese cliente no exista
 * 405 -> Metodo o accion no permitida, en casos en los que pueda escoger la accion a realizar y no exista
 * 500 -> Error en la parte del servidor, la diferencia del 400 es que es un error no controlado. Esto ya lo devuelve Laravel de forma automatica si algo explota
 *
 * @SuppressWarnings(PHPMD.ExcessiveClassLength)
 * @SuppressWarnings(PHPMD.ExcessiveClassComplexity)
 */
class ApiResponse
{
    protected const ERROR_TYPE = 'Error en la respuesta API, el error debe ser un array que contenga un array por cada error. Ejemplo: [["campo1" => "valor1", "campo2" => "valor2"],["campo11" => "valor11"]]';
    protected const ERROR_CODIGO_ESTADO_200 = 'Error en la respuesta API, el código de estado no puede ser 200 y tener errores. Quizás deberías usar el campo data para enviar esta información o modificar el estado para indicar su error';
    protected const ERROR_CODIGO_ESTADO = 'Error en la respuesta API, el código de estado debe ser 200, 400, 401, 404, 405 o 500';
    protected const ERROR_MALFORMED_RESPONSE = 'Respuesta API mal formada';
    protected const STATUS_CODE = [200, 400, 401, 403, 404, 405, 422, 500]; // TODO actualizar las comprobaciones de los codigos (mulod 100??)

    public const ESTADO_200_OK = 200;
    public const ESTADO_400_ERROR = 400;
    public const ESTADO_401_NO_AUTORIZADO = 401;
    public const ESTADO_404_RECURSO_NO_ENCONTRADO = 404;
    public const ESTADO_405_ACCION_NO_PERMITIDA = 405;
    public const DATAGRID_VALID_KEYS = [
        'current_page', 'data', 'first_page_url', 'from', 'last_page', 'last_page_url',
        'next_page_url', 'path', 'per_page', 'prev_page_url', 'to', 'total', 'tipo_descarga'
    ];

    /**
     * Metodo para retornar una respuesta json estandarizada
     *
     * @param mixed $content
     * @param array $errors
     * @param integer $status
     * @return JsonResponse
     */
    public static function json($content = null, int $status = 200, array $errors = []): JsonResponse
    {
        static::comprobarError($errors);
        static::comprobarStatus($errors, $status);

        $response = [
            'data' => $content,
            'errors' => $errors,
            'status' => $status
        ];

        return response()->json($response, $status);
    }

    /**
     * Metodo para devolver el contenido de un datagrid sin modificar
     *
     * @param mixed $content El contenido del datagrid
     * @return \Illuminate\Http\Response | \Symfony\Component\HttpFoundation\StreamedResponse
     */
    public static function datagrid($content = null)
    {
        if ($content instanceof StreamedResponse) {
            return $content;
        }

        return response($content);
    }

    /**
     * Metodo para devolver un fichero almacenado en el disco
     *
     * @param string $rutaDelFichero Ruta completa del fichero a descargar, ejemplo /var/www/html/storage/directorio/fichero.txt
     * @return \Symfony\Component\HttpFoundation\BinaryFileResponse
     */
    public static function ficheroAlmacenado(string $rutaDelFichero): BinaryFileResponse
    {
        return response()->download($rutaDelFichero);
    }

    /**
     * Metodo para devolver un fichero sin necesidad de almacenarlo en el disco
     *
     * @param mixed $contenidoFichero El contenido del fichero que queremos descargar
     * @param string $nombreDelFichero El nombre del fichero que va a tener por defecto
     * @return \Symfony\Component\HttpFoundation\StreamedResponse
     */
    public static function ficheroEnMemoria($contenidoFichero, string $nombreDelFichero): StreamedResponse
    {
        return response()->streamDownload(
            function () use ($contenidoFichero) {
                echo $contenidoFichero;
            },
            $nombreDelFichero
        );
    }

    /**
     * Metodo para comprobar que la respuesta recibida del controller es correcta
     *
     * @param mixed $respuestaApi
     * @return bool
     */
    public static function comprobarFormato($respuestaApi): bool
    {

        if ($respuestaApi instanceof StreamedResponse || $respuestaApi instanceof BinaryFileResponse) {
            return true;
        }

        $response = null;
        if ($respuestaApi instanceof JsonResponse) {
            $response = $respuestaApi->getData();
            if (static::comprobarFormatoJson($response) === false) {
                throw new Exception(self::ERROR_MALFORMED_RESPONSE);
            }
        }

        if ($respuestaApi instanceof Response) {
            $response = json_decode($respuestaApi->getContent(), true);
            if (static::comprobarFormatoDatagrid($response) === false) {
                throw new Exception(self::ERROR_MALFORMED_RESPONSE);
            }
        }

        if ($response === null) {
            throw new Exception(self::ERROR_MALFORMED_RESPONSE);
        }

        return true;
    }

    /**
     * Metodo para comprobar que la respuesta API esta correctamente formada como Datagrid
     * se usara en el middleware para evitar que se devuelvan respuestas diferentes a la definida
     *
     * 1. Se crea un array de $control cuyas keys son DATAGRID_VALID_KEYS y los valores 1.
     * 2. Se resta $control a $response. Si el resultado no es un array vacio significa que $response tiene keys de más.
     * 3. Se resta $response a $control. Si el resultado no es un array vacío significa que a $response le faltan keys.
     *
     * @param array $response
     * @return bool True si $response contiene exactamente como keys las DATAGRID_VALID_KEYS.
     *              False en caso de tener keys de menos o de mas.
     */
    public static function comprobarFormatoDatagrid(array $response): bool
    {
        $control = array_fill_keys(self::DATAGRID_VALID_KEYS, 1);
        $keysDeMas = array_diff_key($response, $control);
        $keysDeMenos = array_diff_key($control, $response);
        return empty($keysDeMas) && empty($keysDeMenos);
    }

    /**
     * Metodo para comprobar que la respuesta API esta correctamente formada como Json
     * se usara en el middleware para evitar que se devuelvan respuestas diferentes a la definida
     *
     * @param object $response
     * @return bool
     *
     * @SuppressWarnings(PHPMD.UnusedLocalVariable) //TODO Quizas se pueda refactorizar con array_fill_keys
     */
    protected static function comprobarFormatoJson(object $response): bool
    {
        if (property_exists($response, 'data') === false || property_exists($response, 'error') === false || property_exists($response, 'status') === false) {
            return false;
        }

        // $keys = array_keys($response);
        foreach ($response as $key => $value) {
            if (in_array($key, ['data', 'error', 'status']) === false) {
                return false;
            }
        }

        return true;
    }

    /**
     * Comprobamos que el estado no es 200 cuando hay errores
     *
     * @param array $errors
     * @param integer $status
     * @return void
     */
    protected static function comprobarStatus(array $errors, int $status): void
    {
        if (empty($errors) === false && $status === 200) {
            throw new Exception(self::ERROR_CODIGO_ESTADO_200);
        }

        if (in_array($status, self::STATUS_CODE) === false) {
            throw new Exception(self::ERROR_CODIGO_ESTADO);
        }
    }

    /**
     * Comprobamos que el campo errors es un array que contiene arrays
     *
     * @param array $errors
     * @return void
     */
    protected static function comprobarError(array $errors): void
    {
        foreach ($errors as $error) {
            if (is_array($error) === false) {
                throw new Exception(self::ERROR_TYPE);
            }

            foreach ($error as $valor) {
                if (is_array($valor) === true) {
                    throw new Exception(self::ERROR_TYPE);
                }
            }
        }
    }
}
