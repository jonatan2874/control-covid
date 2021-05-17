<?php

namespace App\Http\Controllers;
use App\Models\SurveyRecords as RecordsModel;
use Illuminate\Http\Request;

class SurveyRecords extends Controller
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

    // public static function getQuestions($survey){
    //     $person = QuestionModel::where('survey_id', $survey)->get();
    //     return $person;
    // }

    public function store(Request $request){
        // return $request;
        $record = new RecordsModel;
        $record->people_id = $request->people_id;
        $record->survey_id = $request->survey_id;
        $record->date = date("Y-m-d H:i:s");
        $record->values = json_encode($request->values);

        $record->save();

        return $record;
    }

}
