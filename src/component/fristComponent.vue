<template>
    <div id="fristComponent">
        <div>{{obj.uid}}</div>
           <div class="title" v-show="obj.title != null "  @mouseover="overTitle()"     >
               <span class ='title-del'   @click="delTitle()">删除</span>
             <p contenteditable="true">
                 {{obj.title}}
             </p>
           </div>
           <div class="desc"   v-show="obj.desc != null" >
               <span class ='title-del desc-del'   @click="delDesc()">删除</span>
           <p contenteditable="true">
               {{obj.desc}}
           </p>

           </div>
           <div class="img-cot"   v-show="obj.img != null"  @mouseover=" overImg($event)" @mouseout="outImg($event)">
               <div class="img-over" v-show="isShowImgCot" >
                   <img src="src/img/add.png"  @click="takePhoto(obj)" alt="">
                   <img src="src/img/del.png"  @click="delImg()"   alt="">
               </div>
               <img :src="obj.img" alt="">
           </div>
    </div>
</template>

<script >
    export default {
        data() {
            return {
                isShowImgCot:false
            }
        },
        props:['obj'],
        methods:{
            overImg:function(e){
                this.isShowImgCot = true;
            },
            outImg:function(e){
                this.isShowImgCot = false;
            },
            takePhoto:function(obj){
                console.log(obj);
                this.$emit('message', obj);
            },
            overTitle:function(){

            },
            delTitle:function(){
                this.obj.title = null;
            },
            delDesc:function(){
                this.obj.desc = null;
            },
            delImg:function(){
                this.obj.img = null;
            }

        },
        mounted:function(){
            var _this = this;
        }
    }
</script>

<style lang="less" scoped>
    @import "../css/fristComponent.less";
</style>
