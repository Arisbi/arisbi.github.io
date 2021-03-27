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
    <b-container class="About">
      <b-row>
        <b-col>
          <div class="container1">
          <Wave/>
          </div>
          <span>Acerca de</span>
          <h1>Diseñadora Gráfica.
              Experiencia en UX / UI.
              Entusiasta del código.
              Buscando mejorar productos.</h1>
          <img src="~/assets/img/Astronaut-Aris2.PNG" alt="" class="profile-img" style="width:15rem;">
        </b-col>
        <b-col>
          <p>Diseñadora UX/UI, amante del código front end y de la animación motion graphics/3D 
            con mucho interés en los proyectos responsivos (Mobile First!) junto con aplicaciones 
            para Android y IOS.
            Actualment trabajo tiempo completo pero me gusta ayudar productos vía Freelance.</p>
            <p>Mi github</p><a href="https://github.com/Arisbi" target="_blank">ARISBI.</a>
            <b-row class="services">
              <img src="~/assets/img/UxUi.svg" alt="" class="profile-img">
              <img src="~/assets/img/Front.svg" alt="" class="profile-img">
              <img src="~/assets/img/Graphic.svg" alt="" class="profile-img">
            </b-row>
        </b-col>
        <BigCircle/>
        <SmallCircle/>
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
export default {
  components:{
    LogoBig,
    Wave,
    BigCircle,
    SmallCircle
  },
  mounted: function() {
    this.startDesktop()
  },
  methods: {
    startDesktop: function(){
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



.container1 {
  width: 100px;
  overflow: hidden;
  svg {
    position: relative;
    left: -50px;
    width: 200px;
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

//
.services{
  img{
    width: 7rem;;
  }
}

</style>