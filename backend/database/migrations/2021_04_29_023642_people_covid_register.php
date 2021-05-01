<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class PeopleCovidRegister extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('people_covid_register', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('people_id');
            $table->timestamp('date');
            $table->string('fever');
            $table->timestamps();

            $table->foreign('people_id')->references('id')->on('people');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
    }
}
