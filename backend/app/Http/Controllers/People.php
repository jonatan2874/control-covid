<?php

namespace App\Http\Controllers;
use App\Models\People as PeopleModel;
use Illuminate\Http\Request;

class People extends Controller
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

    public static function getPerson($id){
        $person = PeopleModel::where('id', $id)->get();
        return $person;
    }

    public static function getPersonByDoc($type,$document){
        $person = PeopleModel::where('document_type_id','=',$type)
                                ->where('document_number','=', $document)
                                ->get();
        return $person;
    }

    public static function store(Request $request){
        $person = new PeopleModel;
        $person->document_number = $request->document_number;
        $person->first_name = $request->first_name;
        $person->last_name = $request->last_name;
        $person->phone = $request->phone;
        $person->email = $request->email;

        $person->save();

        return $person;
    }

    //
}
