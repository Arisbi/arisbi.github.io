<template>
  <div class="mobile">
      <h1>Mobile</h1>
    <div class="leng">
        <nuxt-link :to="switchLocalePath('en')">En</nuxt-link>
        <nuxt-link :to="switchLocalePath('es')">Es</nuxt-link>
    </div>

    <b-container fluid id="about" class="About">
      <b-row>
        <b-col cols="12" md="7">
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
        <b-col cols="12" md="5" class="description">
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
        <b-row>
          <b-col md="12">
            <a id="project_item" href="/projects">
              <span>01</span>
              <p>Proyectos</p>
              <img class="image_mob" src="@/assets/Astronaut-Aris2.png" alt="">
            </a>
          </b-col>
          <b-col md="12" class="text-right">
            <a id="project_item2" href="/illustrations">
              <span>02</span>
              <p>Ilustraciones</p>
              <img class="image2_mob" src="@/assets/Astronaut-Aris2.png" alt="">
            </a>
          </b-col>
           <b-col md="12">
            <a id="project_item3" href="/photography">
              <span>03</span>
              <p>Fotografía</p>
              <img class="image3_mob" src="@/assets/Astronaut-Aris2.png" alt="">
            </a>
          </b-col>
          <b-col md="12" class="text-right">
            <a id="project_item4" href="/motiongraphics">
              <span>04</span>
              <p>Motion Graphics</p>
              <img class="image4_mob" src="@/assets/Astronaut-Aris2.png" alt="">
            </a>
          </b-col>
           <b-col md="12">
            <a id="project_item5" href="/webdesign">
              <span>05</span>
              <p>Ui Web Design</p>
              <img class="image5_mob" src="@/assets/Astronaut-Aris2.png" alt="">
            </a>
          </b-col>
        </b-row>
    </b-container>
    <b-container fluid id="contact" class="contact">
        <b-row>
          <b-col md="12" class="information">
            <p class="title-contact">Contacto</p>
            <ul>
              <li>
                <a id="socialmed1" href="">Dribble</a>
              </li>
              <li>
                <a id="socialmed2" href="">Linkedin</a>
              </li>
              <li>
                <a id="socialmed3" href="">Behance</a>
              </li>
              <li>
                <a id="socialmed4" href="">hello@arisbi</a>
              </li>
            </ul>
            <ByCh class="bych"/>
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
}
</script>

<style lang="scss" scoped>

.mobile{
    display: block;
  }
.desktop{
display: none;
}

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
  .services{
    img{
      width: 5.5rem;
      margin: 20px 22px;
    }
  }
  .bigCircle{
    position: absolute;
    left: -110px;
    z-index: -2;
  }
}
.Projects{
    margin-top: 300px;
    h2{
      font-size: 5rem;
      text-transform: uppercase;
      font-weight: 400;
    }
    .menu-projects-mob{
        padding: 2rem 6rem;
        .image_mob, .image3_mob, .image5_mob{
            width: 25rem;
        }
        .image2_mob, .image4_mob{
            width: 25rem;
            
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
        margin-left: auto;
        margin-right: auto;
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
</style>