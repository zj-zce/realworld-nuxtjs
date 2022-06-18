import Vue from 'vue'
import dayJs from 'dayjs'

Vue.filter('date', (value, formant = 'YYYY-MM-DD HH:mm:ss') => {
  return dayJs(value).format(formant)
})
