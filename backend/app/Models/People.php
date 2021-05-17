<?php
namespace App\Models;
use Illuminate\Database\Eloquent\Model;

class People extends Model {
    protected $table = 'people';
    protected $primaryKey = 'id';
    protected $fillable = [
        'document_type_id',
        'document_number',
        'first_name',
        'last_name',
        'phone',
        'email'
    ];
}