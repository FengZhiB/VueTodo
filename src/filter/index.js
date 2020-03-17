import Vue from 'vue'

Vue.filter('timer', val => {
  const date = new Date(val)
  const year = date.getFullYear()
  const mounth = date.getMonth() + 1
  const day = date.getDate();
  const hour = date.getHours();
  const min = date.getMinutes();
  const sec = date.getSeconds()
  return `${year}年${mounth}月${day}日${hour}时${min}分${sec}秒`
})