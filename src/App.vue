<template>
  <div id="todo">
    <Header />
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
export default {
  components: {
    Header,
    Footer
  }
}
</script>

<style lang="scss" scoped>
@import '@/lib/reset.scss';
html,
body,
#todo {
  @include rect(100%, 100%);
  @include flexbox();
  @include flex-direction(column);
  .content {
    @include flex();
    @include rect(100%, auto);
    @include flexbox();
    @include flex-direction(column);
    position: static;
  }
}
</style>