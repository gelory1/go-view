import { RouteRecordRaw } from 'vue-router'
import { PageEnum } from '@/enums/pageEnum'

// 引入路径
const importPath = {
  'PageEnum.BASE_STAGE': () => import('@/views/stage/index.vue'),
  'PageEnum.BASE_STAGE_ITEMS': () => import('@/views/stage/items/index.vue'),
  'PageEnum.BASE_HOME_TEMPLATE_NAME': () => import('@/views/stage/mtTemplate/index.vue'),
  'PageEnum.BASE_HOME_TEMPLATE_MARKET_NAME': () => import('@/views/stage/templateMarket/index.vue')
}

const projectRoutes: RouteRecordRaw = {
  path: PageEnum.BASE_STAGE,
  name: PageEnum.BASE_STAGE_NAME,
  component: importPath['PageEnum.BASE_STAGE'],
  redirect: PageEnum.BASE_STAGE_ITEMS,
  meta: {
    title: '看板'
  },
  children: [
    {
      path: PageEnum.BASE_STAGE_ITEMS,
      name: PageEnum.BASE_STAGE_ITEMS_NAME,
      component: importPath['PageEnum.BASE_STAGE_ITEMS'],
      meta: {
        title: '我的看板'
      }
    },
    {
      path: PageEnum.BASE_HOME_TEMPLATE_MARKET,
      name: PageEnum.BASE_HOME_TEMPLATE_MARKET_NAME,
      component: importPath['PageEnum.BASE_HOME_TEMPLATE_MARKET_NAME'],
      meta: {
        title: '看板市场'
      }
    }
  ]
}

export default projectRoutes
