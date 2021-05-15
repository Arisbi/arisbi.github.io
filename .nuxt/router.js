import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _26f18673 = () => interopDefault(import('../pages/curriculumvitae.vue' /* webpackChunkName: "pages/curriculumvitae" */))
const _6d18d84a = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _0f53c2a8 = () => interopDefault(import('../pages/illustrations.vue' /* webpackChunkName: "pages/illustrations" */))
const _521f9c08 = () => interopDefault(import('../pages/motiongraphics.vue' /* webpackChunkName: "pages/motiongraphics" */))
const _9e6fa334 = () => interopDefault(import('../pages/photography.vue' /* webpackChunkName: "pages/photography" */))
const _49264b01 = () => interopDefault(import('../pages/projects.vue' /* webpackChunkName: "pages/projects" */))
const _4a132eca = () => interopDefault(import('../pages/webdesign.vue' /* webpackChunkName: "pages/webdesign" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/curriculumvitae",
    component: _26f18673,
    name: "curriculumvitae___es"
  }, {
    path: "/en",
    component: _6d18d84a,
    name: "index___en"
  }, {
    path: "/illustrations",
    component: _0f53c2a8,
    name: "illustrations___es"
  }, {
    path: "/motiongraphics",
    component: _521f9c08,
    name: "motiongraphics___es"
  }, {
    path: "/photography",
    component: _9e6fa334,
    name: "photography___es"
  }, {
    path: "/projects",
    component: _49264b01,
    name: "projects___es"
  }, {
    path: "/webdesign",
    component: _4a132eca,
    name: "webdesign___es"
  }, {
    path: "/en/curriculumvitae",
    component: _26f18673,
    name: "curriculumvitae___en"
  }, {
    path: "/en/illustrations",
    component: _0f53c2a8,
    name: "illustrations___en"
  }, {
    path: "/en/motiongraphics",
    component: _521f9c08,
    name: "motiongraphics___en"
  }, {
    path: "/en/photography",
    component: _9e6fa334,
    name: "photography___en"
  }, {
    path: "/en/projects",
    component: _49264b01,
    name: "projects___en"
  }, {
    path: "/en/webdesign",
    component: _4a132eca,
    name: "webdesign___en"
  }, {
    path: "/",
    component: _6d18d84a,
    name: "index___es"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config.app && config.app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
