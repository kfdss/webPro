<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateMachineTypeTable extends Migration
{
    /**
     * Run the migrations.
     *已经在品牌中了)手机机型
     * @return void
     */
    public function up()
    {
        Schema::create('machine_type', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('brand_id')->comment('品牌id');
            $table->string('macType')->comment('手机机型名称');
            $table->string('macPhoto',150)->comment('手机机型缩略图');
            $table->decimal('macMoney',11,2)->default(0.00)->comment('金额');
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
        Schema::dropIfExists('machine_type');
    }
}
