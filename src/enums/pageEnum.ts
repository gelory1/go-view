import { ResultEnum } from '@/enums/httpEnum'

export enum ChartEnum {
  // 图表创建
  CHART_HOME = '/chart/home/:id(.*)*',
  CHART_HOME_NAME = 'ChartHome',
}

export enum PreviewEnum {
  //  图表预览
  CHART_PREVIEW = '/chart/preview/:id(.*)*',
  CHART_PREVIEW_NAME = 'ChartPreview',
}

export enum EditEnum {
  //  图表JSON编辑
  CHART_EDIT = '/chart/edit/:id(.*)*',
  CHART_EDIT_NAME = 'ChartEdit',
}

export enum PageEnum {
  // 登录
  BASE_LOGIN = '/login',
  BASE_LOGIN_NAME = 'Login',

  //重定向
  REDIRECT = '/redirect',
  REDIRECT_NAME = 'Redirect',
  RELOAD = '/reload',
  RELOAD_NAME = 'Reload',


  // 首页
  BASE_HOME = '/',
  BASE_HOME_NAME = 'Home',

  // 我的切片
  BASE_STAGE = '/stage',
  BASE_STAGE_NAME = 'Stage',
  BASE_STAGE_ITEMS = '/stage/items',
  BASE_STAGE_ITEMS_NAME = 'StageItems',

  // 看板
  BASE_CUT = '/cut',
  BASE_CUT_NAME = 'Cut',


  // 运行控制台
  BASE_CONTROL = '/control',
  BASE_CONTROL_NAME = 'Control',

  // 数据中心
  BASE_DATA = '/data',
  BASE_DATA_NAME = 'Data',

  // 系统设置
  BASE_SET = '/set',
  BASE_SET_NAME = 'Set',

  // 模板市场
  BASE_HOME_TEMPLATE_MARKET = '/project/template-market',
  BASE_HOME_TEMPLATE_MARKET_NAME = 'Project-Template-Market',

  // 错误
  ERROR_PAGE_NAME_403 = 'ErrorPage403',
  ERROR_PAGE_NAME_404 = 'ErrorPage404',
  ERROR_PAGE_NAME_500 = 'ErrorPage500'
}

export const ErrorPageNameMap = new Map([
  [ResultEnum.NOT_FOUND, PageEnum.ERROR_PAGE_NAME_404],
  [ResultEnum.SERVER_FORBIDDEN, PageEnum.ERROR_PAGE_NAME_403],
  [ResultEnum.SERVER_ERROR, PageEnum.ERROR_PAGE_NAME_500]
])
