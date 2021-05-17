<?php

namespace App\Http\Controllers;
use App\Models\Survey as SurveyModel;
use Illuminate\Http\Request;

class Survey extends Controller
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

    public static function getSurvey($id){
        $person = SurveyModel::where('id', $id)->get();
        return $person;
    }

    public static function saveSurvey($params){
        
        return $params;
    }

}
