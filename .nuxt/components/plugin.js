import Vue from 'vue'
import { wrapFunctional } from './utils'

const components = {
  BigCircle: () => import('../../components/BigCircle.vue' /* webpackChunkName: "components/big-circle" */).then(c => wrapFunctional(c.default || c)),
  ByCh: () => import('../../components/ByCh.vue' /* webpackChunkName: "components/by-ch" */).then(c => wrapFunctional(c.default || c)),
  Lines: () => import('../../components/Lines.vue' /* webpackChunkName: "components/lines" */).then(c => wrapFunctional(c.default || c)),
  LogoCh: () => import('../../components/LogoCh.vue' /* webpackChunkName: "components/logo-ch" */).then(c => wrapFunctional(c.default || c)),
  LogoChBig: () => import('../../components/LogoChBig.vue' /* webpackChunkName: "components/logo-ch-big" */).then(c => wrapFunctional(c.default || c)),
  SmallCircle: () => import('../../components/SmallCircle.vue' /* webpackChunkName: "components/small-circle" */).then(c => wrapFunctional(c.default || c)),
  Wave: () => import('../../components/Wave.vue' /* webpackChunkName: "components/wave" */).then(c => wrapFunctional(c.default || c)),
  Galleryimage: () => import('../../components/galleryimage.vue' /* webpackChunkName: "components/galleryimage" */).then(c => wrapFunctional(c.default || c)),
  Menu: () => import('../../components/menu.vue' /* webpackChunkName: "components/menu" */).then(c => wrapFunctional(c.default || c))
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}
