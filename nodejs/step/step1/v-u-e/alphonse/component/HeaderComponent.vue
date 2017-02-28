<template>
    <div class="index-title">
        <div class="index-title-inner">welcome</div>
    </div>
</template>
<style>
    body {
        background-color: #f6f6f6;
    }
    .index-title{
        height:120px;
        width:100%;
        line-height: 120px;;
    }
    .index-title-inner{
        display:inline-block;
        height:60px;
        line-height: 60px;
        text-align: center;
        margin: 0px auto;
    }
</style>
<script>
    export default{
        data(){
            return {
                msg: 'hello vue'
            }
        }
    }
</script>
