import { defineConfig } from 'vitepress'
export default defineConfig({
  title: "gorps.world",
  description: "Get ready for a jorpin' good time!",
  head: [
    [
      'link',{
      rel: 'icon',
      href: './favicon.ico'
      }
    ],
    ['meta', {
      property: 'og:image',
      content: 'https://htd4myn4pg.ufs.sh/f/zm6A7YwkHDCpVEHRNbZac94SGy8UbnimdgXDv0BRTZjxLN26'
    }]
  ],
  appearance: 'force-dark',
  themeConfig: {
    logo: '../gorp.svg',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/getting-started', activeMatch: '/guide/'},
      { text: 'Wiki', link: '/wiki/items', activeMatch: '/wiki/'}
    ],
    sidebar: [
      {
        text: 'Introduction',
        base: '/wiki/',
        collapsed: false,
        items: [
          { text: 'What is Gorp\'s World?', link: '/what-is-gorps-world' },
          { text: 'Getting Started', link: '/getting-started' },
          { text: 'Story Progression', link: '/story-progression' }
        ]
      },
      {
        text: 'What\'s New?',
        collapsed: true,
        items: [
          { text: 'Items', link: '/wiki/items' },
          { text: 'Blocks', link: '/wiki/blocks' }
        ]
      }
    ]
  }
})
