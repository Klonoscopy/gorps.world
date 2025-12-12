import { defineConfig } from 'vitepress'
export default defineConfig({
  title: "Gorp's World",
  description: "Get ready for a jorpin' good time!",
  head: [['link', {rel: 'icon', href: './favicon.ico' }]],
  appearance: 'force-dark',
  themeConfig: {
    logo: './gorp.svg',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Wiki', link: '/wiki' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
