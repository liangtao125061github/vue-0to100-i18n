<template>
  <div>
    <div class="change-lang">
      <div @click="changeLocale('zh-CN')">中文</div>
      <div @click="changeLocale('en')">英文</div>
    </div>
    <el-date-picker
      v-model="value1"
      type="datetime"
      :placeholder="$t('placeholder')">
    </el-date-picker>
    <div>
      {{ $t('title') }}
    </div>
    <div>
      {{ $t('title1') }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',

  data() {
    return {
      value1: '',
    }
  },

  methods: {
    changeLocale (lang) {
      this.$i18n.locale = lang
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .change-lang {
    display: flex;
  }
  .change-lang div {
    width: 200px;
    height: 50px;
    line-height: 50px;
    border: 1px solid #ccc;
  }
</style>
