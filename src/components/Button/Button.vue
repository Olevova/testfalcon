<template>
    <button v-bind:type='type' :class='{btn:true, little: little}'>  
        <!-- slot></slot>  < -->
        {{text}}
    </button>
</template>

<script>
    export default {
        name:'ButtonApp',
        props:{
        type:{
            type:String,
            default:'button'
        },
        little:{
            type:Boolean,
            default:false
        },
        text:{
            type:String,
            default:'Download'
        }
        }
        }
</script>

<style lang='scss' scoped>
.btn{
    width: 392px;
    height: 58px;
    /* padding-top: 15px;
    padding-bottom: 15px; */
    border-radius: 100px;
    border: inherit;
    color: #FFFFFF;
    font-size: 18px;
    font-weight: 500;
    line-height: 20px;
    background-color: #6750A4;
    cursor: pointer;
    &.little{
        width: 174px;
        height: 44px;
    }
}

</style>