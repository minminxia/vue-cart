<template>
    <div>
      <h3>购物车</h3>
      <table>
        <tr>
          <th>勾选</th>
          <th>课程名称</th>
          <th>课程价格</th>
          <th>数量</th>
          <th>价格</th>
        </tr>
        <tr v-for="(item, index) in courseItem" :key="index">
          <td></td>
          <td>{{item.name}}</td>
          <td>{{item.price}}</td>
          <td>
            <button @click="add(item)">+</button>
            {{item.num}}
            <button @click="reduce(item)">-</button>
          </td>
          <td>{{item.price * item.num}}</td>
        </tr>
      </table>
    </div>
</template>

<script>
export default {
  name: 'cartContent',
  props: {
    courseItem: {
      default () {
        return []
      },
      type: Array
    }
  },
  methods: {
    add (item) {
      this.$emit('add', item)
    },
    reduce (item) {
      this.$emit('reduce', item)
    }
  }
}
</script>

<style scoped>

</style>
