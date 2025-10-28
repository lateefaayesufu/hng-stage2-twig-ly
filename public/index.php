<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

// Load Composer autoloader
require_once __DIR__ . '/../vendor/autoload.php';

use TicketFlow\Router;

// Get the request URI
$uri = $_SERVER['REQUEST_URI'];

// Create router and handle request
$router = new Router();
$router->route($uri);
