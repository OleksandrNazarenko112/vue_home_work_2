const Content = ( 'the-content', {
  props:["info"],
    template:`<div><h1 v-for="item in info">{{ item }}</h1></div>`
})



var app = new Vue({
  el: '#app',
  data:{
    text: {},
    sourceURL:"https://oleksandrnazarenko112.github.io/vue_home_work_2/test.json"
  },
    components: {
    'the-content': Content
  },
    computed: {
    titles: function () {

      return Object.keys ( this.text )

    },
  },

    methods: {
    loadJSON: function () {
      this.$http.get( this.sourceURL ).then (response => {
                        this.text = response.body
                    }, response => {
                        console.log ("Ошибка доступа к файлу: " + this.sourceURL)

      })
         console.log(this.titles)
    }
  }

})


