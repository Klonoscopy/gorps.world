import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import './default.css'
import './wiki.css'

import StoreBadge from '../../components/StoreBadge.vue'
import InfoModal from '../../components/InfoModal.vue'
import WikiEntry from '../../components/WikiEntry.vue'

/** @type {import('vitepress').Theme} */
export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('StoreBadge', StoreBadge)
    app.component('InfoModal', InfoModal)
    app.component('WikiEntry', WikiEntry)
  },
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
    })
  }
}
