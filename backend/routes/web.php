<?php

/** @var \Laravel\Lumen\Routing\Router $router */

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/

$router->get('/', function () use ($router) {
    return $router->app->version();
});

// $router->group(['prefix' => 'person'], function () use ($router) {
//     $router->get('users', function () {
//         // Matches The "/admin/users" URL
//     });
// });

$router->get('person/{id}', function ($id) {
    return App\Http\Controllers\People::getPerson($id);
    // return 'User '.$id;
});

$router->post('person', 'People@store');

$router->get('personByDoc/{type}/{document}', function ($type,$document) {
    return App\Http\Controllers\People::getPersonByDoc($type,$document);
    // return 'User '.$id;
});

$router->get('documentTypes', function () {
    return App\Http\Controllers\DocumentTypes::getTypes();
    // return 'User '.$id;
});

$router->get('questions/{survey}', function ($survey) {
    return App\Http\Controllers\SurveyQuestions::getQuestions($survey);
    // return 'User '.$id;
});

$router->post('saveSurvey', 'SurveyRecords@store');

$router->post('foo', function () {
    //
});