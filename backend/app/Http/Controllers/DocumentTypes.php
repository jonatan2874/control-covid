<?php

namespace App\Http\Controllers;
use App\Models\DocumentTypes as Types;
use Illuminate\Http\Request;

class DocumentTypes extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    public static function getTypes(){
        $types = Types::get();
        return $types;
    }

}
