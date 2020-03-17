<template>
  <div class="task">
    <ul>
      <li
        v-for="(item,index) in tasklist"
        :key="item.id"
      >
        <p>任务：{{item.task}}</p>
        <p>添加时间：{{item.date}}</p>
        <p class="btnbox"><span
            @click="checkF(index)"
            class="btn"
            :class="item.tf?'success':'warning'"
          >{{item.tf?'已完成':'未完成'}}</span> <span
            class="btn"
            @click="changeF(index)"
          >修改</span><span
            class="btn warning"
            @click="delTask(index)"
          >删除</span></p>
      </li>
    </ul>
    <div
      class="change"
      v-if="uF"
      @click.self="closeF"
    >
      <input
        type="text"
        v-model="task"
      >
      <button @click="updata">修改</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      uF: false,
      task: '',
      index: 0
    }
  },
  props: {
    tasklist: Array
  },
  methods: {
    checkF(index) {
      //更改已完成和未完成
      this.tasklist[index].tf = !this.tasklist[index].tf
    },
    delTask(index) {
      this.tasklist.splice(index, 1)
      console.log(index)
    },
    changeF(index) {
      this.task = this.tasklist[index].task
      this.uF = true
      this.index = index
    },
    closeF() {
      this.uF = false
    },
    updata() {
      this.tasklist[this.index].task = this.task
      this.closeF()
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/lib/reset.scss';
.task {
  @include padding(6px);
  @include margin(6px);
  @include background-color(#fff);
  position: relative;
  ul {
    li {
      p {
        @include margin(10px 0);
        .btn {
          @include display(block);
          @include rect(60px, 32px);
          @include border(1px, #c20, solid);
          @include text-align(center);
          @include line-height(32px);
          @include color(#fff);
          @include background-color(#5f5);
        }
        .btn.success {
          @include background-color(blue);
        }
        .btn.warning {
          @include background-color(red);
        }
      }
      .btnbox {
        @include flexbox;
        @include justify-content(space-around);
      }
    }
  }
  .change {
    position: absolute;
    top: 0;
    left: 0;
    @include rect(100%, 100%);
    @include background-color(rgba(255, 100, 100, 0.7));
    @include flexbox();
    @include flex-direction(column);
    @include justify-content(center);
    input {
      @include rect(80%, 30px);
      @include border-radius(10px);
    }
    button {
      @include rect(60px, 30px);
      @include color(#fff);
      @include background-color(#33f);
    }
  }
}
</style>