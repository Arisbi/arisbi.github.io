import Vue from 'vue'

import Meta from 'vue-meta'
import ClientOnly from 'vue-client-only'
import NoSsr from 'vue-no-ssr'
import { createRouter } from './router.js'
import NuxtChild from './components/nuxt-child.js'
import NuxtError from './components/nuxt-error.vue'
import Nuxt from './components/nuxt.js'
import App from './App.js'
import { setContext, getLocation, getRouteData, normalizeError } from './utils'

/* Plugins */

import nuxt_plugin_plugin_0b8f51cd from 'nuxt_plugin_plugin_0b8f51cd' // Source: ./components/plugin.js (mode: 'all')
import nuxt_plugin_bootstrapvue_a89858dc from 'nuxt_plugin_bootstrapvue_a89858dc' // Source: ./bootstrap-vue.js (mode: 'all')
import nuxt_plugin_pluginrouting_52fd90fa from 'nuxt_plugin_pluginrouting_52fd90fa' // Source: ./nuxt-i18n/plugin.routing.js (mode: 'all')
import nuxt_plugin_pluginmain_6d7f9acc from 'nuxt_plugin_pluginmain_6d7f9acc' // Source: ./nuxt-i18n/plugin.main.js (mode: 'all')
import nuxt_plugin_pluginserver_3becd60e from 'nuxt_plugin_pluginserver_3becd60e' // Source: ./color-mode/plugin.server.js (mode: 'server')
import nuxt_plugin_pluginclient_7c502371 from 'nuxt_plugin_pluginclient_7c502371' // Source: ./color-mode/plugin.client.js (mode: 'client')

// Component: <ClientOnly>
Vue.component(ClientOnly.name, ClientOnly)

// TODO: Remove in Nuxt 3: <NoSsr>
Vue.component(NoSsr.name, {
  ...NoSsr,
  render (h, ctx) {
    if (process.client && !NoSsr._warned) {
      NoSsr._warned = true

      console.warn('<no-ssr> has been deprecated and will be removed in Nuxt 3, please use <client-only> instead')
    }
    return NoSsr.render(h, ctx)
  }
})

// Component: <NuxtChild>
Vue.component(NuxtChild.name, NuxtChild)
Vue.component('NChild', NuxtChild)

// Component NuxtLink is imported in server.js or client.js

// Component: <Nuxt>
Vue.component(Nuxt.name, Nuxt)

Object.defineProperty(Vue.prototype, '$nuxt', {
  get() {
    return this.$root.$options.$nuxt
  },
  configurable: true
})

Vue.use(Meta, {"keyName":"head","attribute":"data-n-head","ssrAttribute":"data-n-head-ssr","tagIDKeyName":"hid"})

const defaultTransition = {"name":"page","mode":"out-in","appear":false,"appearClass":"appear","appearActiveClass":"appear-active","appearToClass":"appear-to"}

async function createApp(ssrContext, config = {}) {
  const router = await createRouter(ssrContext, config)

  // Create Root instance

  // here we inject the router and store to all child components,
  // making them available everywhere as `this.$router` and `this.$store`.
  const app = {
    head: {"title":"Charisbi","htmlAttrs":{"lang":"en"},"meta":[{"charset":"utf-8"},{"name":"viewport","content":"width=device-width, initial-scale=1"},{"hid":"description","name":"description","content":""}],"link":[{"rel":"icon","type":"image\u002Fx-icon","href":"\u002Ffavicon.ico"},{"rel":"stylesheet","href":"jquery.page.css"}],"script":[{"src":"https:\u002F\u002Fcode.jquery.com\u002Fjquery-3.3.1.slim.min.js","type":"text\u002Fjavascript"},{"src":"jquery.page.css","type":"text\u002Fjavascript"},{"hid":"nuxt-color-mode-script","innerHTML":"!function(){\"use strict\";var e=window,s=document,o=s.documentElement,a=[\"dark\",\"light\"],t=window.localStorage.getItem(\"nuxt-color-mode\")||\"system\",c=\"system\"===t?l():t,i=s.body.getAttribute(\"data-color-mode-forced\");function r(e){var s=\"\"+e+\"-mode\";o.classList?o.classList.add(s):o.className+=\" \"+s}function n(s){return e.matchMedia(\"(prefers-color-scheme\"+s+\")\")}function l(){if(e.matchMedia&&\"not all\"!==n(\"\").media)for(var s of a)if(n(\":\"+s).matches)return s;return\"light\"}i&&(c=i),r(c),e[\"__NUXT_COLOR_MODE__\"]={preference:t,value:c,getColorScheme:l,addClass:r,removeClass:function(e){var s=\"\"+e+\"-mode\";o.classList?o.classList.remove(s):o.className=o.className.replace(new RegExp(s,\"g\"),\"\")}}}();\n","pbody":true}],"style":[],"__dangerouslyDisableSanitizersByTagID":{"nuxt-color-mode-script":["innerHTML"]}},

    router,
    nuxt: {
      defaultTransition,
      transitions: [defaultTransition],
      setTransitions (transitions) {
        if (!Array.isArray(transitions)) {
          transitions = [transitions]
        }
        transitions = transitions.map((transition) => {
          if (!transition) {
            transition = defaultTransition
          } else if (typeof transition === 'string') {
            transition = Object.assign({}, defaultTransition, { name: transition })
          } else {
            transition = Object.assign({}, defaultTransition, transition)
          }
          return transition
        })
        this.$options.nuxt.transitions = transitions
        return transitions
      },

      err: null,
      dateErr: null,
      error (err) {
        err = err || null
        app.context._errored = Boolean(err)
        err = err ? normalizeError(err) : null
        let nuxt = app.nuxt // to work with @vue/composition-api, see https://github.com/nuxt/nuxt.js/issues/6517#issuecomment-573280207
        if (this) {
          nuxt = this.nuxt || this.$options.nuxt
        }
        nuxt.dateErr = Date.now()
        nuxt.err = err
        // Used in src/server.js
        if (ssrContext) {
          ssrContext.nuxt.error = err
        }
        return err
      }
    },
    ...App
  }

  const next = ssrContext ? ssrContext.next : location => app.router.push(location)
  // Resolve route
  let route
  if (ssrContext) {
    route = router.resolve(ssrContext.url).route
  } else {
    const path = getLocation(router.options.base, router.options.mode)
    route = router.resolve(path).route
  }

  // Set context to app.context
  await setContext(app, {
    route,
    next,
    error: app.nuxt.error.bind(app),
    payload: ssrContext ? ssrContext.payload : undefined,
    req: ssrContext ? ssrContext.req : undefined,
    res: ssrContext ? ssrContext.res : undefined,
    beforeRenderFns: ssrContext ? ssrContext.beforeRenderFns : undefined,
    ssrContext
  })

  function inject(key, value) {
    if (!key) {
      throw new Error('inject(key, value) has no key provided')
    }
    if (value === undefined) {
      throw new Error(`inject('${key}', value) has no value provided`)
    }

    key = '$' + key
    // Add into app
    app[key] = value
    // Add into context
    if (!app.context[key]) {
      app.context[key] = value
    }

    // Check if plugin not already installed
    const installKey = '__nuxt_' + key + '_installed__'
    if (Vue[installKey]) {
      return
    }
    Vue[installKey] = true
    // Call Vue.use() to install the plugin into vm
    Vue.use(() => {
      if (!Object.prototype.hasOwnProperty.call(Vue.prototype, key)) {
        Object.defineProperty(Vue.prototype, key, {
          get () {
            return this.$root.$options[key]
          }
        })
      }
    })
  }

  // Inject runtime config as $config
  inject('config', config)

  // Add enablePreview(previewData = {}) in context for plugins
  if (process.static && process.client) {
    app.context.enablePreview = function (previewData = {}) {
      app.previewData = Object.assign({}, previewData)
      inject('preview', previewData)
    }
  }
  // Plugin execution

  if (typeof nuxt_plugin_plugin_0b8f51cd === 'function') {
    await nuxt_plugin_plugin_0b8f51cd(app.context, inject)
  }

  if (typeof nuxt_plugin_bootstrapvue_a89858dc === 'function') {
    await nuxt_plugin_bootstrapvue_a89858dc(app.context, inject)
  }

  if (typeof nuxt_plugin_pluginrouting_52fd90fa === 'function') {
    await nuxt_plugin_pluginrouting_52fd90fa(app.context, inject)
  }

  if (typeof nuxt_plugin_pluginmain_6d7f9acc === 'function') {
    await nuxt_plugin_pluginmain_6d7f9acc(app.context, inject)
  }

  if (process.server && typeof nuxt_plugin_pluginserver_3becd60e === 'function') {
    await nuxt_plugin_pluginserver_3becd60e(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_pluginclient_7c502371 === 'function') {
    await nuxt_plugin_pluginclient_7c502371(app.context, inject)
  }

  // Lock enablePreview in context
  if (process.static && process.client) {
    app.context.enablePreview = function () {
      console.warn('You cannot call enablePreview() outside a plugin.')
    }
  }

  // If server-side, wait for async component to be resolved first
  if (process.server && ssrContext && ssrContext.url) {
    await new Promise((resolve, reject) => {
      router.push(ssrContext.url, resolve, (err) => {
        // https://github.com/vuejs/vue-router/blob/v3.4.3/src/util/errors.js
        if (!err._isRouter) return reject(err)
        if (err.type !== 2 /* NavigationFailureType.redirected */) return resolve()

        // navigated to a different route in router guard
        const unregister = router.afterEach(async (to, from) => {
          ssrContext.url = to.fullPath
          app.context.route = await getRouteData(to)
          app.context.params = to.params || {}
          app.context.query = to.query || {}
          unregister()
          resolve()
        })
      })
    })
  }

  return {
    app,
    router
  }
}

export { createApp, NuxtError }
