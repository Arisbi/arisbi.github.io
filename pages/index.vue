<template>
  <div>
    <b-container fluid class="Intro">
      <b-row class="logo">
        <LogoBig class="position-logo" />
      </b-row>
      <b-row class="words">
        <div class="marquee">
          <div class="word">Welcome 歓迎 Willkommen</div>
          <div class="word">Welcome 歓迎 Willkommen</div>
        </div>
        <div class="marquee">
          <div class="word">Bienvenue Bienvenid@</div>
          <div class="word">Bienvenue Bienvenid@</div>
        </div>
        <div class="marquee">
          <div class="word">добро пожаловать</div>
          <div class="word">добро пожаловать</div>
        </div>
        <div class="marquee">
          <div class="word">Welcome 歓迎 Willkommen</div>
          <div class="word">Welcome 歓迎 Willkommen</div>
        </div>
      </b-row>
    </b-container>

    <IndexMobile class="mobile"/>
      <div class="desktop">
        <h1>Desktop</h1>
        <div class="leng">
            <nuxt-link :to="switchLocalePath('en')">En</nuxt-link>
            <nuxt-link :to="switchLocalePath('es')">Es</nuxt-link>
      </div>

      <b-container fluid id="about" class="About">
        <b-row>
          <b-col cols="7">
            <b-row class="aboutWave">
              <div class="wave">
                <Wave/>
              </div>
              <span>Acerca de</span>
            </b-row>
            <h1 class="mt-4 resume">Diseñadora Gráfica.
                Experiencia en UX / UI.
                Entusiasta del código.
                Buscando mejorar productos.</h1>
            <img src="~/static/Astronaut-Aris2.png" alt="" class="profile-img">
          </b-col>
          <b-col cols="5"  class="description">
            <p>{{ $t('description') }}</p>
            <p>{{ $t('description2') }}</p>
            <div class="git">
              <p>Mi github</p>
              <a href="https://github.com/Arisbi" target="_blank">ARISBI.</a>
            </div>
              <b-row class="services">
                <img src="~/assets/UxUi.svg" alt="" class="">
                <img src="~/assets/Front.svg" alt="" class="">
                <img src="~/assets/Graphic.svg" alt="" class="">
              </b-row>
          </b-col>
          <BigCircle class="bigCircle"/>
          <SmallCircle class="smallCircle"/>
        </b-row>
      </b-container>

      <b-container fluid id="work" class="Projects">
          <b-col>
            <h2>Proyectos.</h2>
          </b-col>
          <b-col class="projectsOnly">
              <ul class="text-right">
                <li>
                  <a id="menu_item" href="/projects">
                    <span>01</span>
                    Proyectos
                    <img class="menu_image" src="@/static/img/Astronaut-Aris2.png" style="object-fit: cover" alt="">
                  </a>
                </li>
                <li>
                  <a id="menu_item2" href="/illustrations">
                  <span>02</span>
                  Ilustraciones
                  <img class="menu_image2" src="@/assets/Astronaut-Aris2.png" style="object-fit: cover" alt="">
                </a>
                </li>
                <li>
                  <a id="menu_item3" href="/photography">
                  <span>03</span>
                  Fotografia
                  <img class="menu_image3" src="@/assets/Astronaut-Aris2.png" style="object-fit: cover" alt="">
                </a>
                </li>
                <li>
                <a id="menu_item4" href="/motiongraphics">
                  <span>04</span>
                  Motion Graphics
                  <img class="menu_image4" src="@/assets/Astronaut-Aris2.png" style="object-fit: cover" alt="">
                </a>
                </li>
                <li>
                  <a id="menu_item5" href="/webdesign">
                  <span>05</span>
                  UI Web Design
                  <img class="menu_image5" src="@/assets/Astronaut-Aris2.png" style="object-fit: cover" alt="">
                </a>
                </li>
            </ul>
          </b-col>
      </b-container>
      <b-container fluid id="contact" class="Contact">
        <b-row>
          <b-col md="6" class="information">
            <hr class="line-contact">
            <p class="title-contact">Contacto</p>
            <ul>
              <li>
                <a id="socialmed1" href="">
                  Dribble
                  <img class="socialmed1" src="@/assets/Astronaut-Aris2.png" style="object-fit: cover" alt="">
                </a>
              </li>
              <li>
                <a id="socialmed2" href="">
                  Linkedin
                  <img class="socialmed2" src="@/assets/Astronaut-Aris2.png" style="object-fit: cover" alt="">
                </a>
              </li>
              <li>
                <a id="socialmed3" href="">
                  Behance
                  <img class="socialmed3" src="@/assets/Astronaut-Aris2.png" style="object-fit: cover" alt="">
                </a>
              </li>
              <li>
                <a id="socialmed4" href="">
                  hello@arisbi
                  <img class="socialmed4" src="@/assets/Astronaut-Aris2.png" style="object-fit: cover" alt="">
                </a>
              </li>
            </ul>
            <ByCh class="bych"/>
          </b-col>
          <b-col md="6">
            <Lines class="lines"/>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<script>
import {gsap} from 'gsap';
import LogoBig from '~/components/LogoChBig'
import Wave from '~/components/Wave'
import BigCircle from '~/components/BigCircle'
import SmallCircle from '~/components/SmallCircle'
import Lines from '~/components/Lines'
import ByCh from '~/components/ByCh'
import IndexMobile from '~/components/mobile/Mobindex'
export default {
  components:{
    LogoBig,
    Wave,
    BigCircle,
    SmallCircle,
    Lines,
    ByCh,
    IndexMobile
  },
  mounted: function() {
    this.startDesktop()
  },
  methods: {
    startDesktop: function(){

        $('#menu_item, #menu_item2, #menu_item3, #menu_item4, #menu_item5').mousemove(function(e) {
          $('.menu_image, .menu_image2, .menu_image3, .menu_image4, .menu_image5').offset({
              left: e.pageX + 20 ,
              top: e.pageY - 50 ,
          });
        });
        // Tengo multiples elementos (.menu_image, .menu_image2, .menu_image3) que ocupan diferentes y los mismos 
        // eventos (mouseenter) pero con diferente funcion (.css display block, .css display none) https://stackoverflow.com/questions/19257752/jquery-same-function-for-multiple-elements-and-multiple-events/19257812

         $("#menu_item").mouseenter(function(){
           $(".menu_image").css({display: 'block'});
         });
         $("#menu_item").mouseleave(function(){
           $(".menu_image").css({display: 'none'});
         });

          $("#menu_item2").mouseenter(function(){
             $(".menu_image2").css({display: 'block',});
           });
           $("#menu_item2").mouseleave(function(){
             $(".menu_image2").css({display: 'none'});
           });

           $("#menu_item3").mouseenter(function(){
             $(".menu_image3").css({display: 'block',});
           });
           $("#menu_item3").mouseleave(function(){
             $(".menu_image3").css({display: 'none'});
           });

           $("#menu_item4").mouseenter(function(){
             $(".menu_image4").css({display: 'block',});
           });
           $("#menu_item4").mouseleave(function(){
             $(".menu_image4").css({display: 'none'});
           });

           $("#menu_item5").mouseenter(function(){
             $(".menu_image5").css({display: 'block',});
           });
           $("#menu_item5").mouseleave(function(){
             $(".menu_image5").css({display: 'none'});
           });

            $("#socialmed1").mouseenter(function(){
             $(".socialmed1").css({display: 'block',});
           });
           $("#socialmed1").mouseleave(function(){
             $(".socialmed1").css({display: 'none'});
           }); 

           $("#socialmed2").mouseenter(function(){
             $(".socialmed2").css({display: 'block',});
           });
           $("#socialmed2").mouseleave(function(){
             $(".socialmed2").css({display: 'none'});
           });

           $("#socialmed3").mouseenter(function(){
             $(".socialmed3").css({display: 'block',});
           });
           $("#socialmed3").mouseleave(function(){
             $(".socialmed3").css({display: 'none'});
           });

           $("#socialmed4").mouseenter(function(){
             $(".socialmed4").css({display: 'block',});
           });
           $("#socialmed4").mouseleave(function(){
             $(".socialmed4").css({display: 'none'});
           });
    }
  },
}
</script>

<style lang="scss" scoped>
.glass{
  position: absolute;
  height: 700px;
  width: 1200px;
}
.Intro{
  height: 600px;
  .logo{
    overflow: hidden;
    .position-logo{
      width: 37rem;
      position: relative;
      margin-top: 200px;
      margin-left: auto;
      margin-right: auto;
    }
  }
  .words{
    position: absolute;
    top: 0;
    z-index: -1;
    overflow: hidden;
    white-space: nowrap;
    line-height: 10rem;
    width: 100vw;
    .marquee{
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: flex-start;
      .word{
        font-size: 8em;
        color: var(--color-primary);
        font-weight: 700;
        text-transform: uppercase;
        animation: animate 20s linear infinite;
      }
    }
  }
  @keyframes animate {
    from { transform: translateX(0); }
    to { transform: translateX(-100%); }
  }
}
.wave {
  width: 30px;
  overflow: hidden;
  svg {
    position: relative;
    left: -50px;
    width: 100px;
    animation: wave 2s linear infinite;
  }
@keyframes wave {
    0% { 
      left: -80px; 
    }
    100% { 
      left: 0; 
    }
  }
}

@media (min-width: 720px) { 
  .mobile{
    display: none;
  }
  .desktop{
    display: block;
  }
  .leng{
    margin: 0 25px;
    width: 35px;
    position: fixed;
    top: 85vh;
    a{
      color: var(--color);
      display: block;
      font-weight: 400;
      font-size: 24px;
    }
    a:hover{
      font-weight: 700;
    }
  }
  .About{
    margin-top: 150px;
    padding: 0px 50px;
    .aboutWave{
      margin-left: -30px;
      font-size: 18px;
      .wave{
        width: 30px;
        svg{
          width: 100px;
        }
      }
    }
    .resume{
      font-size: 2.8rem;
    }
    .profile-img{
      width: 18rem;
      position: absolute;
      z-index: -1;
      top: 150px;
      left: 120px;
    }
    .description{
      margin-top: 120px;
      padding: 0 0px 0 25px;
    }
    .git{
      text-align: left;
      font-size: 16px;
      margin-top: 0px;
      p{
        display: inline;
      }
      a{
      display: inline;
      margin-left: 8px;
      color: var(--color);
      text-decoration: underline;
      font-weight: 500;
      }
    }
    .services{
      img{
        width: 5.5rem;
        margin: 20px 22px;
      }
    }
    .bigCircle{
      position: absolute;
      z-index: -2;
      top: 700px;
    }
    .smallCircle{
      position: absolute;
      right: 100px;
      z-index: -1;
    }
  }
  .Projects{
    margin-top: 300px;
    h2{
      font-size: 5rem;
      text-transform: uppercase;
      font-weight: 400;
    }
    .menu_image, .menu_image2, .menu_image3, .menu_image4, .menu_image5{
      display: none;
      position: absolute;
      width: 300px;
      height: 200px;
      z-index: -1;
    }
    .projectsOnly{
      margin-top: -70px;
      ul{
        padding: 20px;
        list-style: none;
        li{
          margin-bottom: 30px;
          a{
            position: relative;
            color: var(--color);
            font-size: 42px;
            text-transform: uppercase;
            z-index: 1;
            font-weight: 400;
            letter-spacing: 14px;
            span{
              position: relative;
              font-size: 35px;
              bottom: 20px;
              left: 16px;
              letter-spacing: 8px;
              font-weight: 200;
            }
          }
          a:hover{
            font-weight: 800;
            text-decoration: none;
            color: #000000;
            z-index: 1;
          }
        }
      }
    }
  }
  .Contact{
    background-color: var(--bg-secondary);
    padding: 0 100px;
    overflow: hidden;
    .information{
      padding: 0px 0px 30px 50px;
      .line-contact{
        transform: rotate(-90deg);
        border: 1px solid var(--color);
        width: 10rem;
        left: -82px;
        top: 55px;
        position: absolute;
      }
      .title-contact{
        transform: rotate(-90deg);
        position: absolute;
        color: var(--color);
        left: -6rem;
        top: 240px;
        font-size: 2.2rem;
        text-transform: uppercase;
        font-weight: 600;
      }
      ul{
        padding: 70px 100px;
        list-style: none;
        li{
            padding-left: 10px;
            padding-top: 30px;
        a{
            color: var(--color);
            font-size: 36px;
            font-weight: 600;
        }
        a:hover{
            font-weight: 600;
            color: var(--color);
            transition: 1s;
            z-index: 1;
          }
        }
      }
      .bych{
        margin-left: -60px;
        margin-top: -20px;
        margin-bottom: -30px;
      }
    }
    .lines{
      position: absolute;
      width: 680px;
      right: -120px;
    }
    .socialmed1, .socialmed2, .socialmed3, .socialmed4{
      display: none;
      width: 17rem;
      height: 30rem;
      position: absolute;
      bottom: 0px;
      left: 45rem;
      z-index: 2;
    }
  }
}
</style>