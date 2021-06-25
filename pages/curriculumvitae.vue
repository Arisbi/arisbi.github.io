<template>
  <b-container fluid class="cv">
    <b-row>
      <b-col cols="4" class="profile">
        <img class="img-profile" src="@/assets/astronaut12.png" alt="" style="object-fit: cover;">
      </b-col>
      <b-col class="work">
        <div>
          <h4>Experiencia</h4>
        </div>
        <h5 class="mt-5">Senior UX/UI Designer</h5>
        <h5 class="mt-3">Homie - Febrero 2020 / Actual</h5>
        <p class="mt-4">Senior UX/UI Designer trabajando con un equipo de producto de manera colaborativa y con diferentes áreas de la empresa
            como Marketing e IT para la continua mejora del sitio web.
        </p>
        <p>
            Mi trabajo estuvo enfocado en el diseño de un CRM para la empresa y la mejora de distintos procesos para la renta de 
            inmuebles. Formé parte de diferentes células para la creación de benchmarks y research del lado de UX para la creación 
            de flujos acertivos y wireframes para crear pantallas de alta fidelidad en conjunto con mi equipo UI. Fui parte de los 
            diseños de landing pages, CRM y creación de guías de estilo para nuestro producto, también ocupé mis conocimientos de 
            front end para facilitar la comunicación entre las áreas de IT y Producto.
        </p>
        
        <h5 class="mt-5">Senior UX/UI Designer / Front End / Marketing Digital Jr.</h5>
        <h5 class="mt-3">Smart Service Transformation Consulting - Mayo 2019 / Enero 2020</h5>
        <p class="mt-4">Senior UX/UI Designer trabajando con un muy buen equipo de IT en el desarrollo de aplicaciones Android e IOS.
        </p>
        <p>
            Mi desempeño fue la construcción de un CRM en múltiples dispositivos y me encargué del promocionar a nivel marketing el 
            producto en conjunto de redes sociales como google analytics y Facebook, también realice la construcción de sus sitios 
            web en front end con React.js y Gatsby.
        </p>

        <h5 class="mt-5">Jr. UX/UI Designer / Front End Jr.</h5>
        <h5 class="mt-3">Concept Haus - Septiembre 2017 / Mayo 2019</h5>
        <p class="mt-4">Trabajé en el diseño de múltiples páginas web como e-commerce, landing pages, y CRMs.
        </p>
        <p>
            Tuve la oportunidad de trabajar por primera vez con un equipo de TI presentando múltiples etapas del diseño UI/UX como 
            prototipos, flujos de navegación, wireframes y diseños de alta fidelidad con diferentes herramientas (XD Adobe y Zeplin) 
            para el desarrollo en sitios web y aplicaciones nativas IOS.
        </p>
        <p>
            También aprendí a manejar el código desde un inicio con Wordpress para después desarrollarme en wireframes como Laravel, 
            Angular y React del lado Front End.
        </p>

        <h4 class="mt-5" >Licenciatura</h4>
        <p class="mt-3" >/2013 - 2016</p>
        <p class="mt-3" >Lic. en diseño gráfico</p>
      </b-col>
    </b-row>
    <hr>
    <b-row class="specialties">
      <b-col class="skills">
        <h5>Skills en diseño</h5>
        <b-row>
          <b-col>
          <ul>
            <li>Identidad corporativa</li>
            <li>Diseño branding</li>
            <li>Diseño de guía de estilos</li>
            <li>Diseño de logotipos</li>
            <li>Diseño de interfaces</li>
          </ul>
        </b-col>
        <b-col>
          <ul>
            <li>Diseño Web</li>
            <li>Motion Graphics</li>
            <li>Diseño de prototipos</li>
            <li>Ilustración digital</li>
            <li>Diseño 3D</li>
          </ul>
        </b-col>
        </b-row>
      </b-col>
       <b-col class="software">
         <h5>Software</h5>
         <b-row>
          <b-col>
            <ul>
              <li>Adobe Photoshop</li>
              <li>Adobe Illustrator</li>
              <li>Adobe After Effects</li>
              <li>Adobe xD</li>
              <li>Sketch</li>
              <li>Figma</li>
              <li>Flinto</li>
              <li>XCode</li>
            </ul>
          </b-col>
        <b-col>
          <ul>
            <li>Visual Studio Code</li>
            <li>Blender</li>
            <li>Invision</li>
            <li>Zeplin</li>
            <li>Avocode</li>
            <li>Whimsical</li>
            <li>Miro</li>
            <li>Hotjar</li>
         </ul>
        </b-col>
        </b-row>
      </b-col>
       <b-col class="tools">
         <h5>Front End / Tools</h5>
         <b-row>
          <b-col>
         <ul>
          <li>Html5 & Css</li>
          <li>Sass / Scss</li>
          <li>JavaScript</li>
            <ul class="sub-list">
              <li>Vue.js</li>
              <li>Nuxt.js</li>
              <li>React.js</li>
              <li>Gatsby.js</li>
              <li>Next.js</li>
            </ul>
            </ul>
          </b-col>
            <b-col>
              <ul>
                <li>Laravel</li>
                <li>Angular</li>
                <li>GreenSock</li>
                <li>Lottie</li>
                <li>Storybook</li>
              </ul>
            </b-col>
        </b-row>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.cv{
  padding: 250px 25px 100px 25px;
  .img-profile{
    width: 25rem;
    height: 33rem;
    position: sticky;
    top: 5rem;
  }
  .work{
    padding: 0 50px;
  }
  hr{
    margin-top: 4rem;
    margin-bottom: 4rem;
    border-top: 1px solid var(--color);
  }
  ul{
    padding: 0;
    li{
      list-style: none;
    }
  }
  .sub-list{
    padding-left: 16px;
  }
}
</style>
