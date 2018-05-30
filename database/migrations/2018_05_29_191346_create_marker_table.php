<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateMarkerTable extends Migration
{
    /**
     * Run the migrations.
     *手机品牌)手机机型)版本
     * @return void
     */
    public function up()
    {
        Schema::create('marker', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('mactype_id')->comment('手机机型id');
            $table->string('markerName')->comment('版本型号名称');
            $table->decimal('markerMoney',11,2)->default(0.00)->comment('金额');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('marker');
    }
}
