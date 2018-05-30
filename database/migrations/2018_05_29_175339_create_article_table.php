<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateArticleTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('article', function (Blueprint $table) {
            $table->increments('id')->comment('主键id');
            $table->string('title')->comment('文章标题');
            $table->longText('content')->comment('文章内容');
            $table->integer('click_num')->default(0)->comment('文章浏览量,默认值为0');
            $table->integer('actype_id')->comment('文章类型id');
            $table->tinyInteger('state')->default(1)->comment('文章状态');
            $table->date('created_at')->comment('上传时间');
            $table->dateTime('updated_at')->comment('修改时间');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('article');
    }
}
