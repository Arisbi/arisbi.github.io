<template>
  <div>
    <b-container fluid style="overflow: hidden;">

      <svg class="lines" width="1440" height="170" viewBox="0 0 1440 170" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M-2 117.5C44 71.6667 159.492 1.50001 253.5 1.5C500 1.49999 584.334 157.5 753.5 157.5C924.5 157.5 1042 97 1155 100.5C1245.4 103.3 1359 131 1439 169" stroke="#EBECEE" stroke-width="3"/>
      </svg>

      <h2 class="text-center"> Motion Graphics </h2>

      <div class="horizontal-menu text-center">
          <a href="/illustrations">Ilustraciones</a>
          <a href="" class="active-subnav">Fotografía</a>
          <a href="/motiongraphics" >Motion Graphics</a>
          <a href="/webdesign">Web design</a>
      </div>

      <div class="leng">
          <nuxt-link :to="switchLocalePath('en')">En</nuxt-link>
          <nuxt-link :to="switchLocalePath('es')">Es</nuxt-link>
      </div>

    </b-container>

      <div class="gallery">
        <Products
          v-for="product in products"
          :key="product.title"
          :product="product"
          />
      </div>
          

          <b-modal hide-footer hide-header id="imagemodal">
              <button type="button" aria-label="Close" class="close" @click="$bvModal.hide('imagemodal')">
                  <svg width="35" height="35" viewBox="0 0 53 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle opacity="0.3" cx="26.5" cy="26.5" r="25.5" stroke="white" stroke-width="2"/>
                      <circle opacity="0.3" cx="26.5" cy="26.5" r="20.5" fill="white"/>
                      <path d="M17.4632 14.6365C16.7102 13.8284 15.4447 13.7838 14.6365 14.5368C13.8284 15.2898 13.7838 16.5553 14.5368 17.3635L17.4632 14.6365ZM35.0368 39.3635C35.7898 40.1716 37.0553 40.2162 37.8635 39.4632C38.6716 38.7102 38.7162 37.4447 37.9632 36.6365L35.0368 39.3635ZM37.9632 17.3635C38.7162 16.5553 38.6716 15.2898 37.8635 14.5368C37.0553 13.7838 35.7898 13.8284 35.0368 14.6365L37.9632 17.3635ZM14.5368 36.6365C13.7838 37.4447 13.8284 38.7102 14.6365 39.4632C15.4447 40.2162 16.7102 40.1716 17.4632 39.3635L14.5368 36.6365ZM14.5368 17.3635L35.0368 39.3635L37.9632 36.6365L17.4632 14.6365L14.5368 17.3635ZM35.0368 14.6365L14.5368 36.6365L17.4632 39.3635L37.9632 17.3635L35.0368 14.6365Z" fill="white"/>
                  </svg>
              </button>
              <img src="" class="imagepreview" style="object-fit: cover" >
              <b-row class="title-modal">
                  <b-col md="6">
                      <h4 class="titles1"></h4>
                  </b-col>
                  <b-col md="5" class="text-right">
                      <h5 class="hashtags"></h5>
                  </b-col>
              </b-row>
          </b-modal>

          <div id="overlay-show" class="overlay-hidden">
            <div class="close-gallery">
              <svg class="return-ellipse" width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg"><circle opacity="0.9" cx="20.5" cy="20.5" r="20.5" fill="black"/></svg>
              <svg class="return-arrow" width="13" height="24" viewBox="0 0 13 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.5 1L1 12L11.5 23" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
            </div>

            <img src="" class="imagepreview" style="object-fit: cover; object-position: center;">
            <div class="titlepreview">
              <h4 class="titles1"></h4>
              <h5 class="hashtags"></h5>
            </div>
          </div>
          
    </div>
</template>

<script>
import Products from '@/components/galleryimage.vue'
export default {
  data(){
    return{
      products: [
        {
          id: 1,
          title: 'Pintura',
          hashtag: '#Ilustracion',
          src: require('@/assets/Astronaut-Aris2.png'),
          item: 'item-1',
        },
        {
          id: 2,
          title: 'Pintura2',
          hashtag: '#Ilustraciones',
          src: require('@/assets/Astronaut-Aris2.png'),
          item: 'item-2',
        },
        {
          id: 3,
          title: 'Pintura3',
          hashtag: '#Ilustraciones',
          src: require('@/assets/Astronaut-Aris2.png'),
          item: 'item-3',
        },
        {
          id: 4,
          title: 'Pintura4',
          hashtag: '#Ilustracion',
          src: require('@/assets/Astronaut-Aris2.png'),
          item: 'item-4',
        },
        {
          id: 5,
          title: 'Pintura5',
          hashtag: '#Ilustraciones',
          src: require('@/assets/Astronaut-Aris2.png'),
          item: 'item-5',
        },
        {
          id: 6,
          title: 'Pintura6',
          hashtag: '#Ilustraciones',
          src: require('@/assets/Astronaut-Aris2.png'),
          item: 'item-6',
        },
        {
          id: 7,
          title: 'Pintura7',
          hashtag: '#Ilustracion',
          src: require('@/assets/Astronaut-Aris2.png'),
          item: 'item-7',
        },
        {
          id: 8,
          title: 'Pintura8',
          hashtag: '#Ilustraciones',
          src: require('@/assets/Astronaut-Aris2.png'),
          item: 'item-8',
        },
        {
          id: 9,
          title: 'Pintura9',
          hashtag: '#Ilustraciones',
          src: require('@/assets/Astronaut-Aris2.png'),
          item: 'item-9',
        },
        {
          id: 10,
          title: 'Pintura10',
          hashtag: '#Ilustraciones',
          src: require('@/assets/Astronaut-Aris2.png'),
          item: 'item-10',
        }
      ]
    }
  },
  components:{
    Products,
  },
  mounted: function() {
    this.sideBarGallery()
  },
  methods: {
    //Mobile
    sideBarGallery: function(){

            // media query event handler
      if (matchMedia) {
      const mq = window.matchMedia("(max-width: 500px)");
      mq.addListener(WidthChange);
      WidthChange(mq);
      }

      // media query change
      function WidthChange(mq) {
      if (mq.matches) {
      
      $('.overlay-img').click(function(){
        $('#overlay-show').show();
        $('body').css('overflow', 'hidden');
      });
      $('.close-gallery').click(function(){
          $('#overlay-show').hide();
          $('body').css('overflow', 'auto');
      });

      $('.overlay-img').on('click', function() {
            $('.imagepreview').attr('src', $(this).find('img').attr('src'));
            $('.titles1').text($(this).find('h4').text());
            $('.hashtags').text($(this).find('h5').text());
        });
      } else {
        $('.pop').on('click', function() {
             $('.imagepreview').attr('src', $(this).find('img').attr('src'));
             $('.titles1').text($(this).find('h4').text());
             $('.hashtags').text($(this).find('h5').text());
             $('body').css('overflow', 'auto');
           });
          }
        }
      },
    },
}
</script>

<style lang="scss">

.lines{
    position: relative;
    width: 260vw;
    z-index: -1;
    left: -20rem; 
}
h2{
  font-size: 2.5rem;
  text-transform: uppercase;
  letter-spacing: 0.3rem;
  font-weight: 600;
  margin: 50px 0;
}
a{
    text-decoration: none;
    color: black;
    font-weight: 200;
    padding: 10px;
}
.active-subnav{
    font-weight: 600!important;
    background-color: #EBECEE;
    padding: 20px;
    border-radius: 16px;
    pointer-events: none;
}
.horizontal-menu{
    overflow: auto;
    white-space: nowrap;
    padding: 2rem 0;
}
.leng{
  display: block;
  width: 40px;
}
  #imagemodal___BV_modal_outer_{
    display: none!important;
  }

.gallery{
    padding: 0 16px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: auto 1fr;
    grid-gap: 16px;
    margin-bottom: 4rem;
    .griditem{
      background-color: gray;
      min-height: 100px;
      width: 100%;
      border-radius: 8px;
    }
    a{
        padding: 0;
      }
    img{
        border-radius: 8px;
        width: 100%;
        height: 100%;
      }
      .text{
        display: none;
      }
}

//Overlay

.overlay-hidden{
  display: none;
}
#overlay-show{
    width: 100%;
    height: 100%;
    background: #000000c4;
    position: fixed;
    z-index: 99999;
    top: 0;
    left: 0;
    pointer-events: auto;
    overflow-y: scroll;
}
.close-gallery{
    position: absolute;
    width: 56px;
    height: 56px;
    top: 10px;
    left: 10px;
  .return-ellipse{
    opacity: 0.6;
  }
  .return-ellipse:hover{
    opacity: 0.8;
  }
  .return-arrow{
    position: absolute;
    left: 12px;
    top: 8px;
  }
}
.imagepreview{
  width: 100%;
  height: 600px;
  border-bottom-right-radius: 33px;
  border-bottom-left-radius: 33px;
}
.titlepreview{
    background-color: white;
    margin: 0.2rem 0rem;
    padding: 2rem;
    border-radius: 2rem;
}


@media (min-width: 720px) { 
  .lines{
    position: relative;
    width: 100vw;
    z-index: -1;
    left: -15px;
  }
  h2{
    font-size: 2.3rem;
    text-transform: uppercase;
    letter-spacing: 1rem;
    font-weight: 500;
    margin: 50px 0;
  }
  //Not to show mobile on desktop
  #overlay-show{
    display: none!important;
  }
  #imagemodal___BV_modal_outer_{
    display: inline-block!important;
  }
  .gallery{
    padding: 0 30px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(5, 250px);
    grid-gap: 24px;
    margin-bottom: 4rem;
    .griditem{
      background-color: gray;
      min-height: 100px;
      width: 100%;
      border-radius: 8px;
    }
    a{
        padding: 0;
      }
    img{
        border-radius: 8px;
        width: 100%;
        height: 100%;
      }
      .text{
        display: none;
      }
      
  }
  .item-1{
    // Row start / Column Start / Row end / Column end
    grid-area: 1 / 1 / 3 / 2;
  }
  .item-3{
    grid-area: 1 / 3 / span 2 / span 2;
  }
  .item-7{
      grid-column: 3 / span 2;
  }
  .item-8{
    grid-row: 4 / span 2;
  }
  .item-9{
    grid-area: 4 / 2 / span 2 / span 2;
  }
  .item-10{
    grid-row: 4 / span 2;
  }
 

  
  .b-sidebar > .b-sidebar-header .close {
    font-size: 3rem;
  }
  // Modal
  button:focus{
    outline: none;
  }
  .imagepreview1{
    width: 600px;
    height: 480px;
    border-radius: 16px;
  }
  .button-top{
    margin-top: -20px;
  }
  .title-modal{
    color: white;
    p{
      margin-left: 32px;
    }
  }
  .modal-body{
    width: 630px;
    height: 500px;
    padding: 0px;
    background-color: rgba(0,0,0,.0001)!important;
  }
  .modal-content{
    background-color: rgba(0,0,0,.0001)!important;
    border: 0px solid rgba(0, 0, 0, 0);
  }
}
</style>
