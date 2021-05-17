<?php
namespace App\Models;
use Illuminate\Database\Eloquent\Model;

class SurveyRecords extends Model {
    protected $table = 'survey_records';
    protected $primaryKey = 'id';
    protected $fillable = [
        'people_id',
        'survey_id',
        'date',
        'values'
    ];
}