<template>
    <div>
        <div class="right">
            <div class="nav-pro" id="#">
                <div class="phone small-level" id="shoujiBrandDiv">
                    <ul>
                        <li v-for="item in brand" :title="item.brandName" @click="ac(item)">
                            <a href="##" :id="item.id" class="switch_mine" @click="br(item)">
                                <i class="line"></i>
                                <input type="hidden" :value="item.id">
                                <input type="hidden" :value="item.brandName">
                                <img :src="/Uploads/+item.brandPhoto" class="hover-black">
                            </a>
                        </li>
                        <li><a href="javascript:;" class="show-more" @click="brmore()"><span>展开更多</span><i></i></a></li>
                    </ul>
                </div>
                <div class="computer small-level hide" id="pinbanBrandDiv">

                </div>
            </div>
            <div class="pro-list">
                <h2 class="name">
                    <span id="keyWordSpan"></span>
                    <span id="brandName">{{brandi}}</span>
                    <span id="categoryName">(手机)</span>
                    相关回收机型
                </h2>
                <ul id="macList">

                    <li v-for="item in mactype" :title="item.macType" :id="item.brand_id">
                        <a :href="/recovery/+item.id">
                            <div class="pro-img"><img :src="/Uploads/+item.macPhoto"></div>
                            <h2 class="pro-name">{{item.macType}}</h2>
                            <p class="pro-num">目前已收{{item.recoveryNum}}台</p>
                        </a>
                    </li>

                </ul>
                <span class="##" id="isMore">
                   <a href="javascript:;" class="ck-more" id="moreBtn" @click="macmore()">查看更多</a>
                </span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "right",
        data(){
            return {
                brandi:"苹果",
                //保存机型数组
                mactype:[],
                //保存品牌数组
                brand:[],
            }
        },
        created(){

            axios.get("/right").then(res=>{
                //console.log(res.data);
                this.brand=res.data[0];
                this.mactype=res.data[1];
            })

        },

        methods:{
            br:function(item){
                var id=item.id;
                axios.get("/switch/"+id).then(res=>{
                    this.brandi=res.data[0];
                    this.mactype=res.data[1];
                    $("#macList li").remove();
                    var html="";
                    for(var i=0;i<this.mactype.length;i++){
                        html+=`<li title="${this.mactype[i].macType}" id="${this.mactype[i].brand_id}">
                        <a href="/recovery/${this.mactype[i].id}">
                            <div class="pro-img"><img src="/Uploads/${this.mactype[i].macPhoto}"></div>
                            <h2 class="pro-name">${this.mactype[i].macType}</h2>
                            <p class="pro-num">目前已收${this.mactype[i].recoveryNum}台</p>
                        </a>
                    </li>`;
                    };
                    $(html).appendTo($('#macList'));
                })
                $('#isMore').show();
            },
            brmore:function(){
                $('.switch_mine').parents('ul').css('height', 'auto');
                $('.switch_mine').find('span').text('没有更多');
                //$(this).parents('ul:first').append($(this).parent());
                axios.post("/brmore").then(res=>{
                    this.brand=res.data;

                })
            },
            macmore:function(){

                var id=$('#macList li').last().prop('id');
                axios.get("/macmore/"+id).then(res=>{
                    //console.log(res.data);
                    this.mactype=res.data;
                })
                $('#isMore').hide();
            },
            ac:function(item){
                //console.log(item.brandName,item.id);
            },

        }

    }


</script>

<style scoped>

</style>