const Content = ( 'the-content', {
  props:["info"],
    template:`<h1>{{info}}</h1>`
})



var app = new Vue({
  el: '#app',
  data:{
    text: "test",
    sourceURL:"https://garevna.github.io/vue.github.io/data/posts.json"
  },
    components: {
    'the-content': Content
  },
    methods: {
    loadJSON: function () {
      this.$http.get( this.sourceURL ).then (response => {
                        this.text = response.body
                    }, response => {
                        console.log ("Ошибка доступа к файлу: " + this.sourceURL)
      })
    }
  }

})


