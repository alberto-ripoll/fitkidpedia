<?php

namespace Src\Auth\Application;

class LoginMobileCommand
{
    public function __construct(
        public string $identity,
        public string $password,
        public string $device_name,
    ) {
    }
}
