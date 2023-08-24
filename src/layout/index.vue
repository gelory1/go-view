<template>
  <layout-main v-if="allPage"></layout-main>
  <n-layout has-sider position="absolute" v-else>
    <n-space vertical>
      <layout-menu></layout-menu>
    </n-space>
    <n-layout>
      <layout-header-pro></layout-header-pro>
      <n-layout
        id="go-project-content-top"
        class="content-top"
        :native-scrollbar="false"
      >
        <n-layout-content>
          <layout-transition-main>
            <layout-main></layout-main>
          </layout-transition-main>
        </n-layout-content>
      </n-layout>
    </n-layout>
  </n-layout>
</template>

<script lang="ts" setup>
import { useRoute } from 'vue-router'
import { computed } from 'vue';
import { LayoutMenu } from '@/layout/components/LayoutMenu/index'
import { LayoutMain } from '@/layout/components/LayoutMain/index'
import { LayoutHeaderPro } from '@/layout/components/LayoutHeaderPro'
import { LayoutTransitionMain } from '@/layout/components/LayoutTransitionMain/index'

const allPage = computed(() => {
  let all = false;
  const route = useRoute();
  if (route && route.meta && route.meta.allPage) {
    all = true;
  }
  return all;
})
</script>

<style lang="scss" scoped>
@include go(project) {
  .content-top {
    top: $--header-height;
    margin-top: 1px;
  }
}
</style>
