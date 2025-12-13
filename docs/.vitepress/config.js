import { defineConfig } from 'vitepress'
export default defineConfig({
  title: "Gorp's World",
  description: "Get ready for a jorpin' good time!",
  head: [
    [
      'link',{
      rel: 'icon',
      href: './favicon.ico'
      }
    ],
    ['meta', {
      property: 'image',
      content: './gorpsworldicon.png'
    }]
  ],
  appearance: 'force-dark',
  themeConfig: {
    logo: '../gorp.svg',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Wiki', link: '/wiki/gettingstarted' }
    ],

    sidebar: [
      {
        text: 'Introduction',
        items: [
          { text: 'Getting Started', link: '/wiki/gettingstarted' },
          { text: 'Story Progression', link: '/wiki/storyprogression' }
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
