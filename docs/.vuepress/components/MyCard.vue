<!--
 * @Description: 文件及简介
 * @Author: Cary
 * @Date: 2019-10-30 17:17:02
 * @FilePath: f:\vue-project\alien-docs\docs\.vuepress\components\MyCard.vue
 -->
<template>
  <div style="margin: 0 auto">
    <div class="my-card-body">
      <div class="my-card">
        <div class="my-card-item">
          <img :src="$withBase('/main-logo.png')" alt="" srcset="">
        </div>
      </div>
      <div class="my-card">
        <div class="my-card-item">
          <img :src="$withBase('/main-logo.png')" alt="" srcset="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
    }
  },
  computed: {},
  mounted() {},
  methods: {}
}

</script>
<style lang='stylus' scoped>
  .my-card-body {
    display flex;
    justify-content center;
    margin-bottom 20px;
  }
  .my-card {
    padding: 16px;
  }
  .my-card-item {
    width: 300px;
    height: 300px;
    padding: 10px;
    border-radius: 2px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  }
  .my-card-item:hover{
    box-shadow: 0 2px 12px rgba(0, 0, 0, .3)
  }
</style>
