<template>
  <div id="app">
    <div v-for="item in item ">
      <firstcomponent    v-on:message="recieveMessage"   :obj.sync="item" ></firstcomponent>
    </div>
    <input type="file" id="photo"  style="width:0;">

    <div  class="add">
        <div class="addPhoto" @click="addItem">
          <img src="src/img/add.jpg" alt="">
        </div>
    </div>

    <!--<div class="notice">-->
          <!--<div class="title">-->
             <!--使用说明-->
          <!--</div>-->
          <!--<div class="desc">-->
              <!--1.点击添加按钮，添加一个模块<br>-->
              <!--2.将鼠标移动到文字上，会出现相应提示操作，文字可以自由编辑<br>-->
              <!--3.将鼠标移动到图片上，会出现添加图片图标和删除图片图标-->
          <!--</div>-->
           <!--<div class="title">-->
               <!--截图说明-->
           <!--</div>-->
          <!--<div class="desc">-->
            <!--<p>-->
              <!--http://jingyan.baidu.com/article/6c67b1d6c9f0f12787bb1ea7.html-->
            <!--</p>-->
          <!--</div>-->
    <!--</div>-->
    <router-view class="view"></router-view>
  </div>
</template>

<script>
import firstcomponent from './component/fristComponent.vue';
export default {
  name: 'app',
  data () {
    return {
      item:[
        {
          id:1,
          title:'电影主题',
          desc:'电影描述',
          img:'src/img/22.jpg' //电影图片
        },
        {
          id:2,
          title:'电影主题2',
          desc:'电影描述2',
          img:'src/img/2.jpg' //电影图片
        }
      ],
      photo:'../img/22.jpg',
      fileDom:null,
      canGet:true,
      nowItem:null
    }
  },
  methods:{
    addItem:function(){
      this.item.push({
        id:this.item.length +1,
        title:'电影主题',
        desc:'电影描述',
        img:'src/img/22.jpg' //电影图片
      })
    },
    recieveMessage:function(obj){
      this.fileDom.click();
      if(this.canGet){
        this.canGet = false;
      } else{
        alert('上一张图片还在路上');
        return
      }
       for (let i = 0 ; i < this.item.length; i++){
          if(obj.id == this.item[i].id){
            this.nowItem = this.item[i];
            break;
          }
       }
    }
  },
  mounted:function(){
    var _this = this;
    this.fileDom = document.getElementById('photo');
    this.fileDom.onchange = function(){
      var reader = new FileReader();
      reader.readAsDataURL(this.files[0]);
      reader.onload = function(e) {
        _this.canGet = true;
        if(_this.nowItem == null){
           return;
        }else{
          if( /image/.test(e.target.result.slice(0,20))){
            _this.nowItem.img =  e.target.result;
          }else{
            alert('不是图片，请重新上传');
          }

        }
      }
    };


  },
  computed:{


  },
  components:{
    firstcomponent
  }
}
</script>
<style lang="less" scoped>
   @import "css/app.less";
</style>
