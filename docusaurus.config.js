// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';
const remarkMath = require('remark-math');
const rehypeKatex = require('rehype-katex');

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  
  title: 'Quach Dang Blog',
  tagline: "I am Quach Van Dang, an AI Engineer from Bac Lieu, Vietnam. Since graduating in 2022 with a specialization in AI, I have been working professionally in the field while deepening my expertise through academic research. My work involves active participation in LLM research labs, with a particular focus on the challenges of Time Series and the complexities of embedding latent spaces. My long-term goal is to build a strong theoretical foundation by obtaining a Master's in Mathematics and subsequently pursuing a PhD.",
  favicon: 'img/favicon.ico',
  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css', // Hoặc phiên bản KaTeX bạn muốn
      type: 'text/css',
      integrity: 'sha384-n8MVd4RsNIU0tAv4ct0nTaAbDJwPJzDEaqSD1odI+WdtXRGWt2kTvGFasHpSy3SV', // Mã integrity tương ứng với phiên bản
      crossorigin: 'anonymous',
    },
  ],
  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://quadang21cen.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'quadang21cen', // Usually your GitHub org/user name.
  projectName: 'quadang21cen.github.io', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  trailingSlash: false,
  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
        },
        blog: {
          // routeBasePath: '/',
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],



  ],
  // THÊM MẢNG PLUGINS NẾU CHƯA CÓ, VÀ THÊM CẤU HÌNH CHO "PAPERS"
  plugins: [
    // [
    //   '@docusaurus/plugin-content-docs',
    //   /** @type {import('@docusaurus/plugin-content-docs').Options} */
    //   ({
    //     id: 'papers', // ID duy nhất cho instance này
    //     path: 'papers', // Thư mục chứa nội dung markdown cho "Paper"
    //     routeBasePath: 'papers', // Đường dẫn URL (ví dụ: yoursite.com/papers)
    //     sidebarPath: './sidebarsPapers.js', // File sidebar riêng cho "Paper"
    //     editUrl:
    //       'https://github.com/quadang21cen/quadang21cen.github.io/tree/main/', // Thay bằng link repo của bạn
    //     remarkPlugins: [remarkMath],
    //     rehypePlugins: [rehypeKatex],
    //     // Bạn có thể thêm các tùy chọn khác như versioning nếu cần
    //     // showLastUpdateTime: true,
    //     // showLastUpdateAuthor: true,
    //   }),
    // ],

    // [
    //   '@docusaurus/plugin-content-blog',
    //   {
    //     id: 'papers-blog',           // ID plugin (tùy chọn)
    //     path: 'papers',              // Thư mục markdown của bạn
    //     routeBasePath: 'papers',     // URL: site.com/papers
    //     blogTitle: 'Papers',         // Tiêu đề trang blog
    //     blogDescription: 'Danh sách các Paper của tôi',
    //     showReadingTime: true,
    //     remarkPlugins: [remarkMath],
    //     rehypePlugins: [rehypeKatex],
    //   },
    // ],

    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'analysis',
        path: 'analysis',
        routeBasePath: 'analysis',
        sidebarPath: require.resolve('./sidebarsAnalysis.js'),
        editUrl: 'https://github.com/quadang21cen/quadang21cen.github.io/tree/main/',
        remarkPlugins: [require('remark-math')],
        rehypePlugins: [require('rehype-katex')],
        
        // Thêm các option giống docs preset
        showLastUpdateTime: true,
        showLastUpdateAuthor: true,
        sidebarCollapsible: true,     // Sidebar có thể collapse
        sidebarCollapsed: false,      // Mặc định mở
      },
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      metadata: [
        {name: 'google-site-verification', content: 'hw5c3N5_0S6J1g9F8wwlILr9NCi7nFdRCWw9gVSTHRw'},
      ],
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Quadang21cen',
        logo: {
          alt: 'Quadang21cen Logo',
          src: 'img/logo.svg',
        },
        items: [
          // {
          //   type: 'docSidebar',
          //   sidebarId: 'tutorialSidebar',
          //   position: 'left',
          //   label: 'Linear Algebra',
          // },

          {
            type: 'docSidebar',
            sidebarId: 'analysisSidebar',  // ID trùng với key trong sidebarsAnalysis.js
            position: 'left',
            label: 'Analysis',
            docsPluginId: 'analysis',     // ⚠️ Bắt buộc nếu dùng nhiều plugin
          },
          {
            to: '/blog', 
            label: 'Blog', 
            position: 'left'
          },
          // {
          //   to: '/papers/intro',
          //   label: 'Paper',
          //   position: 'left',
          //   docsPluginId: 'papers'
          // },
          {
            href: 'https://github.com/quadang21cen',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          // {
          //   title: 'Docs',
          //   items: [
          //     {
          //       label: 'Tutorial',
          //       to: '/docs/intro',
          //     },
          //   ],
          // },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'X',
                href: 'https://x.com/docusaurus',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/facebook/docusaurus',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Quach Dang, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};
module.exports = config;
// export default config;
