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

      <div class="leng">
          <nuxt-link :to="switchLocalePath('en')">En</nuxt-link>
          <nuxt-link :to="switchLocalePath('es')">Es</nuxt-link>
      </div>

      <b-container fluid id="about" class="About">
        <b-row>
          <b-col cols="12" md="6" lg="7">
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
          <b-col cols="12" md="5"  class="description">
            <p>{{ $t('description') }}</p>
            <p>{{ $t('description2') }}</p>
            <div class="git">
              <p>Mi github</p>
              <a href="https://github.com/Arisbi" target="_blank">ARISBI.</a>
            </div>
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
                    <img class="menu_image" src="@/assets/Astronaut-Aris2.png" style="object-fit: cover" alt="">
                  </a>
                </li>
                <li>
                  <a id="menu_item2" href="/illustrations">
                  <span>02</span>
                  Ilustraciones
                  <img class="menu_image2" src="@/static/astronaut12.png" style="object-fit: cover" alt="">
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
                  <img class="socialmed2" src="@/assets/astronaut12.png" style="object-fit: cover" alt="">
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
</template>

<script>
import {gsap} from 'gsap';
import LogoBig from '~/components/LogoChBig'
import Wave from '~/components/Wave'
import BigCircle from '~/components/BigCircle'
import SmallCircle from '~/components/SmallCircle'
import Lines from '~/components/Lines'
import ByCh from '~/components/ByCh'
export default {
  components:{
    LogoBig,
    Wave,
    BigCircle,
    SmallCircle,
    Lines,
    ByCh,
  },
  mounted: function() {
    this.startDesktop()
  },
  methods: {
    startDesktop: function(){

      window.scrollTo(window.scrollX, window.scrollY - 100);

      const mediaQuery = window.matchMedia('(max-width: 720px)');
      // Register event listener
        mediaQuery.addListener(screenTest)

      function screenTest(e) {
        if (e.matches) {
          /* the viewport is less than than 720 pixels wide */
          $("#menu_item").mouseenter(function(){
           $(".menu_image").css({display: 'inline-block'});
         });
          $("#menu_item").mouseleave(function(){
           $(".menu_image").css({display: 'block'});
         });

         $("#menu_item2").mouseenter(function(){
           $(".menu_image2").css({display: 'inline-block'});
         });
         $("#menu_item3").mouseenter(function(){
           $(".menu_image3").css({display: 'inline-block'});
         });
         $("#menu_item4").mouseenter(function(){
           $(".menu_image4").css({display: 'inline-block'});
         });
         $("#menu_item5").mouseenter(function(){
           $(".menu_image5").css({display: 'inline-block'});
         });
        } 
        else {

          $('#menu_item, #menu_item2, #menu_item3, #menu_item4, #menu_item5').mousemove(function(e) {
          $('.menu_image, .menu_image2, .menu_image3, .menu_image4, .menu_image5').offset({
              left: e.pageX + 20 ,
              top: e.pageY - 150 ,
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
           $(".menu_image2").css({display: 'block'});
         });
         $("#menu_item2").mouseleave(function(){
           $(".menu_image2").css({display: 'none'});
         });

         $("#menu_item3").mouseenter(function(){
           $(".menu_image3").css({display: 'block'});
         });
         $("#menu_item3").mouseleave(function(){
           $(".menu_image3").css({display: 'none'});
         });

         $("#menu_item4").mouseenter(function(){
           $(".menu_image4").css({display: 'block'});
         });
         $("#menu_item4").mouseleave(function(){
           $(".menu_image4").css({display: 'none'});
         });

         $("#menu_item5").mouseenter(function(){
           $(".menu_image5").css({display: 'block'});
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
      }
        // Initial check
        screenTest(mediaQuery);
    }
  },
}
</script>

<style lang="scss" scoped>

.mobile{
    display: block;
}
.desktop{
display: none;
}

#about:before, #work:before{
  height: 100px;
  display: block;
  content: '';
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
.leng{
    margin: 0px 10px;
    width: 35px;
    position: fixed;
    top: 80vh;
    a{
      color: var(--color);
      display: block;
      font-weight: 400;
      font-size: 24px;
      margin-bottom: 10px;
    }
    a:hover{
      font-weight: 700;
    }
  }


.About{
  margin-top: 150px;
  padding: 0px 50px;
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
  h1{
    font-size: 2.3rem;
  }
  .profile-img{
    width: 25rem;
    position: relative;
    z-index: -1;
    margin-top: -105px;
    left: 0px;
  }
  .description{
    margin-top: 50px;
    padding: 0 17px;
    font-size: 18px;
  }
  .git{
    text-align: right;
    font-size: 22px;
    margin-top: 65px;
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
  .bigCircle{
    position: absolute;
    left: -110px;
    z-index: -2;
    width: 38rem;
  }
}
.Projects{
    margin-top: 0px;
    h2{
      font-size: 3rem;
      text-align: right;
      text-transform: uppercase;
      font-weight: 400;
      margin-bottom: 100px;
    }
    .menu_image, .menu_image3, .menu_image5{
        width: 25rem;
        margin: 40px 0px;
    }
    .menu_image2, .menu_image4{
        width: 25rem;
        margin: 40px 0px;
    }
    .projectsOnly{
      margin-top: 0px;
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
            letter-spacing: 5px;
            text-decoration-line: underline;
            line-height: 0.8;
            span{
              position: relative;
              z-index: -2;
              font-size: 130px;
              letter-spacing: 8px;
              font-weight: 800;
              float: left;
              -webkit-text-stroke: 1px var(--color);;
              -webkit-text-fill-color: rgba(255, 255, 255, 0);
              text-decoration-line: none;
            }
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
        padding: 70px 40px;
        list-style: none;
        li{
            padding-left: 10px;
            padding-top: 30px;
        a{
            color: var(--color);
            font-size: 36px;
            font-weight: 600;
        }
        img{
          display: none;
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
        margin-top: -20px;
        margin-bottom: -30px;
      }
    }
    .lines{
      position: absolute;
      width: 680px;
      right: -120px;
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
    margin-top: 0px;
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
      position: relative;
      z-index: -1;
      top: -100px;
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
    margin-top: -100px;
    h2{
      font-size: 5rem;
      text-align: left;
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
            text-decoration-line: none;
            span{
              position: relative;
              font-size: 35px;
              bottom: 20px;
              left: 16px;
              float: none;
              letter-spacing: 8px;
              font-weight: 200;
              -webkit-text-stroke-width: medium;
            }
          }
          a:hover{
            font-weight: 800;
            text-decoration: none;
            color: var(--color-hover);
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

@media (min-width: 1440px) {
  .Intro{
    height: 700px;
    .logo{
      .position-logo{
        width: 42rem;
        margin-top: 250px;
      }
    }
    .words{
      line-height: 12rem;
      .marquee{
        .word{
          font-size: 11rem;
        }
      }
    }
  }
  .leng{
    a{
      font-size: 2.2rem;
    }
  }
 .About{
    margin-top: 120px;
    padding: 0px 5rem;
    .aboutWave{
      font-size: 26px;
    }
    .resume{
      font-size: 3.8rem;
    }
    .profile-img{
      width: 25rem;
      top: -100px;
      left: 150px;
    }
    .description, .git{
      font-size: 1.3rem;
    }
  }
  .Projects{
    padding: 50px 100px;
    h2{
      font-size: 6rem;
    }
    .projectsOnly{
      ul{
        li{
          a{
            font-size: 3.5rem;
          }
        }
      }
    }
  }
  .Contact{
    .information{
      padding: 0px 0px 30px 55px;
      .line-contact{
        left: -45px;
      }
      .title-contact{
        top: 262px;
        font-size: 3rem;
      }
      ul{
        padding: 100px 100px;
        li{
          a{
            font-size: 3.5rem;
          }
          }
      }
      .bych{
        svg{
          width: 400px;
          height: 100px;
        }
        .buildby{
          width: 400px;
          font-size: 1.2rem;
          margin-top: -18px;
        }
      }
    }
    .lines{
      width: 800px;
    }
  }
}

@media (min-width: 1824px) {
  
}

@media (min-width: 2100px) {
  .Intro{
    height: 800px;
    .logo{
      .position-logo{
        margin-top: 23rem;
        width: 51rem;
        height: auto;
      }
    }
    .words{
      line-height: 17.3rem;
      .marquee{
        .word{
          font-size: 18rem;
        }
      }
    }
  }
  .leng{
    a{
      font-size: 2.2rem;
    }
  }
 .About{
    margin-top: 250px;
    padding: 0px 20rem;
    .aboutWave{
      font-size: 26px;
    }
    .resume{
      font-size: 4.8rem;
    }
    .profile-img{
      width: 33rem;
      top: 0px;
      left: 220px;
    }
    .description{
      font-size: 2rem;
    }
    .git{
      font-size: 2rem;
    }
  }
  .Projects{
    padding: 100px 250px;
    h2{
      font-size: 10rem;
    }
    .menu_image, .menu_image2, .menu_image3, .menu_image4, .menu_image5{
      width: 350px;
      height: 500px;
    }
    .projectsOnly{
      ul{
        li{
          a{
            font-size: 6rem;
          }
        }
      }
    }
  }
  .Contact{
    .information{
      padding: 0px 0px 65px 65px;
      .line-contact{
        left: 5px;
      }
      .title-contact{
        top: 298px;
        font-size: 4.2rem;
      }
      ul{
        padding: 200px 400px;
        li{
          a{
            font-size: 4rem;
          }
          }
      }
      .bych{
        svg{
          width: 400px;
          height: 100px;
        }
        .buildby{
          width: 400px;
          font-size: 1.2rem;
          margin-top: -18px;
        }
      }
    }
    .lines{
      width: 1100px;
    }
    .socialmed1, .socialmed2, .socialmed3, .socialmed4{
      width: 36rem;
      height: 58rem;
      left: 90rem;
      position: absolute;
      bottom: 0px;
    }
  }
}
</style>