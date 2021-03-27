import Vue from 'vue'

const components = {
  BigCircle: () => import('../../components/BigCircle.vue' /* webpackChunkName: "components/big-circle" */).then(c => c.default || c),
  Gallery: () => import('../../components/Gallery.vue' /* webpackChunkName: "components/gallery" */).then(c => c.default || c),
  LogoCh: () => import('../../components/LogoCh.vue' /* webpackChunkName: "components/logo-ch" */).then(c => c.default || c),
  LogoChBig: () => import('../../components/LogoChBig.vue' /* webpackChunkName: "components/logo-ch-big" */).then(c => c.default || c),
  More: () => import('../../components/More.vue' /* webpackChunkName: "components/more" */).then(c => c.default || c),
  SmallCircle: () => import('../../components/SmallCircle.vue' /* webpackChunkName: "components/small-circle" */).then(c => c.default || c),
  Wave: () => import('../../components/Wave.vue' /* webpackChunkName: "components/wave" */).then(c => c.default || c),
  Menu: () => import('../../components/menu.vue' /* webpackChunkName: "components/menu" */).then(c => c.default || c)
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}
