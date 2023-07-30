<template>
    <footer class="footer">
        <Container>
            <section class="footer__container">

      <div class="logo">LOGO</div>

    <div class="footer__container-link">
      <a href="#"> About Us</a>
      <a href="#"> Blog</a>
      <a href="#"> Support</a>
    </div>

    <div class="footer__container-info">
      <a href="#"> Terms & Conditions</a>
      <a href="#"> Privacy Policy</a >
      <a href="#"> Cookies</a>
    </div>

    <div class="footer__container-icons">
      <a href="#">
        <img src="/image/footer/facebook.svg" alt="facebook">
      </a>
      <a href="#">
        <img src="/image/footer/instagram.svg" alt="instagram">
      </a>
      <a href="#">
        <img src="/image/footer/youtube.svg" alt="youTube">
      </a >
      <a href="/sendform">
        <img src="/image/footer/pinterest.svg" alt="pinterest">
      </a >
    </div>
            </section>

        </Container>

    </footer>
</template>

<script>
import Container from "../Shared/Container.vue"
    export default {
        name: 'FooterApp',
        components: {
            Container
        }
    }
</script>

<style lang="scss" scoped>
    .footer {
        width: 100%;
        height: 302px;
        background-color: rgba(66, 60, 78, 1);
        color: white;
        

         &__container{
        display: flex;
        flex-direction: row;
        font-size: 24px;
        font-weight: 400;
        line-height: 50px;
        padding-top: 80px;
        padding-bottom: 80px;
        
        &-link{
            display: flex;
           flex-direction: column;
           margin-left: 92px;
           width: 286px;
        }
        &-info{
            display: flex;
           flex-direction: column;
           margin-left: 36px;
           width: 286px;
        }
        &-icons{
        display: flex;
           flex-direction: row;
           padding-left: 36px;
           padding-top: 5px;
          >a{
            margin-right: 20px;
          }
           
        }

    }
    }
    .logo{

font-size: 40px;
font-weight: 700;
line-height: 49px;


    }

   
</style>
