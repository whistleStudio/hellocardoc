import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
import { backToTopPlugin } from '@vuepress/plugin-back-to-top'
import { slimsearchPlugin } from '@vuepress/plugin-slimsearch'

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
    sidebarDepth: 0,
    sidebar: [
      {
        text: "准备工作",
        link: "/getting-started/快速索引.md",
        children: [
          {text: "快速索引", link: "/getting-started/快速索引.md"},
          {text: "编程软件", link: "/getting-started/编程软件.md"},
          {text: "结构搭建", link: "/getting-started/结构搭建.md"},
          {text: "注意事项", link: "/getting-started/注意事项.md"},
          {text: "服务支持", link: "/getting-started/服务支持.md"}
        ]
      },
      { 
        text: "—— 基础（小学）——",
      },
      {
        text: "避障机器人",
        link: "/basic/避障机器人.md",
        // collapsible: true, /* 含子目录时取消注释 */
      },
      {
        text: "沿墙行走机器人",
        link: "/basic/沿墙行走机器人.md",
      },
      {
        text: "跟随机器人",
        link: "/basic/跟随机器人.md",
      },
      {
        text: "光强检测机器人",
        link: "/basic/光强检测机器人.md",
      },
      {
        text: "巡线机器人",
        link: "/basic/巡线机器人.md",
      },
      { 
        text: "—— 进阶（中学）——",
      },
    ]
  }),

  base: "/tutorial/hellocardoc/",

  plugins: [
    slimsearchPlugin({
      indexContent: true,
    }),
    backToTopPlugin()
  ],
})