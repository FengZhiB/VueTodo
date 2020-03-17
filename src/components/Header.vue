<template>
  <header>
    <a class="icon icon-left pull-left"></a>
    <a class="icon icon-refresh pull-right"></a>
    <h1 class="title">{{title}}</h1>
  </header>
</template>

<script>
export default {
  data() {
    return {
      title: 'VueTodo'
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/lib/reset.scss';
header {
  @include rect(100%, 50px);
  @include background-color(#da5);
  @include text-align(center);
  @include line-height(50px);
  h1 {
    @include rect(100%, 50px);
    @include color(#fff);
    @include font-weight(900);
  }
  .icon {
    @include margin(0 10px);
  }
}
</style>