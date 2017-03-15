<template>
    <div id="add">



    </div>
</template>

<script >
    export default {
        data() {
            return {

            }
        },
        props:['text']
        ,
        methods:{
        },
        mounted: function() {
                 console.log(this.text);
        }
    }
</script>

<style lang="less" scoped>
    @import "../css/add.less";
</style>