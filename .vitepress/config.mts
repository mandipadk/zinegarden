import { defineConfig } from 'vitepress'
import { tabsMarkdownPlugin } from 'vitepress-plugin-tabs'


// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "zine.garden",
  description: "A digital wiki for some personal favourites of mine.",
  themeConfig: {

    logo: 'logo.svg',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Wiki', link: '/design' }
    ],

    sidebar: [
      {
        text: 'Main Wiki',
        items: [
          { text: '🎨 Design', link: '/design' },
          { text: '🛠️ Development', link: '/development' },
          { text: '📚 Miscellaneous', link: '/miscellaneous' },
          { text: '📜 Reference', link: '/reference' }
        ]
      },
      {
        text: 'Side Kicks',
        items: [
          { text: '🎉 Fun', link: '/fun' },
          { text: '❓I might use it later', link: '/maybe' },
          { text: '⚔️ No Idea Why', link: '/noidea' }
        ]
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/mandipadk/zinegarden' }
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2023 zine.garden'
    },

    search: {
      provider: 'local'
    }
  },
  markdown: {
    config(md) {
      md.use(tabsMarkdownPlugin)
    }
  }
})
