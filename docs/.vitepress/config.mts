import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  cleanUrls: true,
  title: "gorps.world",
  appearance: 'force-dark',
  description: "A Gorp\'s World like no other.",
  head: [
    ['link', { rel: 'icon', type: 'image/png', href: '../assets/textures/item/gorp.png' }],
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '../assets/textures/item/gorp.svg' }],
    ['meta', { name: 'theme-color', content: '#ade344' }],
    ['meta', { name: 'darkreader-lock' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:site_name', content: 'Gorp\'s World' }],
    ['meta', { property: 'og:image', content: '../../gorpsworldicon.png' }],
    ['meta', { property: 'og:url', content: 'https://gorps.world/' }]
  ],
  themeConfig: {
    nav: nav(),

    sidebar: {
      '/guide/': { base: '/guide/', items: sidebarGuide() },
      '/wiki/': { base: '/wiki/', items: sidebarReference() }
    },

    logo: { src: '../gorp.svg', width: 32, height: 32 },

    socialLinks: [
      { icon: 'youtube', link: 'https://youtube.com/@gorpdev' },
      { icon: 'tiktok', link: 'https://tiktok.com/@gorpdev' },
      { icon: 'twitch', link: 'https://twitch.tv/gorpdev' },
      { icon: 'bluesky', link: 'https://bsky.app/profile/gorps.world' },
      { icon: 'reddit', link: 'https://reddit.com/r/gorpsworld' },
      { icon: 'twitter', link: 'https://twitter.com/gorpdev' }
    ],
  }
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
      component: 'StoreBadge',
      props: {
        badge: 'NEW',
        text: 'Store',
        link: '/store'
      }
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
