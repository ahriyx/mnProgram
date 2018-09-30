<template>
    <div>       
       <!-- <Title :title="title" :subtitle="subtitle"></Title> -->
         <!-- <p>{{title}}</p>
        <p>{{subtitle}}</p> -->
        <div>
         <input type="text" @keyup.enter="handleClick" v-model="mytodo">
        <button @click="handleClick">
            添加
        </button>
        <button @click="clear">
            清空
        </button>
        </div>
         <ul>
            <!-- <li :style="{'text-decoration': todo.done?'line-through':''}" @click="toggleState(todo)" v-for="(todo,index) in todos">
            {{index+1}}:{{todo.text}}
            </li> -->
        <li :class="{'done': todo.done}" @click="toggleState(todo)" :key="index" v-for="(todo,index) in todos">
            {{index+1}}:{{todo.text}}
        </li>
        </ul>
        <p>{{remains}}/{{todos.length}}</p>
     </div>
</template>

<script>
// import Title from "./components/Title";
export default {
  // components: {
  //   Title
  // },
  // 函数来解决
  data () {
    return {
      title: 'hello vuejs',
      subtitle: 'React Vue Angular is good',
      showSub: true,
      mytodo: '',
      todos: [
        {
          text: '吃饭',
          done: false
        },
        {
          text: '睡觉',
          done: false
        },
        {
          text: '打豆豆',
          done: false
        }
      ]
    }
  },
  computed: {
    remains () {
      return this.todos.filter(v => !v.done).length
    }
  },
  methods: {
    handleClick () {
      // 直接修改title的值
      // this.title = '你好 小程序！'
      // this.todos.push('写小程序')
      // console.log(this.mytodo);
      if (this.mytodo === '') {
        return false
      }
      this.todos.push({
        text: this.mytodo,
        done: false
      })
      this.mytodo = ''
    },
    toggleState (todo) {
      // console.log(todo);
      todo.done = !todo.done
    },
    clear () {
      // 清空已经完成的
      this.todos = this.todos.filter(v => !v.done)
    }
  }
}
</script>
<style scoped>
  li {
    cursor: pointer;
  }

  li.done {
    text-decoration: line-through;
    color: #f80;
  }
</style>