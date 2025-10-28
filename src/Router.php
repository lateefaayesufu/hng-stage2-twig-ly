<?php

namespace TicketFlow;

use Twig\Environment;
use Twig\Loader\FilesystemLoader;

class Router {
    private $twig;
    
    public function __construct() {
        $loader = new FilesystemLoader(__DIR__ . '/../templates');
        $this->twig = new Environment($loader, [
            'cache' => false, // Disable cache for development
            'debug' => true
        ]);
    }
    
    public function route($uri) {
        // Remove query string and leading/trailing slashes
        $uri = strtok($uri, '?');
        $uri = trim($uri, '/');
        
        // Route matching
        switch ($uri) {
            case '':
            case 'index.php':
                return $this->render('pages/home.twig');
                
            case 'auth/login':
                return $this->render('pages/login.twig');
                
            case 'auth/signup':
                return $this->render('pages/signup.twig');
                
            case 'dashboard':
                return $this->render('pages/dashboard.twig');
                
            case 'tickets':
                return $this->render('pages/tickets.twig');
                
            case 'tickets/new':
                return $this->render('pages/ticket-form.twig', [
                    'isEdit' => false,
                    'ticketId' => null
                ]);
                
            default:
                // Check if it's a ticket edit route (tickets/{id})
                if (preg_match('#^tickets/(.+)$#', $uri, $matches)) {
                    return $this->render('pages/ticket-form.twig', [
                        'isEdit' => true,
                        'ticketId' => $matches[1]
                    ]);
                }
                
                // 404 - redirect to home
                header('Location: /');
                exit;
        }
    }
    
    private function render($template, $data = []) {
        echo $this->twig->render($template, $data);
    }
}