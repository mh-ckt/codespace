<template>
  <div class="calendar-container">
    <div class="calendar-header">
      <button @click="previousMonth" class="nav-btn">&lt;</button>
      <h2 class="month-year">
        {{ currentYear }}年{{ currentMonth + 1 }}月
      </h2>
      <button @click="nextMonth" class="nav-btn">&gt;</button>
    </div>

    <div class="calendar-weekdays">
      <div v-for="day in weekdays" :key="day" class="weekday">
        {{ day }}
      </div>
    </div>

    <div class="calendar-days">
      <div v-for="day in calendarDays" :key="day.key" :class="getDayClasses(day)" @click="selectDate(day)">
        {{ day.date }}
      </div>
    </div>

    <!-- 选中的日期显示 -->
    <div v-if="selectedDate" class="selected-date">
      <p>选中的日期: {{ formatDate(selectedDate) }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'

// 响应式数据
const currentDate = ref(new Date())
const selectedDate = ref(null)

// 星期标题
const weekdays = ['日', '一', '二', '三', '四', '五', '六']

// 计算当前年月
const currentYear = computed(() => currentDate.value.getFullYear())
const currentMonth = computed(() => currentDate.value.getMonth())

// 上一月
const previousMonth = () => {
  const newDate = new Date(currentDate.value)
  newDate.setMonth(newDate.getMonth() - 1)
  currentDate.value = newDate
  selectedDate.value = null
}

// 下一月
const nextMonth = () => {
  const newDate = new Date(currentDate.value)
  newDate.setMonth(newDate.getMonth() + 1)
  currentDate.value = newDate
  selectedDate.value = null
}

// 获取日历显示的所有日期
const calendarDays = computed(() => {
  const year = currentYear.value
  const month = currentMonth.value

  // 当月第一天和最后一天
  const firstDay = new Date(year, month, 1)
  const lastDay = new Date(year, month + 1, 0)

  // 当月第一天是星期几（0是星期日）
  const firstDayWeekday = firstDay.getDay()

  // 当月天数
  const daysInMonth = lastDay.getDate()

  // 上个月的天数
  const prevMonth = new Date(year, month, 0)
  const daysInPrevMonth = prevMonth.getDate()

  const days = []

  // 添加上个月的日期（填充日历开头）
  for (let i = firstDayWeekday - 1; i >= 0; i--) {
    const date = daysInPrevMonth - i
    const key = `${year}-${month - 1}-${date}`
    days.push({
      date,
      key,
      isCurrentMonth: false,
      isPrevMonth: true,
      isNextMonth: false,
      fullDate: new Date(year, month - 1, date),
      day: new Date(year, month - 1, date).getDay()
    })
  }

  // 添加当月的日期
  for (let date = 1; date <= daysInMonth; date++) {
    const key = `${year}-${month}-${date}`
    days.push({
      date,
      key,
      isCurrentMonth: true,
      isPrevMonth: false,
      isNextMonth: false,
      fullDate: new Date(year, month, date),
      day: new Date(year, month, date).getDay()
    })
  }

  // 添加下个月的日期（填充日历末尾，总共显示42个日期格子）
  const totalCells = 42
  const remainingCells = totalCells - days.length
  for (let date = 1; date <= remainingCells; date++) {
    const key = `${year}-${month + 1}-${date}`
    days.push({
      date,
      key,
      isCurrentMonth: false,
      isPrevMonth: false,
      isNextMonth: true,
      fullDate: new Date(year, month + 1, date),
      day: new Date(year, month + 1, date).getDay()
    })
  }
  return days
})

// 获取日期的CSS类
const getDayClasses = (day) => {
  return {
    'day': true,
    'current-month': day.isCurrentMonth,
    'prev-month': day.isPrevMonth,
    'next-month': day.isNextMonth,
    'today': isToday(day.fullDate),
    'selected': isSelected(day.fullDate),
    'weekend': day.day === 0 || day.day === 6 // 周日或周六
  }
}

// 判断是否是今天
const isToday = (date) => {
  const today = new Date()
  return date.toDateString() === today.toDateString()
}

// 判断是否是选中的日期
const isSelected = (date) => {
  if (!selectedDate.value) return false
  return date.toDateString() === selectedDate.value.toDateString()
}

// 选择日期
const selectDate = (day) => {
  if (day.isCurrentMonth) { // 可以选择只允许选择当月日期
    selectedDate.value = day.fullDate
    console.log('选中日期:', formatDate(day.fullDate))
  }
}

// 格式化日期显示
const formatDate = (date) => {
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')
  const weekdays = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
  const weekday = weekdays[date.getDay()]

  return `${year}年${month}月${day}日 ${weekday}`
}

// 组件挂载时的初始化
onMounted(() => {
  console.log('日历组件已加载')
})

</script>

<style scoped>
.calendar-container {
  max-width: 400px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

.calendar-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
}

.nav-btn {
  background: rgba(255, 255, 255, 0.2);
  border: none;
  color: white;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
}

.nav-btn:hover {
  background: rgba(255, 255, 255, 0.3);
  transform: scale(1.1);
}

.month-year {
  margin: 0;
  font-size: 20px;
  font-weight: 600;
  text-align: center;
  flex: 1;
}

.calendar-weekdays {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  background: #f8f9fa;
  border-bottom: 1px solid #e9ecef;
}

.weekday {
  padding: 15px 0;
  text-align: center;
  font-weight: 600;
  color: #6c757d;
  font-size: 14px;
}

.calendar-days {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 1px;
  background: #e9ecef;
  padding: 1px;
}

.day {
  aspect-ratio: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  transition: all 0.2s ease;
  min-height: 45px;
}

.day:hover {
  background: #f0f8ff;
  transform: scale(1.05);
}

.day.current-month {
  color: #333;
}

.day.prev-month,
.day.next-month {
  color: #ccc;
}

.day.today {
  background: #007bff;
  color: white;
  font-weight: bold;
}

.day.today:hover {
  background: #0056b3;
}

.day.selected {
  background: #28a745;
  color: white;
  font-weight: bold;
}

.day.selected:hover {
  background: #1e7e34;
}

.day.weekend {
  color: #dc3545;
}

.day.weekend.today {
  background: #dc3545;
}

.day.weekend.today:hover {
  background: #c82333;
}

.selected-date {
  padding: 20px;
  background: #f8f9fa;
  border-top: 1px solid #e9ecef;
}

.selected-date p {
  margin: 0;
  font-size: 14px;
  color: #495057;
  text-align: center;
}

/* 响应式设计 */
@media (max-width: 480px) {
  .calendar-container {
    margin: 10px;
    max-width: none;
  }

  .calendar-header {
    padding: 15px;
  }

  .month-year {
    font-size: 18px;
  }

  .day {
    font-size: 13px;
    min-height: 40px;
  }

  .weekday {
    padding: 10px 0;
    font-size: 12px;
  }
}
</style>