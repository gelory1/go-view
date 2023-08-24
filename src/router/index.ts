import type { App } from 'vue'
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import { RedirectRoute } from '@/router/base'
import { createRouterGuards } from './router-guards'
import { PageEnum } from '@/enums/pageEnum'
import { HttpErrorPage, LoginRoute, ReloadRoute } from '@/router/base'
import { Layout, Home, ParentLayout } from '@/router/constant'

import modules from '@/router/modules'

const RootRoute: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: '首页',
      noKeepAlive: true,
      isRoot: true
    },
  },
  {
    path: '/stage',
    name: 'Stage',
    component: ParentLayout,
    meta: {
      title: '切片工作台',
    },
    children: [
      ...HttpErrorPage,
      modules.stageRoutes,
      modules.chartRoutes,
      modules.previewRoutes,
      modules.editRoutes
    ]
  },
  {
    path: '/control',
    name: 'Control',
    component: Home,
    meta: {
      title: '运行控制台',
    }
  },
  {
    path: '/data',
    name: 'Data',
    component: Home,
    meta: {
      title: '数据中心',
    }
  },
  {
    path: '/cut',
    name: 'Cut',
    component: Home,
    meta: {
      title: '看板工作台',
    }
  },
  {
    path: '/set',
    name: 'Set',
    component: Home,
    meta: {
      title: '系统设置',
    }
  }
]


export const constantRouter: any[] = [LoginRoute, ...RootRoute, RedirectRoute, ReloadRoute];

const router = createRouter({
  history: createWebHashHistory(''),
  routes: constantRouter,
  strict: true,
})

export function setupRouter(app: App) {
  app.use(router);
  // 创建路由守卫
  createRouterGuards(router)
}
export default router
