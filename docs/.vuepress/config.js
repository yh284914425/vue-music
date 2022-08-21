module.exports = {
  title: "...",
  description: "...",
  base: "/blog/",

  theme: "reco",
  locales: {
    "/": {
      lang: "zh-CN",
    },
  },
  themeConfig: {
    nav: [
      { text: "首页", link: "/" },
      {
        text: "冴羽的 JavaScript 博客",
        items: [
          { text: "Github", link: "https://github.com/mqyqingfeng" },
          {
            text: "掘金",
            link: "https://juejin.cn/user/712139234359182/posts",
          },
        ],
      },
    ],
    sidebar: [
      {
        title: "欢迎学习",
        path: "/",
        collapsable: false, // 不折叠
        children: [{ title: "学前必读", path: "/" }],
      },
      {
        title: "基础学习",
        path: "/handbook/threejs",
        collapsable: false, // 不折叠
        children: [
          { title: "threejs", path: "/handbook/threejs" },
          //   { title: "泛型", path: "/handbook/Generics" },
        ],
      },
    ],
  },
};
