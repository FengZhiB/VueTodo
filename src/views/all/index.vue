<template>
  <div class="content">
    <!-- 添加功能 -->
    <button
      class="button-warning add"
      @click="openF"
    >+</button>
    <!-- 模态框 -->
    <div
      class="add-task"
      v-if="addF"
      @click.self="closeF"
    >
      <div class="box">
        <input
          type="text"
          placeholder="请输入待办事项"
          v-model="task"
        >
        <button
          class="button button-fill"
          @click='addTask'
        >确定添加</button>
      </div>
    </div>
    <!-- 任务列表 -->
    <Task :tasklist="tasklist" />
  </div>
</template>
<script>
import Task from '@/components/Task.vue'
export default {
  data() {
    return {
      addF: false, //模态框开关
      task: '', //任务内容
      tasklist: []
    }
  },
  components: {
    Task
  },
  methods: {
    openF() {
      //打开输入框
      this.addF = true
      console.log(this.addF)
    },
    closeF() {
      this.addF = false
      console.log(this.addF)
    },
    addTask() {
      const { task } = this
      const date = new Date().getTime()
      this.tasklist.push({
        id: this.tasklist.length + 1,
        task,
        tf: false,
        date
      })
      this.task = ''
      this.closeF()
      console.log(this.tasklist)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/lib/reset.scss';
.content {
  position: relative;
  .add {
    position: absolute;
    z-index: 100;
  }
  .button-warning {
    @include background-color(rgba(226, 94, 28, 0.7));
    @include rect(40px, 40px);
    @include color(#fff);
    @include font-size(20px);
    @include border-radius(50%);
    position: absolute;
    top: 60px;
    left: 10px;
  }
  .add-task {
    @include rect(100%, 100%);
    @include background-color(rgba(100, 100, 200, 0.7));
    @include flexbox();
    @include flex-direction(column);
    @include justify-content(center);
    @include align-items(center);
    position: absolute;
    top: 0;
    left: 0;
    z-index: 999;
    .box {
      @include rect(80%, 100px);
      @include background-color(#19f);
      @include flexbox();
      @include flex-direction(column);
      @include justify-content(space-around);
      @include align-items(center);
      button.button-fill {
        @include background-color(#f11);
      }
      input {
        @include rect(80%, 30px);
        @include line-height(30px);
        @include border-radius(10px);
        @include padding(0 10px);
      }
    }
  }
}
</style>