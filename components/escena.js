Vue.component('escena', {

 template:`
    <div class="comp c-escena">
    <ul class="lesfrases">
<li class="frase" v-for="(item, i ) in frases" :key="i" :class="{ active: i === current-1}" >
{{item.txt}}
    </li>
  </ul>
  <pre>{{$data}}</pre>
    </div>
    `,

props: ['frases','current'],
data(){
    return{
        nom: "escena",
        }
    },
mounted(){
      //this.$emit("numfrases", this.frases.length);
      //console.log(this.frases.length)
  },
  methods: {
    selectItem(i) {
      this.activeItem = i;
  },

  }


})
