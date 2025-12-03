<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Illuminate\Http\Resources\Json\JsonResource;

class AppServiceProvider extends ServiceProvider
{
    public function register(): void
    {
        
    }

    public function boot(): void
    {
        JsonResource::withoutWrapping();

        $this->app['router']->aliasMiddleware('cors', \App\Http\Middleware\CorsMiddleware::class);
    }
}