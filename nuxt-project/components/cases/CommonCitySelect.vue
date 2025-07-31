<template>
  <ul class="content">
    <li>
      <label>省：</label>
      <select v-model="province">
        <option value="">请选择省份</option>
        <option v-for="v in provinceList" :key="v" :value="v">{{ v }}</option>
      </select>
    </li>
    <li>
      <label>市：</label>
      <select v-model="city">
        <option value="">请选择城市</option>
        <option v-for="v in cites" :key="v" :value="v">{{ v }}</option>
      </select>
    </li>
  </ul>
</template>


<script setup lang="ts">
interface IProps {
  provinceList: string[],
  cityList: Record<string, string[]>
}
const province = ref('')
const city = ref('')
const cites = ref([] as string[])
const emit = defineEmits(['update:province', 'update:city', 'query'])
const { provinceList, cityList } = defineProps<IProps>()

watch(province, (newProvince) => {
  city.value = ''
  cites.value = cityList[newProvince]
  emit('update:province', newProvince)
})

watch(city, (newCity) => {
  emit('update:city', newCity)
})


</script>

<style lang="scss" scoped>
.content {
  display: flex;

  li {
    margin-right: 20px;

    select {
      border: 1px solid #999;
      border-radius: 5px;
      padding: 4px;
    }
  }
}
</style>
