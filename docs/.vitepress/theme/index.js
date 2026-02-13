import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import './default.css'
import './wiki.css'

import StoreBadge from '../../components/StoreBadge.vue'

/** @type {import('vitepress').Theme} */
export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('StoreBadge', StoreBadge)
  },
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
    })
  }
}
