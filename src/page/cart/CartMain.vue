<template>
    <div class="cart-container">
      <h1>简易购物车</h1>
      <h3>添加课程</h3>
      <lable for="classname">课程名称：</lable>
      <input
        id="classname"
        type="text"
        v-model="courseInfo.name">
      <br>
      <lable for="classPrice">课程价格：</lable>
      <input
        type="text"
        v-model.number="courseInfo.price">
      <br>
      <button @click="addClassToList()">添加课程到列表</button>
      <hr>
      <table>
        <tr>
          <th>课程名称</th>
          <th>课程价格</th>
        </tr>
        <tr
          v-for="(item, index) in classList"
          :key="index">
          <td>{{item.name}}</td>
          <td>{{item.price}}</td>
          <td><button @click="addToCart(item)">添加到购物车</button></td>
        </tr>
      </table>
      <hr>
      <cartContent
        :courseItem="courseItem"
        @add="add"
        @reduce="reduce"></cartContent>
    </div>
</template>

<script>
import cartContent from '@/page/cart/cartContent'
export default {
  name: 'Cart',
  components: {
    cartContent
  },
  data () {
    return {
      courseInfo: {
        name: '',
        price: ''
      },
      classList: [
        {
          id: 0,
          name: 'vue课程实战',
          price: 100
        },
        {
          id: 1,
          name: 'React课程实战',
          price: 100
        }
      ],
      courseItem: [] // 购物车数据
    }
  },
  methods: {
    addClassToList () {
      if (this.courseInfo.name && this.courseInfo.price) {
        let addItem = {
          id: this.classList.length,
          name: this.courseInfo.name,
          price: this.courseInfo.price
        }
        this.classList.push(addItem)
        this.courseInfo.name = ''
        this.courseInfo.price = ''
      } else {
        alert('请输入要添加的内容！')
      }
    },
    addToCart (item) {
      if (this.courseItem.indexOf(item) === -1) {
        this.$set(item, 'num', 1)
        // item.num = 1
        this.courseItem.push(item)
      } else {
        this.$set(item, 'num', item.num + 1)
        // item.num += 1
      }
      console.log(this.courseItem)
    },
    add (item) {
      console.log(item)
      let _this = this
      this.courseItem.map(function (it) {
        if (it === item) {
          console.log(it)
          _this.$set(item, 'num', item.num + 1)
        }
      })
    },
    reduce (item) {
      // let _this = this
      // this.courseItem.map(function (it) {
      //   if (it === item) {
      //     if (item.num > 0) {
      //       _this.$set(item, 'num', item.num-1)
      //     } else {
      //       _this.remove(item)
      //     }
      //   }
      // })
      this.courseItem.map(it => {
        if (it === item) {
          if (item.num > 0) {
            this.$set(item, 'num', item.num - 1)
          } else {
            this.remove(item)
          }
        }
      })
    },
    remove (item) {
      if (window.confirm('确认要删除吗？')) {
        this.courseItem.splice(item, 1)
      }
    }
  }
}
</script>

<style scoped>

</style>
