<template>
    <div>
        <h1>mpvue is good</h1>
        <Todolist></Todolist>
    </div>
</template>
<script>
// @自定义一些目录默认的是src下面的
import Todolist from '@/components/Todolist'

export default {
  components: {
    Todolist
  }
}
</script>
<style>
h1 {
  color: #f88;
}
</style>
