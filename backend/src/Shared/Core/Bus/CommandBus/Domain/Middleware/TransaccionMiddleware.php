<?php

namespace Src\Shared\Core\Bus\CommandBus\Domain\Middleware;

use Exception;
use Error;
use Throwable;
use Illuminate\Support\Facades\DB;

class TransaccionMiddleware
{
    public function process($command, $handler)
    {
        try {
            DB::beginTransaction();
            $result =  $handler->handle($command);
            DB::commit();
            return $result;
        } catch (Exception $err) {
            DB::rollBack();
            throw $err;
        } catch (Error $err) {
            DB::rollBack();
            throw $err;
        } catch (Throwable $err) {
            DB::rollBack();
            throw $err;
        }
    }
}
