<template>
  <div class="content">
    <ul>
      <li
        v-for="item in newTask"
        :key="item.id"
      >
        <p>任务：{{item.task}}</p>
        <p>添加时间：{{item.date|timer}}</p>
        <p class="btnbox"><span
            @click="checkF(item.id)"
            class="btn"
            :class="item.tf?'success':'warning'"
          >{{item.tf?'已完成':'未完成'}}</span> <span
            class="btn"
            @click="changeF(item.id)"
          >修改</span><span
            class="btn warning"
            @click="delTask(item.id)"
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
import { mapState, mapMutations } from 'vuex'
import Task from '@/components/Task.vue'
export default {
  data() {
    return {
      id: 0,
      index: 0,
      task: '',
      uF: false
    }
  },
  methods: {
    checkF(id) {
      //更改已完成和未完成
      this.tasklist.map(item => {
        if (item.id == id) {
          item.tf = !item.tf
        }
      })
      // console.log(this.tasklist)
      this.changeTasklist(this.tasklist)
    },
    delTask(id) {
      //删除
      this.tasklist.forEach((item, index) => {
        if (item.id == id) {
          this.index = index
        }
      })
      this.tasklist.splice(this.index, 1)
      // console.log(this.index)
      this.changeTasklist(this.tasklist)
    },
    changeF(id) {
      this.tasklist.forEach((item, index) => {
        if (item.id == id) {
          this.task = item.task
          this.index = index
        }
      })
      this.uF = true
    },
    closeF() {
      this.uF = false
    },
    updata() {
      //修改数据
      this.tasklist[this.index].task = this.task
      this.closeF()
      // console.log(this.tasklist)
      this.changeTasklist(this.tasklist)
    },
    ...mapMutations({
      changeTasklist: 'changeTasklist'
    })
  },
  computed: {
    ...mapState({
      tasklist: state => state.Todo.tasklist
    }),
    newTask() {
      return this.tasklist.filter(item => !item.tf)
    }
  }
}
</script>
<style lang="scss" scoped>
@import '@/lib/reset.scss';
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
</style>