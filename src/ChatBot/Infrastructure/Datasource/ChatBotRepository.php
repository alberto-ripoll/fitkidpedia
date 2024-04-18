<?php

namespace Src\ChatBot\Infrastructure\Datasource;

require("Todo.php");

use GuzzleHttp\Client;
use Illuminate\Support\Facades\Log;
use GuzzleHttp\Exception\GuzzleException;
use Src\ChatBot\Domain\ChatBotRepositoryInterface;

class ChatBotRepository implements ChatBotRepositoryInterface
{
    public function ask(string $pregunta): string
    {
        $ruta = storage_path() . '/fitkidpedia_pdf_text/fitkidpedia_text';
        // $pdf = file_get_contents($ruta);


        // $client = new Client([
        //     'base_uri' => 'https://api.anthropic.com',
        //     'headers' => [
        //         'x-api-key' => $api_key,
        //         'anthropic-version' => '2023-06-01',
        //         'content-type' => 'application/json'
        //     ]
        // ]);
        // $prompt = 'Aquí tienes el extracto de un PDF con el que tienes que responder las preguntas.' . $pdf . 'Responde la pregunta basando en la información del extracto. Si la respuesta no se encuentra en extracto, llama a la función answer_not_found. Pregunta: ' . $pregunta;
        // $data = [
        //     'model' => 'claude-3-opus-20240229',
        //     'max_tokens' => 100000,
        //     'messages' => [
        //         ['role' => 'user', 'content' => $prompt],
        //     ]
        // ];
        // $response = $client->request('POST', '/v1/messages', [
        //     'json' => $data
        // ]);

        // $response = json_decode($response->getBody()->getContents(), true);
        // return $response['content'][0]['text'];
        // return $response->messages[0]->content;
        try {
            $chunks = $this->crearChunks($ruta);
            $keywords = get_keywords($pregunta);
            $matches = find_matches($chunks, $keywords);
            foreach ($matches as $chunk_id => $points) {
                $file = fopen($ruta, "r");
                $pdf = file_get_contents($ruta);
                $answer = answer_question($chunks[$chunk_id], $pregunta);

                if (
                    $answer !== false
                ) {
                    return (string)$answer->content;
                } else {
                    return "No he podido encontrar la respuesta, por favor intenta con otra pregunta.";
                }
            }
        } catch (GuzzleException $e) {
            echo 'Error: ' . $e->getMessage();
        }
    }


    protected function crearChunks($filename, $chunk_size = 4000, $overlap = 1000)
    {
        if ($overlap > $chunk_size) {
            throw new \Exception("Overlap must be smaller than chunk size");
        }

        $chunks = [];

        $file = fopen($filename, "r");
        while (!feof($file)) {
            $chunk = fread($file, $chunk_size);
            $chunks[] = $chunk;
            if (feof($file)) {
                break;
            }
            fseek($file, -$overlap, SEEK_CUR);
        }

        return $chunks;
    }
}
