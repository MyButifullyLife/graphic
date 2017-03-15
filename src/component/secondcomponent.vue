<template>
    <div id="secondcomponent">
        <h1>I am another page</h1>
        <a> written by {{ author }} </a>
        <p> 感谢 <a href="https://github.com/showonne">showonne</a>大神的技术指导</p>
        <ul>
            <li v-for="article in articles">
                {{article.title}}
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                author: "微信公众号 jinkey-love",
                articles: [
                    ]
            }
        },
        props:{
            //可以是数组或对象，用于接收来自父组件的数据。props 可以是简单的数组，或者使用对象作为替代，对象允许配置高级选项，如类型检测、自定义校验和设置默认值。
        },
        methods:{

        },
        mounted: function() {
            this.$http.jsonp('https://api.douban.com/v2/movie/top250?count=10', {}, {
                headers: {

                },
                emulateJSON: true
            }).then(function(response) {
                // 这里是处理正确的回调
                this.articles = response.data.subjects;
                // this.articles = response.data["subjects"] 也可以
            }, function(response) {
                // 这里是处理错误的回调
                console.log(response)
            });
        },
        beforeCreate: function () {
            console.group('beforeCreate 创建前状态===============》');
                console.log("%c%s", "color:red" , "el     : " + this.$el); //undefined
                console.log("%c%s", "color:red","data   : " + this.$data); //undefined
                console.log("%c%s", "color:red","message: " + this.message)
        },
        created: function () {
            console.group('created 创建完毕状态===============》');
            console.log("%c%s", "color:red","el     : " + this.$el); //undefined
            console.log("%c%s", "color:red","data   : " + this.$data); //已被初始化
            console.log("%c%s", "color:red","message: " + this.message); //已被初始化
        },
        beforeMount: function () {
            console.group('beforeMount 挂载前状态===============》');
            console.log("%c%s", "color:red","el     : " + (this.$el)); //已被初始化
            console.log(this.$el);
            console.log("%c%s", "color:red","data   : " + this.$data); //已被初始化
            console.log("%c%s", "color:red","message: " + this.message); //已被初始化
        },
//        mounted: function () {
//            console.group('mounted 挂载结束状态===============》');
//            console.log("%c%s", "color:red","el     : " + this.$el); //已被初始化
//            console.log(this.$el);
//            console.log("%c%s", "color:red","data   : " + this.$data); //已被初始化
//            console.log("%c%s", "color:red","message: " + this.message); //已被初始化
//        },
        beforeUpdate: function () {
            console.group('beforeUpdate 更新前状态===============》');
            console.log("%c%s", "color:red","el     : " + this.$el);
            console.log(this.$el);
            console.log("%c%s", "color:red","data   : " + this.$data);
            console.log("%c%s", "color:red","message: " + this.message);
        },
        updated: function () {
            console.group('updated 更新完成状态===============》');
            console.log("%c%s", "color:red","el     : " + this.$el);
            console.log(this.$el);
            console.log("%c%s", "color:red","data   : " + this.$data);
            console.log("%c%s", "color:red","message: " + this.message);
        },
        beforeDestroy: function () {
            console.group('beforeDestroy 销毁前状态===============》');
            console.log("%c%s", "color:red","el     : " + this.$el);
            console.log(this.$el);
            console.log("%c%s", "color:red","data   : " + this.$data);
            console.log("%c%s", "color:red","message: " + this.message);
        },
        destroyed: function () {
            console.group('destroyed 销毁完成状态===============》');
            console.log("%c%s", "color:red","el     : " + this.$el);
            console.log(this.$el);
            console.log("%c%s", "color:red","data   : " + this.$data);
            console.log("%c%s", "color:red","message: " + this.message)
        }
    }
</script>

<style>

</style>
