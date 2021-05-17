<?php
namespace App\Models;
use Illuminate\Database\Eloquent\Model;

class SurveyQuestions extends Model {
    protected $table = 'survey_questions';
    protected $primaryKey = 'id';
    protected $fillable = [
        'survey_id',
        'name'
    ];
}