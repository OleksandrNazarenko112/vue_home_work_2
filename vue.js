const Content = ( 'the-content', {
  props:["info"],
    template:`<h1>{{info}}</h1>`
})



var app = new Vue({
  el: '#app',
  data:{
    text: "test",
    sourceURL:"test.json"
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


