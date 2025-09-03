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
    path: '/linear-algebra',
    component: ComponentCreator('/linear-algebra', '147'),
    routes: [
      {
        path: '/linear-algebra',
        component: ComponentCreator('/linear-algebra', 'f3f'),
        routes: [
          {
            path: '/linear-algebra',
            component: ComponentCreator('/linear-algebra', 'c3f'),
            routes: [
              {
                path: '/linear-algebra/abstract-vector-spaces/chap1-vector-spaces',
                component: ComponentCreator('/linear-algebra/abstract-vector-spaces/chap1-vector-spaces', 'b56'),
                exact: true,
                sidebar: "linearAlgebraSidebar"
              },
              {
                path: '/linear-algebra/abstract-vector-spaces/chap2-finite-dimensional-vector-spaces',
                component: ComponentCreator('/linear-algebra/abstract-vector-spaces/chap2-finite-dimensional-vector-spaces', 'd16'),
                exact: true,
                sidebar: "linearAlgebraSidebar"
              },
              {
                path: '/linear-algebra/applications-in-data-science/chap10-singular-value-decomposition-svd',
                component: ComponentCreator('/linear-algebra/applications-in-data-science/chap10-singular-value-decomposition-svd', '969'),
                exact: true,
                sidebar: "linearAlgebraSidebar"
              },
              {
                path: '/linear-algebra/applications-in-data-science/chap11-applications-in-data-science',
                component: ComponentCreator('/linear-algebra/applications-in-data-science/chap11-applications-in-data-science', 'f15'),
                exact: true,
                sidebar: "linearAlgebraSidebar"
              },
              {
                path: '/linear-algebra/applications-in-data-science/chap9-matrix-decompositions-and-canonical-forms',
                component: ComponentCreator('/linear-algebra/applications-in-data-science/chap9-matrix-decompositions-and-canonical-forms', '2c2'),
                exact: true,
                sidebar: "linearAlgebraSidebar"
              },
              {
                path: '/linear-algebra/category/phần-i-nền-tảng--không-gian-vector-trừu-tượng-abstract-vector-spaces',
                component: ComponentCreator('/linear-algebra/category/phần-i-nền-tảng--không-gian-vector-trừu-tượng-abstract-vector-spaces', 'a70'),
                exact: true,
                sidebar: "linearAlgebraSidebar"
              },
              {
                path: '/linear-algebra/category/phần-ii-tác-động--ánh-xạ-tuyến-tính-và-ma-trận-linear-maps-and-matrices',
                component: ComponentCreator('/linear-algebra/category/phần-ii-tác-động--ánh-xạ-tuyến-tính-và-ma-trận-linear-maps-and-matrices', 'd84'),
                exact: true,
                sidebar: "linearAlgebraSidebar"
              },
              {
                path: '/linear-algebra/category/phần-iii-cấu-trúc-hình-học--không-gian-tích-vô-hướng-inner-product-spaces',
                component: ComponentCreator('/linear-algebra/category/phần-iii-cấu-trúc-hình-học--không-gian-tích-vô-hướng-inner-product-spaces', 'f91'),
                exact: true,
                sidebar: "linearAlgebraSidebar"
              },
              {
                path: '/linear-algebra/category/phần-iv-phân-tích-cấu-trúc-sâu--lý-thuyết-phổ-spectral-theory',
                component: ComponentCreator('/linear-algebra/category/phần-iv-phân-tích-cấu-trúc-sâu--lý-thuyết-phổ-spectral-theory', '1e4'),
                exact: true,
                sidebar: "linearAlgebraSidebar"
              },
              {
                path: '/linear-algebra/category/phần-v-các-chủ-đề-nâng-cao-và-ứng-dụng-trong-khoa-học-dữ-liệu',
                component: ComponentCreator('/linear-algebra/category/phần-v-các-chủ-đề-nâng-cao-và-ứng-dụng-trong-khoa-học-dữ-liệu', '72e'),
                exact: true,
                sidebar: "linearAlgebraSidebar"
              },
              {
                path: '/linear-algebra/inner-product-spaces/chap5-inner-product-spaces',
                component: ComponentCreator('/linear-algebra/inner-product-spaces/chap5-inner-product-spaces', 'f6c'),
                exact: true,
                sidebar: "linearAlgebraSidebar"
              },
              {
                path: '/linear-algebra/inner-product-spaces/chap6-operators-on-inner-product-spaces',
                component: ComponentCreator('/linear-algebra/inner-product-spaces/chap6-operators-on-inner-product-spaces', '4cb'),
                exact: true,
                sidebar: "linearAlgebraSidebar"
              },
              {
                path: '/linear-algebra/linear-intro',
                component: ComponentCreator('/linear-algebra/linear-intro', 'ae9'),
                exact: true,
                sidebar: "linearAlgebraSidebar"
              },
              {
                path: '/linear-algebra/linear-maps-and-matrices/chap3-finite-dimensional-vector-spaces',
                component: ComponentCreator('/linear-algebra/linear-maps-and-matrices/chap3-finite-dimensional-vector-spaces', 'fb1'),
                exact: true,
                sidebar: "linearAlgebraSidebar"
              },
              {
                path: '/linear-algebra/linear-maps-and-matrices/chap4-matrix-representation',
                component: ComponentCreator('/linear-algebra/linear-maps-and-matrices/chap4-matrix-representation', 'f04'),
                exact: true,
                sidebar: "linearAlgebraSidebar"
              },
              {
                path: '/linear-algebra/spectral-theory/chap7-eigenvalues-and-eigenvectors',
                component: ComponentCreator('/linear-algebra/spectral-theory/chap7-eigenvalues-and-eigenvectors', '391'),
                exact: true,
                sidebar: "linearAlgebraSidebar"
              },
              {
                path: '/linear-algebra/spectral-theory/chap8-the-spectral-theorem',
                component: ComponentCreator('/linear-algebra/spectral-theory/chap8-the-spectral-theorem', '88d'),
                exact: true,
                sidebar: "linearAlgebraSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/statistics',
    component: ComponentCreator('/statistics', 'd2a'),
    routes: [
      {
        path: '/statistics',
        component: ComponentCreator('/statistics', 'e33'),
        routes: [
          {
            path: '/statistics',
            component: ComponentCreator('/statistics', '0f0'),
            routes: [
              {
                path: '/statistics/advanced-models-and-applications/chap10-linear-models',
                component: ComponentCreator('/statistics/advanced-models-and-applications/chap10-linear-models', 'd3f'),
                exact: true,
                sidebar: "statisticsSidebar"
              },
              {
                path: '/statistics/advanced-models-and-applications/chap11-bayesian-statistics',
                component: ComponentCreator('/statistics/advanced-models-and-applications/chap11-bayesian-statistics', 'bb2'),
                exact: true,
                sidebar: "statisticsSidebar"
              },
              {
                path: '/statistics/advanced-models-and-applications/chap12-connections-to-data-science-and-machine-learning',
                component: ComponentCreator('/statistics/advanced-models-and-applications/chap12-connections-to-data-science-and-machine-learning', '8a8'),
                exact: true,
                sidebar: "statisticsSidebar"
              },
              {
                path: '/statistics/category/phần-i-các-nguyên-lý-cơ-bản-của-xác-suất-foundations-of-probability-theory',
                component: ComponentCreator('/statistics/category/phần-i-các-nguyên-lý-cơ-bản-của-xác-suất-foundations-of-probability-theory', '7e2'),
                exact: true,
                sidebar: "statisticsSidebar"
              },
              {
                path: '/statistics/category/phần-ii-thống-kê-suy-luận-statistical-inference',
                component: ComponentCreator('/statistics/category/phần-ii-thống-kê-suy-luận-statistical-inference', 'b6a'),
                exact: true,
                sidebar: "statisticsSidebar"
              },
              {
                path: '/statistics/category/phần-iii-các-mô-hình-và-ứng-dụng-nâng-cao-advanced-models-and-applications',
                component: ComponentCreator('/statistics/category/phần-iii-các-mô-hình-và-ứng-dụng-nâng-cao-advanced-models-and-applications', '1fa'),
                exact: true,
                sidebar: "statisticsSidebar"
              },
              {
                path: '/statistics/foundations-of-probability-theory/chap1-basic-principles-of-probability',
                component: ComponentCreator('/statistics/foundations-of-probability-theory/chap1-basic-principles-of-probability', 'b67'),
                exact: true,
                sidebar: "statisticsSidebar"
              },
              {
                path: '/statistics/foundations-of-probability-theory/chap2-finite-dimensional-vector-spaces',
                component: ComponentCreator('/statistics/foundations-of-probability-theory/chap2-finite-dimensional-vector-spaces', '3f5'),
                exact: true,
                sidebar: "statisticsSidebar"
              },
              {
                path: '/statistics/foundations-of-probability-theory/chap3-multivariate-random-variables',
                component: ComponentCreator('/statistics/foundations-of-probability-theory/chap3-multivariate-random-variables', '70f'),
                exact: true,
                sidebar: "statisticsSidebar"
              },
              {
                path: '/statistics/foundations-of-probability-theory/chap4-properties-of-distributions',
                component: ComponentCreator('/statistics/foundations-of-probability-theory/chap4-properties-of-distributions', 'ceb'),
                exact: true,
                sidebar: "statisticsSidebar"
              },
              {
                path: '/statistics/foundations-of-probability-theory/chap5-fundamental-limit-theorems',
                component: ComponentCreator('/statistics/foundations-of-probability-theory/chap5-fundamental-limit-theorems', 'dfa'),
                exact: true,
                sidebar: "statisticsSidebar"
              },
              {
                path: '/statistics/statistical-inference/chap6-statistical-inference',
                component: ComponentCreator('/statistics/statistical-inference/chap6-statistical-inference', '1d1'),
                exact: true,
                sidebar: "statisticsSidebar"
              },
              {
                path: '/statistics/statistical-inference/chap7-point-estimation',
                component: ComponentCreator('/statistics/statistical-inference/chap7-point-estimation', 'ef9'),
                exact: true,
                sidebar: "statisticsSidebar"
              },
              {
                path: '/statistics/statistical-inference/chap8-interval-estimation',
                component: ComponentCreator('/statistics/statistical-inference/chap8-interval-estimation', '3b1'),
                exact: true,
                sidebar: "statisticsSidebar"
              },
              {
                path: '/statistics/statistical-inference/chap9-hypothesis-testing',
                component: ComponentCreator('/statistics/statistical-inference/chap9-hypothesis-testing', '874'),
                exact: true,
                sidebar: "statisticsSidebar"
              },
              {
                path: '/statistics/statistics-intro',
                component: ComponentCreator('/statistics/statistics-intro', '0cd'),
                exact: true,
                sidebar: "statisticsSidebar"
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
