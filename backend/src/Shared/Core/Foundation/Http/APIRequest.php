<?php

namespace Src\Shared\Core\Foundation\Http;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Contracts\Validation\Validator;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Http\Exceptions\HttpResponseException;
use Src\Shared\Core\Exceptions\Request\Shared\ApiFailedValidationMessageMapper;

/**
 * @SuppressWarnings(PHPMD.NumberOfChildren)
 */
abstract class APIRequest extends FormRequest
{
    /**
     * Determine if user authorized to make this request
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * If validator fails return the exception in json form
     * @param Validator $validator
     * @return array
     */
    protected function failedValidation(Validator $validator)
    {
        $errores = $validator->errors()->getMessages();
        $errorMessages = [];
        foreach ($errores as $campo => $rules) {
            foreach ($rules as $rule) {
                $errorMessages[] = [
                    'mensaje' => ApiFailedValidationMessageMapper::errorToCode($rule),
                    'field' => $campo
                ];
            }
        }

        throw new HttpResponseException(ApiResponse::json(null, Response::HTTP_UNPROCESSABLE_ENTITY, $errorMessages));
    }

    abstract public function rules();
}
