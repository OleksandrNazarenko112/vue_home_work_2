const Content = ( 'the-content', {
  props:["info"],
    methods: {
    changeMenuVisibility: function ( event ) {
      this.visibleStatus = !this.visibleStatus
    },
    selectOptionHandler: function ( event ) {
      this.visibleStatus = false
      this.$parent.$emit ( 'menuSelect', event.target.innerHTML.trim() )
    }
  },
        data: function () {
    return {
      visibleStatus: false
    }
  },


    template: `

    <div><h1 v-for="item in info"  @click="changeMenuVisibility">{{item.number}}</h1>
    <p v-for="item in info"   v-if = "visibleStatus" >{{item.six}}</p>
    </div>`
})



var app = new Vue({
  el: '#app',
  data:{
    text: {},
    sourceURL:"https://oleksandrnazarenko112.github.io/vue_home_work_2/test.json",
    mainMenuOptions: [
      "Осень",
      "Зима",
      "Весна",
      "Лето"

    ],
  },
    components: {
    'the-content': Content
  },
    computed: {
    titles: function () {

      return Object.keys( this.text )

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




