<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->increments('id');
            $table->string('userName')->comment('用户名');
            $table->string('userPassword')->comment('用户密码');
            $table->string('userDevice')->comment('用户地址');
            $table->integer('order_id')->comment('订单id');
            $table->decimal('userMoney',11,2)->nullable()->default(0.00)->comment('用户钱包金额');
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
        Schema::dropIfExists('users');
    }
}
