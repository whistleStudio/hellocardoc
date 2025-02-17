import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
import { backToTopPlugin } from '@vuepress/plugin-back-to-top'
import { slimsearchPlugin } from '@vuepress/plugin-slimsearch'
/* 
		<meta http-equiv="Pragma" content="no-cache" />
		<meta http-equiv="Cache-Control" content="no-cache" />
		<meta http-equiv="Expires" content="0" />
*/
export default defineUserConfig({
  bundler: viteBundler(),
  title: "HelloCar 教程",
  head: [
    ["meta", {"http-equiv": "Pragma", content: "no-cache"}],
    ["meta", {"http-equiv": "Cache-Control", content: "no-cache"}],
    ["meta", {"http-equiv": "Expires", content: "0"}]
  ],
  theme: defaultTheme({
    home: "/getting-started/快速索引.md",
    logo: "/images/cfdsxdoc-icon.png",
    logoAlt: "[当前网络不佳]",
    contributors: "Whistle Wang",

    sidebar: [
      {
        text: "准备工作",
        link: "/getting-started/快速索引.md",
        children: [
          {text: "快速索引", link: "/getting-started/快速索引.md"}
        ]
      },
      {
        text: "避障机器人",
        link: "/basic/避障机器人.md",
        collapsible: true,
      },
    ],
    sidebarDepth: 0
  }),

  base: "/tutorial/hellocardoc/",

  plugins: [
    slimsearchPlugin({
      indexContent: true,
    }),
    backToTopPlugin()
  ],
})