import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _15aba5f2 = () => interopDefault(import('../pages/curriculumvitae.vue' /* webpackChunkName: "pages/curriculumvitae" */))
const _66fba36f = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _47ef5a40 = () => interopDefault(import('../pages/illustrations.vue' /* webpackChunkName: "pages/illustrations" */))
const _14a45a18 = () => interopDefault(import('../pages/motiongraphics.vue' /* webpackChunkName: "pages/motiongraphics" */))
const _1ae33efa = () => interopDefault(import('../pages/photography.vue' /* webpackChunkName: "pages/photography" */))
const _65b322ed = () => interopDefault(import('../pages/projects.vue' /* webpackChunkName: "pages/projects" */))
const _50048e2f = () => interopDefault(import('../pages/webdesign.vue' /* webpackChunkName: "pages/webdesign" */))

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
    component: _15aba5f2,
    name: "curriculumvitae___es"
  }, {
    path: "/en",
    component: _66fba36f,
    name: "index___en"
  }, {
    path: "/illustrations",
    component: _47ef5a40,
    name: "illustrations___es"
  }, {
    path: "/motiongraphics",
    component: _14a45a18,
    name: "motiongraphics___es"
  }, {
    path: "/photography",
    component: _1ae33efa,
    name: "photography___es"
  }, {
    path: "/projects",
    component: _65b322ed,
    name: "projects___es"
  }, {
    path: "/webdesign",
    component: _50048e2f,
    name: "webdesign___es"
  }, {
    path: "/en/curriculumvitae",
    component: _15aba5f2,
    name: "curriculumvitae___en"
  }, {
    path: "/en/illustrations",
    component: _47ef5a40,
    name: "illustrations___en"
  }, {
    path: "/en/motiongraphics",
    component: _14a45a18,
    name: "motiongraphics___en"
  }, {
    path: "/en/photography",
    component: _1ae33efa,
    name: "photography___en"
  }, {
    path: "/en/projects",
    component: _65b322ed,
    name: "projects___en"
  }, {
    path: "/en/webdesign",
    component: _50048e2f,
    name: "webdesign___en"
  }, {
    path: "/",
    component: _66fba36f,
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
