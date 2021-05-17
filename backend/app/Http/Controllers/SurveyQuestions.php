<?php

namespace App\Http\Controllers;
use App\Models\SurveyQuestions as QuestionModel;
use Illuminate\Http\Request;

class SurveyQuestions extends Controller
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

    public static function getQuestions($survey){
        $person = QuestionModel::where('survey_id', $survey)->get();
        return $person;
    }

}
