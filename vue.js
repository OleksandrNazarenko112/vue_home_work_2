
const Content = ( 'the-content', {
  props:["info"],
    methods: {
    changeMenuVisibility: function ( event ) {
      this.visibleStatus = !this.visibleStatus
    },
    
  },
        data: function () {
    return {
      visibleStatus: false
    }
  },


    template: `

<section class="list">
  
    <div v-for="item in info"><h1  @click="changeMenuVisibility" >{{item.head}}</h1>
    <figure v-if = "visibleStatus">
   <p><img  :src="item.src" ><p> 
   <figcaption>{{item.description}}</figcaption>
  </figure>
  

    </div>
    </section>`
})



var app = new Vue({
  el: '#app',
  data:{
    text: {},
    sourceURL:"https://oleksandrnazarenko112.github.io/vue_home_work_2/test.json",
    show: true

  },

    computed: {
    titles: function () {

      return Object.keys( this.text )

    },
  },
      components: {
    'the-content': Content,
  },

    methods: {
    loadJSON: function () {
      this.$http.get( this.sourceURL ).then (response => {
                        this.text = response.body
                    }, response => {
                        console.log ("Ошибка доступа к файлу: " + this.sourceURL)

      })
         console.log(this.titles)

    },


    
  
  }


})




