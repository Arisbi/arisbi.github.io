<template>
  <b-navbar toggleable="lg" class="navbackground fixed-top">
        <b-navbar-brand href="/">
        <LogoCh/>
        </b-navbar-brand>

        <b-navbar-nav>
            <b-nav-item>
              <nuxt-link :to="{path: '/',hash:'#about'}" class="desktop" exact>Acerca de</nuxt-link>
            </b-nav-item>
            <b-nav-item>
              <nuxt-link :to="{path: '/',hash:'#work'}" class="desktop">Trabajos</nuxt-link>
            </b-nav-item>
            <b-nav-item>
              <nuxt-link :to="{path: '/',hash:'#contact'}" class="desktop">Contacto</nuxt-link>
            </b-nav-item>
        </b-navbar-nav>

        <b-navbar-toggle target="nav-collapseMobile"></b-navbar-toggle>

        <b-sidebar class="sidebarMobile" id="nav-collapseMobile" is-nav>
            <b-navbar-nav>
            <b-nav-item disabled>MENU</b-nav-item>
            <b-nav-item href="/">Home</b-nav-item>
            <b-nav-item :to="{path: '/',hash:'#about'}">Acerca de</b-nav-item>
            <b-nav-item :to="{path: '/',hash:'#work'}">Trabajos</b-nav-item>
            <b-nav-item href="/projects">Proyectos</b-nav-item>
            <b-nav-item href="/illustrations">Ilustraciones</b-nav-item>
            <b-nav-item href="/photography">Fotografia</b-nav-item>
            <b-nav-item href="/motiongraphics">Motion Graphics</b-nav-item>
            <b-nav-item href="/webdesign">Ui Web</b-nav-item>
            <b-nav-item :to="{path: '/',hash:'#contact'}">Contacto</b-nav-item>
            <b-nav-item href="/curriculumvitae">Curriculum Vitae</b-nav-item>
            </b-navbar-nav>
        </b-sidebar>
            
          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto desktop">
            <b-nav-item>
              <a href="/curriculumvitae">Curriculum Vitae</a>
            </b-nav-item>
          </b-navbar-nav>
        
      </b-navbar>
</template>

<script>
import LogoCh from '~/components/LogoCh.vue'

export default {
    components:{
        LogoCh
    },
    mounted: function() {
        this.scrollNavbar()
      },
    methods: {
        scrollNavbar: function(){
            $(document).ready(function(){
              $(window).scroll(function(){
                var scroll = $(window).scrollTop();
                if (scroll > 300) {
                  $(".navbackground").css("background" , "var(--bg-secondary)");
                }
                else{
                  $(".navbackground").css("background" , "transparent");  	
                }
              })
            })
        $(".nav .nav-link").on("click", function(){
        $(".nav").find(".active").removeClass("active");
        $(this).addClass("active");
        });
        }
    },
}
</script>

<style lang="scss" scoped>

.navbar-toggler-icon {
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='30' height='30'%3E%3Cpath stroke='rgba(0, 0, 0, 1)' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E");
}

ul{
  li{
      a{
        font-weight: 600;
        color: var(--color);
        font-size: 1.3rem;
      }
      a:hover{
        font-weight: 700;
        color: var(--color);
        text-decoration: none;
      }
    }
}

.nav-item{
  color: var(--color);
}

.navbackground{
  background:transparent;
}

.white{
  background:white;
}
</style>