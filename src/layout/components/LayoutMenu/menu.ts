import { h, reactive } from 'vue'
import { renderIcon } from '@/utils'
import { RouterLink } from 'vue-router'
import { PageEnum } from '@/enums/pageEnum'
import { MenuGroupOption, MenuOption } from 'naive-ui'
import { icon } from '@/plugins'

const { GridIcon, TvOutlineIcon } = icon.ionicons5
const { StoreIcon, ObjectStorageIcon, DevicesIcon } = icon.carbon
export const renderMenuLabel = (option: MenuOption | MenuGroupOption) => {
  return option.label
}

export const expandedKeys = () => ['all-project']

export const menuOptionsInit = () => {
  const t = window['$t']

  return reactive([
    {
      key: PageEnum.BASE_HOME_NAME,
      label: () => h(
        RouterLink,
        {
          to: {
            name: PageEnum.BASE_HOME_NAME,
          },
        },
        { default: () => '首页' }
      ),
      icon: renderIcon(GridIcon)
    },
    {
      label: () => h('span', null, { default: () => '切片工作台' }),
      key: PageEnum.BASE_STAGE_NAME,
      icon: renderIcon(DevicesIcon),
      children: [
        {
          label: () =>
            h(
              RouterLink,
              {
                to: {
                  name: PageEnum.BASE_STAGE_ITEMS_NAME,
                },
              },
              { default: () => '全部切片' }
            ),
          key: PageEnum.BASE_STAGE_ITEMS_NAME,
          icon: renderIcon(TvOutlineIcon),
        }
      ]
    },
    {
      key: PageEnum.BASE_CONTROL_NAME,
      label: () => h(
        RouterLink,
        {
          to: {
            name: PageEnum.BASE_CONTROL_NAME,
          },
        },
        { default: () => '运行控制台' }
      ),
      icon: renderIcon(GridIcon)
    },
    {
      key: PageEnum.BASE_DATA_NAME,
      label: () => h(
        RouterLink,
        {
          to: {
            name: PageEnum.BASE_DATA_NAME,
          },
        },
        { default: () => '数据中心' }
      ),
      icon: renderIcon(GridIcon)
    },
    {
      key: PageEnum.BASE_CUT_NAME,
      label: () => h(
        RouterLink,
        {
          to: {
            name: PageEnum.BASE_CUT_NAME,
          },
        },
        { default: () => '看板工作台' }
      ),
      icon: renderIcon(GridIcon)
    },
    {
      key: PageEnum.BASE_SET_NAME,
      label: () => h(
        RouterLink,
        {
          to: {
            name: PageEnum.BASE_SET_NAME,
          },
        },
        { default: () => '系统设置' }
      ),
      icon: renderIcon(GridIcon)
    }
  ])
}
