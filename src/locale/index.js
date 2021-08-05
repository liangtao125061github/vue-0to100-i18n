import Vue from 'vue'
import VueI18n from 'vue-i18n'
import en from './langs/en.js'
import zh from './langs/zh.js'
import enLocale from 'element-ui/lib/locale/lang/en'
import zhLocale from 'element-ui/lib/locale/lang/zh-CN'

Vue.use(VueI18n)

const i18n = new VueI18n({
  locale: 'zh-CN',
  messages: {
    'zh-CN': { ...zhLocale, ...zh },
    'en': { ...enLocale, ...en }
  }
})

export default i18n
