<template>
  <b-navbar toggleable="lg" class="navbackground fixed-top">
        <b-navbar-brand to="/">
        <LogoCh/>
        </b-navbar-brand>

        <b-navbar-nav>
            <b-nav-item>
              <NuxtLink to="/#about" class="desktop">Acerca de</NuxtLink>
            </b-nav-item>
            <b-nav-item>
              <NuxtLink to="/#work" class="desktop">Trabajos</NuxtLink>
            </b-nav-item>
            <b-nav-item>
              <NuxtLink to="/#contact" class="desktop">Contacto</NuxtLink>
            </b-nav-item>
        </b-navbar-nav>

        <b-sidebar left class="sidebarMobile mobile" id="nav-collapseMobile" title="Menu" is-nav>
            <b-navbar-nav>
              <b-nav-item to="/">Home</b-nav-item>
              <b-nav-item to="/#about">Acerca de</b-nav-item>
              <b-nav-item to="/#work">Trabajos</b-nav-item>
              <b-nav-item to="/projects">Proyectos</b-nav-item>
              <b-nav-item to="/illustrations">Ilustraciones</b-nav-item>
              <b-nav-item to="/photography">Fotografia</b-nav-item>
              <b-nav-item to="/motiongraphics">Motion Graphics</b-nav-item>
              <b-nav-item to="/webdesign">Ui Web</b-nav-item>
              <b-nav-item to="/#contact">Contacto</b-nav-item>
              <b-nav-item to="/curriculumvitae">Curriculum Vitae</b-nav-item>
              <b-nav-item @click="$colorMode.preference = color" class="">
                  <svg width="24" height="24" viewBox="0 0 302 302" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M79.8159 62.0232L62.0231 44.2304C57.1156 39.3166 49.1378 39.3166 44.2303 44.2304C39.3165 49.1442 39.3165 57.1094 44.2303 62.0232L62.0231 79.8161C64.4768 82.2761 67.6982 83.503 70.9195 83.503C74.1409 83.503 77.3622 82.2761 79.8159 79.8161C84.7297 74.9023 84.7297 66.937 79.8159 62.0232Z" fill="var(--color)"/>
                    <path d="M37.75 138.417H12.5833C5.63733 138.417 0 144.054 0 151C0 157.946 5.63733 163.583 12.5833 163.583H37.75C44.696 163.583 50.3333 157.946 50.3333 151C50.3333 144.054 44.696 138.417 37.75 138.417Z" fill="var(--color)"/>
                    <path d="M79.8159 222.184C74.9084 217.27 66.9306 217.27 62.0231 222.184L44.2303 239.977C39.3165 244.891 39.3165 252.856 44.2303 257.77C46.684 260.23 49.9054 261.457 53.1267 261.457C56.348 261.457 59.5693 260.23 62.0231 257.77L79.8159 239.977C84.7297 235.063 84.7297 227.098 79.8159 222.184Z" fill="var(--color)"/>
                    <path d="M151 251.667C144.054 251.667 138.417 257.304 138.417 264.25V289.417C138.417 296.363 144.054 302 151 302C157.946 302 163.583 296.363 163.583 289.417V264.25C163.583 257.304 157.946 251.667 151 251.667Z" fill="var(--color)"/>
                    <path d="M257.77 239.977L239.977 222.184C235.069 217.27 227.091 217.27 222.184 222.184C217.27 227.098 217.27 235.063 222.184 239.977L239.977 257.77C242.43 260.23 245.652 261.457 248.873 261.457C252.094 261.457 255.316 260.23 257.77 257.77C262.683 252.856 262.683 244.891 257.77 239.977Z" fill="var(--color)"/>
                    <path d="M289.417 138.417H264.25C257.304 138.417 251.667 144.054 251.667 151C251.667 157.946 257.304 163.583 264.25 163.583H289.417C296.363 163.583 302 157.946 302 151C302 144.054 296.363 138.417 289.417 138.417Z" fill="var(--color)"/>
                    <path d="M257.77 44.2304C252.862 39.3166 244.884 39.3166 239.977 44.2304L222.184 62.0232C217.27 66.937 217.27 74.9023 222.184 79.8161C224.638 82.2761 227.859 83.503 231.08 83.503C234.302 83.503 237.523 82.2761 239.977 79.8161L257.77 62.0232C262.683 57.1094 262.683 49.1442 257.77 44.2304Z" fill="var(--color)"/>
                    <path d="M151 0C144.054 0 138.417 5.63733 138.417 12.5833V37.75C138.417 44.696 144.054 50.3333 151 50.3333C157.946 50.3333 163.583 44.696 163.583 37.75V12.5833C163.583 5.63733 157.946 0 151 0Z" fill="var(--color)"/>
                    <path d="M151 69.2083C105.901 69.2083 69.2085 105.901 69.2085 151C69.2085 196.099 105.901 232.792 151 232.792C196.099 232.792 232.792 196.099 232.792 151C232.792 105.901 196.099 69.2083 151 69.2083ZM151 207.625C119.781 207.625 94.3752 182.219 94.3752 151C94.3752 119.781 119.781 94.375 151 94.375C182.219 94.375 207.625 119.781 207.625 151C207.625 182.219 182.219 207.625 151 207.625Z" fill="var(--color)"/>
                  </svg>
              </b-nav-item>
              <b-nav-item @click="$colorMode.preference = color2" class="">
                  <svg width="24" height="24" viewBox="0 0 302 302" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M277.736 169.243C275.027 168.566 272.317 169.243 269.947 170.936C261.142 178.384 250.982 184.478 239.806 188.541C229.308 192.604 217.793 194.635 205.601 194.635C178.17 194.635 153.109 183.463 135.16 165.519C117.211 147.575 106.036 122.521 106.036 95.0976C106.036 83.5864 108.067 72.4139 111.454 62.257C115.179 51.423 120.598 41.6046 127.71 33.1406C130.758 29.4164 130.08 23.9994 126.355 20.9523C123.985 19.2595 121.275 18.5824 118.566 19.2595C89.7799 27.0464 64.7191 44.3131 46.7701 67.3354C29.4985 90.0191 19 118.12 19 148.929C19 185.832 33.901 219.35 58.2845 243.727C82.668 268.103 116.195 283 153.109 283C184.266 283 213.052 272.166 236.081 254.222C259.448 235.94 276.381 209.87 283.493 180.077C285.187 174.998 282.477 170.259 277.736 169.243ZM225.921 240.003C206.279 255.576 181.218 265.056 153.787 265.056C121.614 265.056 92.4892 251.852 71.4923 230.861C50.4954 209.87 37.2876 180.754 37.2876 148.591C37.2876 121.844 46.0928 97.4675 61.3325 77.8309C71.8309 64.2883 85.0386 53.1158 100.278 45.3288C98.585 49.053 96.8917 52.7772 95.5371 56.84C91.1345 69.0282 89.1026 81.8936 89.1026 95.4361C89.1026 127.6 102.31 157.055 123.307 178.046C144.304 199.036 173.767 212.24 205.94 212.24C220.164 212.24 233.71 209.87 246.241 205.131C250.643 203.438 255.046 201.745 259.11 199.714C250.982 215.287 239.806 229.169 225.921 240.003Z" fill="var(--color)"/>
                  </svg>
              </b-nav-item>
            </b-navbar-nav>
        </b-sidebar>
            
          <!-- Right aligned nav items -->
          
          <b-navbar-nav class="ml-auto desktop" style="display: inherit">
            <b-nav-item>
              <NuxtLink to="/curriculumvitae" class="desktop">Curriculum Vitae</NuxtLink>
            </b-nav-item>
            <b-nav-item @click="$colorMode.preference = color" class="desktop switch-mode">
              <svg width="24" height="24" viewBox="0 0 302 302" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M79.8159 62.0232L62.0231 44.2304C57.1156 39.3166 49.1378 39.3166 44.2303 44.2304C39.3165 49.1442 39.3165 57.1094 44.2303 62.0232L62.0231 79.8161C64.4768 82.2761 67.6982 83.503 70.9195 83.503C74.1409 83.503 77.3622 82.2761 79.8159 79.8161C84.7297 74.9023 84.7297 66.937 79.8159 62.0232Z" fill="var(--color)"/>
                  <path d="M37.75 138.417H12.5833C5.63733 138.417 0 144.054 0 151C0 157.946 5.63733 163.583 12.5833 163.583H37.75C44.696 163.583 50.3333 157.946 50.3333 151C50.3333 144.054 44.696 138.417 37.75 138.417Z" fill="var(--color)"/>
                  <path d="M79.8159 222.184C74.9084 217.27 66.9306 217.27 62.0231 222.184L44.2303 239.977C39.3165 244.891 39.3165 252.856 44.2303 257.77C46.684 260.23 49.9054 261.457 53.1267 261.457C56.348 261.457 59.5693 260.23 62.0231 257.77L79.8159 239.977C84.7297 235.063 84.7297 227.098 79.8159 222.184Z" fill="var(--color)"/>
                  <path d="M151 251.667C144.054 251.667 138.417 257.304 138.417 264.25V289.417C138.417 296.363 144.054 302 151 302C157.946 302 163.583 296.363 163.583 289.417V264.25C163.583 257.304 157.946 251.667 151 251.667Z" fill="var(--color)"/>
                  <path d="M257.77 239.977L239.977 222.184C235.069 217.27 227.091 217.27 222.184 222.184C217.27 227.098 217.27 235.063 222.184 239.977L239.977 257.77C242.43 260.23 245.652 261.457 248.873 261.457C252.094 261.457 255.316 260.23 257.77 257.77C262.683 252.856 262.683 244.891 257.77 239.977Z" fill="var(--color)"/>
                  <path d="M289.417 138.417H264.25C257.304 138.417 251.667 144.054 251.667 151C251.667 157.946 257.304 163.583 264.25 163.583H289.417C296.363 163.583 302 157.946 302 151C302 144.054 296.363 138.417 289.417 138.417Z" fill="var(--color)"/>
                  <path d="M257.77 44.2304C252.862 39.3166 244.884 39.3166 239.977 44.2304L222.184 62.0232C217.27 66.937 217.27 74.9023 222.184 79.8161C224.638 82.2761 227.859 83.503 231.08 83.503C234.302 83.503 237.523 82.2761 239.977 79.8161L257.77 62.0232C262.683 57.1094 262.683 49.1442 257.77 44.2304Z" fill="var(--color)"/>
                  <path d="M151 0C144.054 0 138.417 5.63733 138.417 12.5833V37.75C138.417 44.696 144.054 50.3333 151 50.3333C157.946 50.3333 163.583 44.696 163.583 37.75V12.5833C163.583 5.63733 157.946 0 151 0Z" fill="var(--color)"/>
                  <path d="M151 69.2083C105.901 69.2083 69.2085 105.901 69.2085 151C69.2085 196.099 105.901 232.792 151 232.792C196.099 232.792 232.792 196.099 232.792 151C232.792 105.901 196.099 69.2083 151 69.2083ZM151 207.625C119.781 207.625 94.3752 182.219 94.3752 151C94.3752 119.781 119.781 94.375 151 94.375C182.219 94.375 207.625 119.781 207.625 151C207.625 182.219 182.219 207.625 151 207.625Z" fill="var(--color)"/>
              </svg>
              </b-nav-item>
            <b-nav-item @click="$colorMode.preference = color2" class="desktop switch-mode">
              <svg width="24" height="24" viewBox="0 0 302 302" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M277.736 169.243C275.027 168.566 272.317 169.243 269.947 170.936C261.142 178.384 250.982 184.478 239.806 188.541C229.308 192.604 217.793 194.635 205.601 194.635C178.17 194.635 153.109 183.463 135.16 165.519C117.211 147.575 106.036 122.521 106.036 95.0976C106.036 83.5864 108.067 72.4139 111.454 62.257C115.179 51.423 120.598 41.6046 127.71 33.1406C130.758 29.4164 130.08 23.9994 126.355 20.9523C123.985 19.2595 121.275 18.5824 118.566 19.2595C89.7799 27.0464 64.7191 44.3131 46.7701 67.3354C29.4985 90.0191 19 118.12 19 148.929C19 185.832 33.901 219.35 58.2845 243.727C82.668 268.103 116.195 283 153.109 283C184.266 283 213.052 272.166 236.081 254.222C259.448 235.94 276.381 209.87 283.493 180.077C285.187 174.998 282.477 170.259 277.736 169.243ZM225.921 240.003C206.279 255.576 181.218 265.056 153.787 265.056C121.614 265.056 92.4892 251.852 71.4923 230.861C50.4954 209.87 37.2876 180.754 37.2876 148.591C37.2876 121.844 46.0928 97.4675 61.3325 77.8309C71.8309 64.2883 85.0386 53.1158 100.278 45.3288C98.585 49.053 96.8917 52.7772 95.5371 56.84C91.1345 69.0282 89.1026 81.8936 89.1026 95.4361C89.1026 127.6 102.31 157.055 123.307 178.046C144.304 199.036 173.767 212.24 205.94 212.24C220.164 212.24 233.71 209.87 246.241 205.131C250.643 203.438 255.046 201.745 259.11 199.714C250.982 215.287 239.806 229.169 225.921 240.003Z" fill="var(--color)"/>
              </svg>
            </b-nav-item>
          </b-navbar-nav>

          <b-navbar-toggle target="nav-collapseMobile"></b-navbar-toggle>
        
      </b-navbar>
</template>

<script>
import LogoCh from '~/components/LogoCh.vue'

export default {
  data() {
      return {
        color: ['light'],
        color2: ['dark'],
      }
    },
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
                  $(".navbackground").css("background" , "var(--color-header)");
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
.mobile{
    display: block;
}
.desktop{
display: none;
}

.navbar{
    padding: 0.2rem 1rem;
}
.navbar-toggler-icon {
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='30' height='30'%3E%3Cpath stroke='var(--color)' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E");
}
.navbar-light .navbar-toggler {
    color: var(--color);
    border-color: var( --color);
}

ul{
  li{
      a{
        font-weight: 600;
        color: var(--color-link);
        font-size: 1rem;
      }
      
    }
}

.nav-item{
  color: var(--color);
}
.switch-mode{
  line-height: 2;
  .img{
    color: var(--color)!important;
  }
}
.navbackground{
  background:transparent;
}

.white{
  background:white;
}


@media (min-width: 992px) { 
  .mobile{
    display: none;
  }
  .desktop{
    display: block;
  }
  ul{
    li{
      a{
        font-weight: 600;
        color: var(--color-link);
        font-size: 1rem;
        text-transform: uppercase;
        text-decoration: none;
        letter-spacing: 0.15em;
        display: inline-block;
        padding: 4px 0px;
        margin: 0 4px;
        position: relative;
      }
      a:hover{
        color: var(--color-hover);
        text-decoration: none;
      }
      .desktop:after {    
        background: none repeat scroll 0 0 transparent;
        bottom: 0;
        content: "";
        display: block;
        height: 2px;
        left: 50%;
        position: absolute;
        background: var(--color-hover);
        transition: width 0.3s ease 0s, left 0.3s ease 0s;
        width: 0;
      }
      .desktop:hover:after { 
        width: 100%; 
        left: 0; 
      }
    }
  }
  @media (min-width: 2100px) {
    ul{
      li{
        a{
          font-size: 1.5rem;
          letter-spacing: 0.15rem;
          padding: 12px 0px;
          margin: 0 8px;
        }
      }
    }
    .Ch-logo{
      width: 6.3rem;
      margin-left: 2rem;
    }
  }
}
</style>