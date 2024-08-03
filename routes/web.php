<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProductsController;

Route::get('/', function () {
    return inertia('home');
});

Route::resource('products', ProductsController::class);
