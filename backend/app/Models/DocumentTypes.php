<?php
namespace App\Models;
use Illuminate\Database\Eloquent\Model;

class DocumentTypes extends Model {
    protected $table = 'people_document_types';
    protected $primaryKey = 'id';
    protected $fillable = [
        'prefix',
        'name'
    ];
}