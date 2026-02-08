import { createRequire } from 'module'
import { defineAdditionalConfig } from 'vitepress'

const require = createRequire(import.meta.url)
const pkg = require('../package.json')

export default defineAdditionalConfig({
  description: 'Get ready for a jorpin\' good time!',

  themeConfig: {
    nav: nav(),

    sidebar: {
      '/guide/': { base: '/guide/', items: sidebarGuide() },
      '/wiki/': { base: '/wiki/', items: sidebarReference() }
    }
  },
  appearance: 'force-dark',
})

function nav(): DefaultTheme.NavItem[] {
  return [
    {
      text: 'Update 10',
      items: [
        {
          text: 'Changelog',
          link: 'https://github.com/klonoscopy/gorps.world/blob/dev/CHANGELOG.md'
        }
      ]
    },
    {
      text: 'Guide',
      link: '/guide/what-is-gorps-world',
      activeMatch: '/guide/'
    },
    {
      text: 'Wiki',
      link: '/wiki/items',
      activeMatch: '/wiki/'
    },
    {
      text: 'Store',
      link: '/store'
    }
  ]
}

function sidebarGuide(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'Guide',
      collapsed: false,
      items: [
        { text: 'What is Gorp\'s World?', link: 'what-is-gorps-world' },
        { text: 'Getting Started', link: 'getting-started' },
        { text: 'Story Progression', link: 'story-progression' }
      ]
    },
    {
      text: 'Wiki',
      collapsed: true,
      items: [
        { text: 'Items', link: '../wiki/items' },
        { text: 'Blocks', link: '../wiki/blocks' }
      ]
    }
  ]
}

function sidebarReference(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'Wiki',
      items: [
        { text: 'Items', link: 'items' },
        { text: 'Blocks', link: 'blocks' }
      ]
    },
    {
      text: 'Guide',
      collapsed: true,
      base: '/guide/',
      items: [
        { text: 'What is Gorp\'s World?', link: 'what-is-gorps-world' },
        { text: 'Getting Started', link: 'getting-started' },
        { text: 'Story Progression', link: 'story-progression' }
      ]
    }
  ]
}
