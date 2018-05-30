<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateFailureTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('failure', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('mac_id')->comment('机型id');
            $table->integer('marker_id')->comment('型号id');
            $table->string('channel')->comment('购买渠道');
            $table->string('memory')->comment('机身内存');
            $table->string('guarantee')->comment('保修');
            $table->string('appearance')->comment('外观损坏');
            $table->string('screenworn')->comment('屏幕损坏');
            $table->string('screenshow')->comment('屏幕显示');
            $table->string('maintenance')->comment('维修拆机历史');
            $table->string('dampness')->comment('受潮');
            $table->string('problems')->nullable()->comment('其他问题');
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
        Schema::dropIfExists('failure');
    }
}
