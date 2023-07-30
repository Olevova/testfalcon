<template>
    <div :class="['blogpost', {'card-big': big}]">
       <div class="blogpost__wrapper">
            <img :src='imgSrc' alt="post" class="blogpost__img">
            <div class="blogpost__wrapper_text">
              <div class="blogpost__desc">
                {{description}}
              </div >
             <div class="blogpost__date"> 
             <div  v-if='author' class="blogpost__autor">
              <div class="blogpost__autor--img"><img :src='author.photo' alt="author.name"></div>
              <span>{{author.name}}</span>
             </div>
                {{date}}   
              </div>
            </div>
          </div>
    </div>
</template>

<script>
    export default {
        name:'BlogPost',
        props:{
            description:{
                type:String,
                defualt:''
            },
            date:{
                type:String,
                defualt:''
            },
            imgSrc:{
                type:String,
                defualt:''
            },
           author: {
                type: Object,
                 default: null,
              },
             big:{
                type:Boolean,
                defualt: false
              }
        }
    }
</script>

<style lang="scss" scoped>
// blogpost.scss

.blogpost {
  width: 282px;
  height: 282px;
  border-radius: 14px;
  overflow: hidden; 
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: all 300ms linear;
   &:hover{
      scale: 1.02;
    }


  &__wrapper {
    position: relative;
    display: flex;
    flex-direction: column;
    height: 100%;
    cursor: pointer;
   

  }

  &__img {
    width: 100%;
    height: 100%;
    object-fit: cover; 
  }

  &__wrapper_text {
    position: absolute;
    bottom: 16px;
    left: 16px;
    padding-right: 23px;
    align-items: flex-start;
    flex-direction: column;
    color:#FFFFFF
  }

  &__desc {
    font-family: Montserrat;
    font-size: 24px;
    font-weight: 700;
    line-height: 29px;
    letter-spacing: 0em;
    text-align: left;

  }

  &__date {
    display: flex;
    align-items: center;
    font-family: Montserrat;
    font-size: 14px;
    font-weight: 400;
    line-height: 28px;
    letter-spacing: 0em;
    text-align: left;
    margin-top: 6px ;

  }
   &.card-big {
    height: 604px;
    width: 604px;
    

  }
  &__autor{
    display: flex;
    align-items: center;
    margin-right: 35px;
    
    &--img{
      width: 30px;
      height: 30px;
      border-radius: 50%;
      overflow: hidden;
      margin-right: 9px;
    }
  }
}

</style>