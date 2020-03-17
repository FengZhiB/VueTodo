<template>
  <footer class="footer">
    <ul>
      <router-link
        tag="li"
        v-for="item in tabbar"
        :key="item.id"
        :to="item.type"
        class="circle"
        :class="item.className"
      >
        {{item.text}}
      </router-link>
    </ul>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      activeType: 'all',
      tabbar: [
        {
          text: '全部',
          className: 'circle-success',
          id: 1,
          type: 'all'
        },
        {
          text: '未完成',
          className: 'circle-primary',
          id: 2,
          type: 'unfinish'
        },
        {
          text: '已完成',
          className: 'circle-warn',
          id: 3,
          type: 'finished'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/lib/reset.scss';
footer {
  @include rect(100%, 65px);
  @include background-color(#ff0);
  ul {
    @include rect(100%, 100%);
    @include flexbox();
    @include justify-content(space-around);
    @include align-items(center);
    .circle {
      @include rect(60px, 60px);
      @include text-align(center);
      @include line-height(60px);
      @include border-radius(50%);
      @include font-weight(600);
    }
    .circle-success {
      @include color(#0f0);
      // @include border(1px, #0f0, solid);
      @include background-color(#fff);
    }
    .circle-success.router-link-active {
      @include background-color(#0f0);
      @include color(#fff);
    }
    .circle-primary {
      @include background-color(#fff);
      @include color(#00f);
    }
    .circle-primary.router-link-active {
      @include background-color(#00f);
      @include color(#fff);
    }
    .circle-warn {
      @include background-color(#fff);
      @include color(#f00);
    }
    .circle-warn.router-link-active {
      @include background-color(#f00);
      @include color(#fff);
    }
  }
}
</style>