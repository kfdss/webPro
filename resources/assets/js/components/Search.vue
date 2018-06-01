<template>
    <div>
        <form id="sercheForm">
            <div class="search-all">
                <input type="text" name="keyWord" id="keyWord" autocomplete="off" placeholder="请输入想要回收手机/平板机型">
                <a href="##" class="search" @click="search()" id="search"><i class="search-icon" id="searchBnt">搜索</i></a>
            </div>
            <div class="search-recycle-end hide" id="searchSelect1">
                <ul id="searchList"></ul>
            </div>
            <div class="search-select hide" id="searchSelect2">
                <h2 class="name">热门推荐</h2>
                <div class="hot-tj">
                    <a href="javascript:;">普通环保机型</a>
                    <a href="javascript:;">触屏环保机型</a>
                    <a href="javascript:;">苹果 iPhone 6</a>
                    <a href="javascript:;">苹果 iPhone 5S</a>
                    <a href="javascript:;">苹果iPhone 6s</a>
                    <a href="javascript:;">苹果 iPhone 6 Plus</a>
                    <a href="javascript:;">苹果iPhone 6S Plus</a>
                    <a href="javascript:;">苹果 iPhone 4s</a>
                </div>
                <h2 class="name">搜索历史</h2>
                <div class="history-search">

                    暂无
                </div>
            </div>
        </form>
    </div>
</template>

<script>
    export default {
        name: "search",
        data(){
            return {
                searchList:[],
            }
        },
        methods:{
            search:function(){
                var txt=$('#keyWord').val();
                if(!txt){
                    alert('请输入搜索内容!!!');
                    return
                }
                //console.log(txt);
                axios.post("/search",{"txt":txt}).then(res=>{
                    this.searchList=res.data;
                    console.log(this.searchList);
                    $("#macList li").remove();
                    var html="";
                    for(var i=0;i<this.searchList.length;i++){
                        html+=`<li title="${this.searchList[i].macType}" id="${this.searchList[i].brand_id}">
                        <a href="/recovery/${this.searchList[i].id}">
                            <div class="pro-img"><img src="/Uploads/${this.searchList[i].macPhoto}"></div>
                            <h2 class="pro-name">${this.searchList[i].macType}</h2>
                            <p class="pro-num">目前已收${this.searchList[i].recoveryNum}台</p>
                        </a>
                    </li>`;
                    };
                    $(html).appendTo($('#macList'));



                })
            },
        }
    }
</script>

<style scoped>

</style>