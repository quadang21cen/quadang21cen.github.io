import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '5ff'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '5ba'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'a2b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'c3c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '156'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '88c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '000'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog', 'bdf'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '182'),
    exact: true
  },
  {
    path: '/blog/authors',
    component: ComponentCreator('/blog/authors', '0b7'),
    exact: true
  },
  {
    path: '/blog/authors/all-dang-quach-articles',
    component: ComponentCreator('/blog/authors/all-dang-quach-articles', '55d'),
    exact: true
  },
  {
    path: '/blog/authors/all-sebastien-lorber-articles',
    component: ComponentCreator('/blog/authors/all-sebastien-lorber-articles', '0a8'),
    exact: true
  },
  {
    path: '/blog/authors/yangshun',
    component: ComponentCreator('/blog/authors/yangshun', 'db6'),
    exact: true
  },
  {
    path: '/blog/fukuzawa-yukichi',
    component: ComponentCreator('/blog/fukuzawa-yukichi', '06f'),
    exact: true
  },
  {
    path: '/blog/long-blog-post',
    component: ComponentCreator('/blog/long-blog-post', 'aea'),
    exact: true
  },
  {
    path: '/blog/mdx-blog-post',
    component: ComponentCreator('/blog/mdx-blog-post', 'e9f'),
    exact: true
  },
  {
    path: '/blog/simple-exp-tnse',
    component: ComponentCreator('/blog/simple-exp-tnse', '0e5'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', '287'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus',
    component: ComponentCreator('/blog/tags/docusaurus', 'fcd'),
    exact: true
  },
  {
    path: '/blog/tags/facebook',
    component: ComponentCreator('/blog/tags/facebook', '858'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello', '4ad'),
    exact: true
  },
  {
    path: '/blog/tags/history',
    component: ComponentCreator('/blog/tags/history', '900'),
    exact: true
  },
  {
    path: '/blog/tags/motivation',
    component: ComponentCreator('/blog/tags/motivation', 'ff5'),
    exact: true
  },
  {
    path: '/blog/tags/science',
    component: ComponentCreator('/blog/tags/science', '92d'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome', 'd2b'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '3d7'),
    exact: true
  },
  {
    path: '/analysis',
    component: ComponentCreator('/analysis', 'e33'),
    routes: [
      {
        path: '/analysis',
        component: ComponentCreator('/analysis', '8a4'),
        routes: [
          {
            path: '/analysis',
            component: ComponentCreator('/analysis', '9d9'),
            routes: [
              {
                path: '/analysis/analysis-intro',
                component: ComponentCreator('/analysis/analysis-intro', '076'),
                exact: true,
                sidebar: "analysisSidebar"
              },
              {
                path: '/analysis/category/phần-i-nền-tảng--giải-tích-thực-real-analysis',
                component: ComponentCreator('/analysis/category/phần-i-nền-tảng--giải-tích-thực-real-analysis', '263'),
                exact: true,
                sidebar: "analysisSidebar"
              },
              {
                path: '/analysis/category/phần-ii-trừu-tượng-hóa--không-gian-metric-và-topo-metric-and-topological-spaces',
                component: ComponentCreator('/analysis/category/phần-ii-trừu-tượng-hóa--không-gian-metric-và-topo-metric-and-topological-spaces', 'fcc'),
                exact: true,
                sidebar: "analysisSidebar"
              },
              {
                path: '/analysis/part1-real-analysis/chap1-the-constructioniof-real-numbers',
                component: ComponentCreator('/analysis/part1-real-analysis/chap1-the-constructioniof-real-numbers', 'd3b'),
                exact: true,
                sidebar: "analysisSidebar"
              },
              {
                path: '/analysis/part1-real-analysis/chap2-sequences-and-series-of-numbers',
                component: ComponentCreator('/analysis/part1-real-analysis/chap2-sequences-and-series-of-numbers', 'a57'),
                exact: true,
                sidebar: "analysisSidebar"
              },
              {
                path: '/analysis/part1-real-analysis/chap3-topology-of-r',
                component: ComponentCreator('/analysis/part1-real-analysis/chap3-topology-of-r', '79d'),
                exact: true,
                sidebar: "analysisSidebar"
              },
              {
                path: '/analysis/part1-real-analysis/chap4-limits-and-continuity-of-functions',
                component: ComponentCreator('/analysis/part1-real-analysis/chap4-limits-and-continuity-of-functions', '8b1'),
                exact: true,
                sidebar: "analysisSidebar"
              },
              {
                path: '/analysis/part1-real-analysis/chap5-differentiation',
                component: ComponentCreator('/analysis/part1-real-analysis/chap5-differentiation', '10c'),
                exact: true,
                sidebar: "analysisSidebar"
              },
              {
                path: '/analysis/part1-real-analysis/chap6-the-riemann-integral',
                component: ComponentCreator('/analysis/part1-real-analysis/chap6-the-riemann-integral', 'd4c'),
                exact: true,
                sidebar: "analysisSidebar"
              },
              {
                path: '/analysis/part1-real-analysis/chap7-sequences-and-series-of-functions',
                component: ComponentCreator('/analysis/part1-real-analysis/chap7-sequences-and-series-of-functions', '29c'),
                exact: true,
                sidebar: "analysisSidebar"
              },
              {
                path: '/analysis/part2-metric-and-topological-spaces/chap8',
                component: ComponentCreator('/analysis/part2-metric-and-topological-spaces/chap8', '2cd'),
                exact: true,
                sidebar: "analysisSidebar"
              },
              {
                path: '/analysis/part2-metric-and-topological-spaces/chap9',
                component: ComponentCreator('/analysis/part2-metric-and-topological-spaces/chap9', '10b'),
                exact: true,
                sidebar: "analysisSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', 'c39'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', 'dab'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', 'fbb'),
            routes: [
              {
                path: '/docs/category/linear-algebra',
                component: ComponentCreator('/docs/category/linear-algebra', '3bb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/others',
                component: ComponentCreator('/docs/category/others', '6b5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/intro',
                component: ComponentCreator('/docs/intro', '61d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/linear-algebra/create-a-page',
                component: ComponentCreator('/docs/linear-algebra/create-a-page', '846'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/others/newton-method',
                component: ComponentCreator('/docs/others/newton-method', 'cac'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/papers',
    component: ComponentCreator('/papers', '714'),
    routes: [
      {
        path: '/papers',
        component: ComponentCreator('/papers', '918'),
        routes: [
          {
            path: '/papers',
            component: ComponentCreator('/papers', '3cb'),
            routes: [
              {
                path: '/papers/category/linear-algebra',
                component: ComponentCreator('/papers/category/linear-algebra', 'e18'),
                exact: true,
                sidebar: "paperSidebar"
              },
              {
                path: '/papers/intro',
                component: ComponentCreator('/papers/intro', '21c'),
                exact: true,
                sidebar: "paperSidebar"
              },
              {
                path: '/papers/linear-algebra/abc',
                component: ComponentCreator('/papers/linear-algebra/abc', 'eca'),
                exact: true,
                sidebar: "paperSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '2e1'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
