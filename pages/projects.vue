<template>
<horizontal-scroll>
  <div>
    <div class="containment">
      <h2>Lo más destacado</h2>

      <span class="leftSpan top-date">2021</span>
      <a class="cardo cardo-left cardo-bottom" href="/project">
        <img src="@/assets/astronaut12.png" alt="" style="object-fit: cover">
        <div class="info">
          <h3>Nombre projecto</h3>
          <p>08/2021</p>
          <hr>
          <p>Descripcion breve de proyecto</p>
        </div>
      </a>
      <span class="rightSpan bottom-date">2020</span>
      <a class="cardo cardo-right cardo-top" href="/project">
        <img src="@/assets/autolingua-brand.png" alt="" style="object-fit: cover; margin-left: -39rem;">
        <div class="info">
          <h3>Nombre projecto</h3>
          <p>08/2021</p>
          <hr>
          <p>Descripcion breve de proyecto</p>
        </div>
      </a>
      <span class="leftSpan top-date" style="top: 4rem;">2019</span>
      <a class="cardo cardo-left cardo-bottom" href="/project">
        <img src="@/assets/astronaut12.png" alt="" style="object-fit: cover; margin-left: -39rem;">
        <div class="info">
          <h3>Nombre projecto</h3>
          <p>08/2021</p>
          <hr>
          <p>Descripcion breve de proyecto</p>
        </div>
      </a>
      <span class="rightSpan bottom-date">2018</span>
      <a class="cardo cardo-right cardo-top" href="/project">
        <img src="@/assets/astronaut12.png" alt="" style="object-fit: cover; margin-left: -39rem;">
        <div class="info">
          <h3>Nombre projecto</h3>
          <p>08/2021</p>
          <hr>
          <p>Descripcion breve de proyecto</p>
        </div>
      </a>

      <a class="cardo cardo-left cardo-bottom" href="/project" style="margin-right: 8rem;">
        <img src="@/assets/astronaut12.png" alt="" style="object-fit: cover; margin-left: 8rem;">
        <div class="info">
          <h3>Nombre projecto</h3>
          <p>08/2021</p>
          <hr>
          <p>Descripcion breve de proyecto</p>
        </div>
      </a>

      <a class="cardo cardo-right cardo-top" href="/project">
        <img src="@/assets/astronaut12.png" alt="" style="object-fit: cover">
        <div class="info">
          <h3>Nombre projecto</h3>
          <p>08/2021</p>
          <hr>
          <p>Descripcion breve de proyecto</p>
        </div>
      </a>
      </div>
  </div>
  </horizontal-scroll>
</template>

<script>
import HorizontalScroll from 'vue-horizontal-scroll'
import 'vue-horizontal-scroll/dist/vue-horizontal-scroll.css'
export default {
  components:{
    HorizontalScroll
  }
}
</script>

<style lang="scss" scoped>
.containment{
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  overflow: hidden;
  padding: 0 20px;
  h2{
    margin-top: 150px;
    font-size: 2.9rem;
    text-transform: uppercase;
  }
  span{
    position: relative;
    font-weight: 700;
    z-index: -1;
    font-size: 13rem;
    -webkit-text-stroke: 1px var(--color);
    -webkit-text-fill-color: rgba(255, 255, 255, 0);
  }
  .leftSpan{
    margin-left: -50px;
    line-height: 0.6;
    margin-top: 50px;
  }
  .rightSpan{
    margin-right: -50px;
    line-height: 0.6;
    margin-top: 50px;
  }
  a:hover{
    text-decoration: none;
  }
  .cardo-left{
    color: var(--color);
    img{
      width: 22rem;
      border-radius: 1rem;
    }
    .info{
      float: right;
    }
  }
  .cardo-right{
    color: var(--color);
    img{
      float: right;
      width: 22rem;
      border-radius: 1rem;
    }
    .info{
      float: left;
    }
  }
}
@media (min-width: 720px) {
  .containment{
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    height: 100vh;
    overflow: initial;
    h2{
      position: relative;
      width: 0px;
      z-index: 1;
      margin-top: 8rem;
      font-size: 7rem;
      text-transform: uppercase;
    }
    span{
      position: relative;
      font-weight: 700;
      z-index: -1;
      font-size: 10rem;
      -webkit-text-stroke: 1px var(--color);
      -webkit-text-fill-color: rgba(255, 255, 255, 0);
      align-self: flex-end;
    }
    .top-date{
      align-self: flex-start;
      margin-left: 0px;
      line-height: 0.6;
      margin-top: 0px;
      top: 13rem;
      left: 7rem;
      font-size: 21rem;
    }
    .bottom-date{
      align-self: flex-end;
      margin-left: 0px;
      line-height: 0.6;
      margin-top: 0px;
      top: -5rem;
      left: 7rem;
      font-size: 21rem;
    }
    a:hover{
      text-decoration: none;
      h3:hover{
      text-decoration: underline;
      }
    }
    .cardo{
      color: var(--color);
      margin: 0px 50px;
      display: flex;
      align-items: flex-end;
      img{
        width: 62vh;
        height: 72vh;
      }
      .info{
        width: 200px;
        margin: 50px;
        a:hover{
        text-decoration: none;
          h3{
            text-decoration: underline;
          }
        }
      }
    }
    .cardo-top {
      align-self: flex-start;
    }
    .cardo-bottom {
      align-self: flex-end;
    }
  }
}
@media (min-width: 1440px) {

}

@media (min-width: 1824px) {
  
}

@media (min-width: 2100px) {

.containment{
    h2{
      margin-top: 8rem;
      font-size: 7rem;
    }
    span{
      position: relative;
      font-weight: 700;
      z-index: -1;
      font-size: 10rem;
      -webkit-text-stroke: 1px var(--color);
      -webkit-text-fill-color: rgba(255, 255, 255, 0);
      align-self: flex-end;
    }
    a:hover{
      text-decoration: none;
      h3:hover{
      text-decoration: underline;
      }
    }
    .cardo{
      color: var(--color);
      margin: 0px 50px;
      display: flex;
      align-items: flex-end;
      img{
        width: 62vh;
        height: 72vh;
      }
      .info{
        width: 200px;
        margin: 50px;
        a:hover{
        text-decoration: none;
          h3{
            text-decoration: underline;
          }
        }
      }
    }
    
  }
}
</style>