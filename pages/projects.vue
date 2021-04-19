<template>
  <div>
    <div class="containment">
      <h2>Lo más destacado</h2>

      <span>2021</span>
      <a class="cardo" href="">
        <img src="@/assets/astronaut12.png" alt="" style="object-fit: cover">
        <div class="info">
          <h3>Nombre projecto</h3>
          <p>08/2021</p>
          <p>Descripcion breve de proyecto</p>
        </div>
      </a>
      <span>2020</span>
      <a class="cardo" href="">
        <img src="@/assets/astronaut12.png" alt="" style="object-fit: cover">
        <div class="info">
          <h3>Nombre projecto</h3>
          <p>08/2021</p>
          <p>Descripcion breve de proyecto</p>
        </div>
      </a>
      <span>2019</span>
      <a class="cardo" href="">
        <img src="@/assets/astronaut12.png" alt="" style="object-fit: cover">
        <div class="info">
          <h3>Nombre projecto</h3>
          <p>08/2021</p>
          <p>Descripcion breve de proyecto</p>
        </div>
      </a>
      <span>2018</span>
      <a class="cardo" href="">
        <img src="@/assets/astronaut12.png" alt="" style="object-fit: cover">
        <div class="info">
          <h3>Nombre projecto</h3>
          <p>08/2021</p>
          <p>Descripcion breve de proyecto</p>
        </div>
      </a>

      <a class="cardo" href="">
        <img src="@/assets/astronaut12.png" alt="" style="object-fit: cover">
        <div class="info">
          <h3>Nombre projecto</h3>
          <p>08/2021</p>
          <p>Descripcion breve de proyecto</p>
        </div>
      </a>

      <a class="cardo" href="">
        <img src="@/assets/astronaut12.png" alt="" style="object-fit: cover">
        <div class="info">
          <h3>Nombre projecto</h3>
          <p>08/2021</p>
          <p>Descripcion breve de proyecto</p>
        </div>
      </a>
      </div>
  </div>
</template>

<script>
import Gallery from "~/components/Gallery.vue"
export default {
  components:{
    Gallery
  }
}
</script>

<style lang="scss" scoped>
.containment{
  .items{
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    .cardo{
      img{
        width: 25rem;
      }
    }
  }
}
@media (min-width: 720px) {
  .containment{
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    height: 100vh;
    h2{
      position: absolute;
      z-index: 1;
      margin-top: 120px;
      font-size: 4rem;
    }
    span{
      position: relative;
      font-weight: 700;
      z-index: -1;
      font-size: 10rem;
      -webkit-text-stroke: 1px black;
      -webkit-text-fill-color: rgba(255, 255, 255, 0);
    }
    .cardo{
      margin: 50px;
      display: flex;
      align-items: flex-end;
      img{
        width: 23rem;
        height: 28rem;
      }
      .info{
        width: 200px;
        margin: 50px;
      }
    }
  }
}
</style>