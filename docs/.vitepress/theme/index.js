import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import './default.css'
import './home.css'
import './wiki.css'
import Wiki from './wiki.vue'

/** @type {import('vitepress').Theme} */
export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
    })
  },
  enhanceApp({ app, router, siteData }) {
    app.component('wiki', Wiki)
  }
}
