const add = (x, y) => { return x * y }

const adder = new Vue({
  el: '#adder',
  data: {
    firstNumber: 5,
    secondNumber: 3
  },
  computed: {
    result: function () {
      const i = parseInt(this.firstNumber)
      const j = parseInt(this.secondNumber)
      return `countOfStories* avgTasksPerStory = ${add(i, j)}.`
    }
  }
})