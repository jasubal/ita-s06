Vue.component('escena', {

 template:`
    <div class="comp c-escena">
    <ul class="lesfrases">
<li class="frase" v-for="(item, i ) in frases" :key="i" :class="{ active: i === currentSentence-1}" >
{{item.txt}}
</li>
  </ul>
    </div>
    `,

props: ['frases','currentSentence'],
data(){
    return{
        nom: "escena",
      }
},
  methods: {
/*
    selectItem(i) {
      this.activeItem = i;
    },
    */

  }


})
