<template>
  <div class="container">
    <CasesCommonCitySelect @update:province="province = $event" @update:city="city = $event"
      :provinceList="data.provinces" :cityList="data.cities" />
    <li>
      <label>人员：</label>
      <select v-model="user">
        <option value="">请选择人员</option>
        <option v-for="v in users" :key="v" :value="v">{{ v }}</option>
      </select>
    </li>
  </div>

</template>

<script lang="ts" setup>

const user = ref('')
const users = ref([])
const province = ref('')
const city = ref('')
import { provinceCitiesData } from '@/api/mock'
import type { IProvinceCitiesData } from '@/api/mock';
const data = ref<IProvinceCitiesData>({
  provinces: [],
  cities: {}
})

onMounted(async () => {
  data.value = await provinceCitiesData()
})

watchEffect(() => {
  console.log(9999, province);


})
</script>


<style lang="scss" scoped>
.container {
  display: flex;
  padding: 10px;
  border-bottom: 1px solid #999;

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