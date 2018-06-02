<template>
    <div>
        <div class="w1100 center">
            <div class="centerleft">
                <h3><span>新闻动态</span></h3>
                <h3 v-for="item in type" >
                    <a href="##" target="_self" class="q_01" :class="{on:item==on}" @click="ty(item)">{{item.name}}<img src="/hom/images/z_02.png" /></a>
                </h3>
                <h3><span>帮助中心</span></h3>
                <h3>
                    <a href="1-1.html" rel="nofollow" target="_self" class="q_03 ">
                        常见问题
                        <img src="/hom/images/z_02.png" />
                    </a>
                </h3>
                <h3>
                    <a href="2-1.html" rel="nofollow" target="_self" class="q_05 ">
                        服务条款
                        <img src="/hom/images/z_02.png" />
                    </a>
                </h3>
                <h3>
                    <a href="3-1.html" target="_self" class="q_01 ">易机课堂<img src="/hom/images/z_02.png" /></a>
                </h3>
                <!--<h3>
                <a href="/helpCenter/4.html" rel="nofollow" target="_self" class="q_06 ">
                    担保交易
                    <img src="/resources/v2/images/z_02.png"/>
                </a>
            </h3>-->
                <h3><span>关于我们</span></h3>
                <h3>
                    <a href="about_yjw.html" rel="nofollow" class="q_02 " target="_self">关于易机网<img src="/hom/images/z_02.png" /></a>
                </h3>
                <h3>
                    <a href="12.html" rel="nofollow" class="q_04 " target="_self">联系我们<img src="/hom/images/z_02.png" /></a>
                </h3>
                <h3>
                    <a href="13.html" rel="nofollow" class="q_07 " target="_self">加入我们<img src="/hom/images/z_02.png" /></a>
                </h3>
            </div>
            <div class="centeright pt20">
                <div class="news">
                    <div>
                        <ul>
                            <li v-for="item in detail">
                                <a class="tonewsdetail"  :href="/news/+item.id" target="_self" data-default="/news36/3639.html" data-currNo="1" data-offset="0"><strong>{{item.title}}</strong><span>{{item.created_at}}</span></a>
                            </li>
                        </ul>
                    </div>
                    <div class="page page-public page-view clearfix" id="pagerDiv">
                        <div class="page-wrap page-item" id="page-ui">
                            <div class="page-num clearfix">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "news",
        data(){
            return {
                type:[],//新闻分类
                detail:[],//新闻列表
                on:0,
            }
        },
        created(){
            axios.get("/news/loade").then(res=>{
                this.type=res.data[0];
                this.detail=res.data[1];
            })
        },

        methods:{
            ty(item){
                this.on=item;
                var id=item.id;
                axios.get("/news/type/"+id).then(res=>{
                    this.detail=res.data;
                })
            },
        },



    }
</script>

<style scoped>

</style>