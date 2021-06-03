import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _4696ced6 = () => interopDefault(import('../pages/curriculumvitae.vue' /* webpackChunkName: "pages/curriculumvitae" */))
const _8ec2ef06 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _2a9b514e = () => interopDefault(import('../pages/illustrations.vue' /* webpackChunkName: "pages/illustrations" */))
const _6880bda6 = () => interopDefault(import('../pages/motiongraphics.vue' /* webpackChunkName: "pages/motiongraphics" */))
const _029da188 = () => interopDefault(import('../pages/photography.vue' /* webpackChunkName: "pages/photography" */))
const _7c0c12f8 = () => interopDefault(import('../pages/project.vue' /* webpackChunkName: "pages/project" */))
const _fe1f09c2 = () => interopDefault(import('../pages/projects.vue' /* webpackChunkName: "pages/projects" */))
const _c71b8786 = () => interopDefault(import('../pages/webdesign.vue' /* webpackChunkName: "pages/webdesign" */))

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
    component: _4696ced6,
    name: "curriculumvitae___es"
  }, {
    path: "/en",
    component: _8ec2ef06,
    name: "index___en"
  }, {
    path: "/illustrations",
    component: _2a9b514e,
    name: "illustrations___es"
  }, {
    path: "/motiongraphics",
    component: _6880bda6,
    name: "motiongraphics___es"
  }, {
    path: "/photography",
    component: _029da188,
    name: "photography___es"
  }, {
    path: "/project",
    component: _7c0c12f8,
    name: "project___es"
  }, {
    path: "/projects",
    component: _fe1f09c2,
    name: "projects___es"
  }, {
    path: "/webdesign",
    component: _c71b8786,
    name: "webdesign___es"
  }, {
    path: "/en/curriculumvitae",
    component: _4696ced6,
    name: "curriculumvitae___en"
  }, {
    path: "/en/illustrations",
    component: _2a9b514e,
    name: "illustrations___en"
  }, {
    path: "/en/motiongraphics",
    component: _6880bda6,
    name: "motiongraphics___en"
  }, {
    path: "/en/photography",
    component: _029da188,
    name: "photography___en"
  }, {
    path: "/en/project",
    component: _7c0c12f8,
    name: "project___en"
  }, {
    path: "/en/projects",
    component: _fe1f09c2,
    name: "projects___en"
  }, {
    path: "/en/webdesign",
    component: _c71b8786,
    name: "webdesign___en"
  }, {
    path: "/",
    component: _8ec2ef06,
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
