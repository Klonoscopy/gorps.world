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
      { text: 'Wiki', link: '/wiki/gettingstarted', activeMatch: '/wiki/'}
    ],
    sidebar: [
      {
        text: 'Introduction',
        base: '/wiki/',
        collapsed: false,
        items: [
          { text: 'Getting Started', link: '/gettingstarted' },
          { text: 'Story Progression', link: '/storyprogression' }
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
