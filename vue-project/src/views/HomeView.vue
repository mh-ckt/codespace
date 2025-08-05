<script setup lang="ts">
import { Button } from 'ant-design-vue';
import { onMounted, reactive, ref } from 'vue';
const activeKey = ref('1');

const role = ref('user') // 当前角色：'admin' 或 'user'
const dataAttr = ref('data-role') // 动态 data-* 属性名
const roleData = ref('user') // 动态 data-* 属性值

// 切换角色（影响 data-* 和 class）
const toggleRole = () => {
  if (role.value === 'user') {
    role.value = 'admin'
    roleData.value = 'admin'
  } else {
    role.value = 'user'
    roleData.value = 'user'
  }

  console.log(9999, dataAttr);
}

onMounted(() => {
  const aa = ref({ name: '张三' })
  const bb = reactive({ name: '张三' })
  console.log(99, aa);
  console.log(88, bb);
})

</script>

<template>
  <section>
    <h4>模板语法</h4>
    <a-tabs v-model:activeKey="activeKey">
      <a-tab-pane key="1"
tab="动态绑定属性"
>
        <!-- 动态绑定 data-* 属性 -->
        <div :[dataAttr]="roleData">用户信息</div>
        <!-- 切换角色 -->
        <button @click="toggleRole">切换角色（管理员/用户）</button>
      </a-tab-pane>
      <a-tab-pane key="2"
tab="Tab 2"
force-render
>Content of Tab Pane 2</a-tab-pane>
      <a-tab-pane key="3"
tab="Tab 3"
>Content of Tab Pane 3</a-tab-pane>
    </a-tabs>
  </section>

  <section>
    <h4>响应式基础</h4>
  </section>
</template>
