import {
  defineConfig,
  resolveSiteDataByRoute,
  type HeadConfig
} from 'vitepress'

const prod = !!process.env.NETLIFY

export default defineConfig({
  title: 'gorps.world',
  cleanUrls: true,

  sitemap: {
    hostname: 'https://gorps.world',
    transformItems(items) {
      return items.filter((item) => !item.url.includes('migration'))
    }
  },

  head: [
    [
      'link',
      { rel: 'icon', type: 'image/svg+xml', href: '../gorp.svg' }
    ],
    [
      'link',
      { rel: 'icon', type: 'image/png', href: '../assets/textures/item/gorp.png' }
    ],
    ['meta', { name: 'theme-color', content: '#ade344' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:site_name', content: 'Gorp\'s World' }],
    [
      'meta',
      {
        property: 'og:image',
        content: 'https://htd4myn4pg.ufs.sh/f/zm6A7YwkHDCpVEHRNbZac94SGy8UbnimdgXDv0BRTZjxLN26'
      }
    ],
    ['meta', { property: 'og:url', content: 'https://gorps.world/' }]
  ],

  themeConfig: {
    logo: { src: '../gorp.svg', width: 32, height: 32 },

    socialLinks: [
      { icon: 'youtube', link: 'https://youtube.com/@gorpdev' },
      { icon: 'tiktok', link: 'https://tiktok.com/@gorpdev' },
      { icon: 'twitch', link: 'https://twitch.tv/gorpdev' },
      { icon: 'bluesky', link: 'https://bsky.app/profile/gorps.world' },
      { icon: 'reddit', link: 'https://reddit.com/r/gorpsworld' },
      { icon: 'twitter', link: 'https://twitter.com/gorpdev' }
    ],
  },

  transformPageData: prod
  ? (pageData, ctx) => {
    const site = resolveSiteDataByRoute(
      ctx.siteConfig.site,
      pageData.relativePath
    )
    const title = `${pageData.title || site.title} | ${pageData.description || site.description}`
    ;((pageData.frontmatter.head ??= []) as HeadConfig[]).push(
      ['meta', { property: 'og:title', content: title }]
    )
  }
  : undefined
})
