<template>
<div class="grid-item">
      <div v-b-modal.imagemodal class="contain pop" :class="product.item">
        <a class="product overlay-img">
            <img :src="product.src" alt="" style="object-fit: cover">
            <div class="overlay">
                <div class="text">
                    <h4>{{product.title}}</h4>
                    <h5>{{product.hashtag}}</h5>
                </div>
            </div>
        </a>
      </div>
      </div>
</template>

<script>
export default {
    name: 'product',
    props:['product']
}
</script>

<style lang="scss">

</style>