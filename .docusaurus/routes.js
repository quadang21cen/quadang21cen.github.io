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
    path: '/archive',
    component: ComponentCreator('/archive', '51a'),
    exact: true
  },
  {
    path: '/authors',
    component: ComponentCreator('/authors', '498'),
    exact: true
  },
  {
    path: '/authors/all-dang-quach-articles',
    component: ComponentCreator('/authors/all-dang-quach-articles', '0bf'),
    exact: true
  },
  {
    path: '/authors/all-sebastien-lorber-articles',
    component: ComponentCreator('/authors/all-sebastien-lorber-articles', '8b6'),
    exact: true
  },
  {
    path: '/authors/yangshun',
    component: ComponentCreator('/authors/yangshun', '47f'),
    exact: true
  },
  {
    path: '/fukuzawa-yukichi',
    component: ComponentCreator('/fukuzawa-yukichi', 'b95'),
    exact: true
  },
  {
    path: '/index_',
    component: ComponentCreator('/index_', '7ec'),
    exact: true
  },
  {
    path: '/long-blog-post',
    component: ComponentCreator('/long-blog-post', 'f6f'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '3d7'),
    exact: true
  },
  {
    path: '/mdx-blog-post',
    component: ComponentCreator('/mdx-blog-post', '886'),
    exact: true
  },
  {
    path: '/simple-exp-tnse',
    component: ComponentCreator('/simple-exp-tnse', '648'),
    exact: true
  },
  {
    path: '/tags',
    component: ComponentCreator('/tags', '626'),
    exact: true
  },
  {
    path: '/tags/docusaurus',
    component: ComponentCreator('/tags/docusaurus', '555'),
    exact: true
  },
  {
    path: '/tags/facebook',
    component: ComponentCreator('/tags/facebook', '03e'),
    exact: true
  },
  {
    path: '/tags/hello',
    component: ComponentCreator('/tags/hello', 'ca7'),
    exact: true
  },
  {
    path: '/tags/history',
    component: ComponentCreator('/tags/history', '68e'),
    exact: true
  },
  {
    path: '/tags/motivation',
    component: ComponentCreator('/tags/motivation', 'a43'),
    exact: true
  },
  {
    path: '/tags/science',
    component: ComponentCreator('/tags/science', '011'),
    exact: true
  },
  {
    path: '/welcome',
    component: ComponentCreator('/welcome', '9e2'),
    exact: true
  },
  {
    path: '/analysis',
    component: ComponentCreator('/analysis', '5ed'),
    routes: [
      {
        path: '/analysis',
        component: ComponentCreator('/analysis', '38d'),
        routes: [
          {
            path: '/analysis',
            component: ComponentCreator('/analysis', 'c42'),
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
                path: '/analysis/category/phần-iii-tổng-hợp--nhập-môn-giải-tích-hàm-introduction-to-functional-analysis',
                component: ComponentCreator('/analysis/category/phần-iii-tổng-hợp--nhập-môn-giải-tích-hàm-introduction-to-functional-analysis', '86c'),
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
                path: '/analysis/part2-metric-and-topological-spaces/chap10-introduction-to-lebesgue-integration',
                component: ComponentCreator('/analysis/part2-metric-and-topological-spaces/chap10-introduction-to-lebesgue-integration', '1e0'),
                exact: true,
                sidebar: "analysisSidebar"
              },
              {
                path: '/analysis/part2-metric-and-topological-spaces/chap8-metric -paces',
                component: ComponentCreator('/analysis/part2-metric-and-topological-spaces/chap8-metric -paces', '4be'),
                exact: true,
                sidebar: "analysisSidebar"
              },
              {
                path: '/analysis/part2-metric-and-topological-spaces/chap9-introduction-to-topological-spaces',
                component: ComponentCreator('/analysis/part2-metric-and-topological-spaces/chap9-introduction-to-topological-spaces', 'ed1'),
                exact: true,
                sidebar: "analysisSidebar"
              },
              {
                path: '/analysis/part3-introduction-to-functional-analysis/chap11-normed-and-banach-spaces',
                component: ComponentCreator('/analysis/part3-introduction-to-functional-analysis/chap11-normed-and-banach-spaces', '77a'),
                exact: true,
                sidebar: "analysisSidebar"
              },
              {
                path: '/analysis/part3-introduction-to-functional-analysis/chap12-hilbert-spaces',
                component: ComponentCreator('/analysis/part3-introduction-to-functional-analysis/chap12-hilbert-spaces', '379'),
                exact: true,
                sidebar: "analysisSidebar"
              },
              {
                path: '/analysis/part3-introduction-to-functional-analysis/chap13-fundamental-theorems-of-functional-analysis',
                component: ComponentCreator('/analysis/part3-introduction-to-functional-analysis/chap13-fundamental-theorems-of-functional-analysis', 'a41'),
                exact: true,
                sidebar: "analysisSidebar"
              },
              {
                path: '/analysis/part3-introduction-to-functional-analysis/chap14-dual-spaces-and-weak-convergence',
                component: ComponentCreator('/analysis/part3-introduction-to-functional-analysis/chap14-dual-spaces-and-weak-convergence', '084'),
                exact: true,
                sidebar: "analysisSidebar"
              },
              {
                path: '/analysis/part3-introduction-to-functional-analysis/chap15-introduction-to-spectral-theory',
                component: ComponentCreator('/analysis/part3-introduction-to-functional-analysis/chap15-introduction-to-spectral-theory', '17c'),
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
    component: ComponentCreator('/docs', '361'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', 'b71'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', '503'),
            routes: [
              {
                path: '/docs/abstract-vector-spaces/create-a-page',
                component: ComponentCreator('/docs/abstract-vector-spaces/create-a-page', 'aac'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/phần-i-nền-tảng--không-gian-vector-trừu-tượng-abstract-vector-spaces',
                component: ComponentCreator('/docs/category/phần-i-nền-tảng--không-gian-vector-trừu-tượng-abstract-vector-spaces', '36d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/intro',
                component: ComponentCreator('/docs/intro', '61d'),
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
    path: '/',
    component: ComponentCreator('/', '3ca'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
