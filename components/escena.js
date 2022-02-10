Vue.component('escena', {

 template:
    `
    <div class="comp c-escena">
    <ul class="lesfrases">
    <li v-for="frase of frases">
            {{frase.txt}}
    </li>
  </ul>
    </div>
    `
,
// <button @click="numero++">+</button>-->
props: ['numeroFill'],


data(){
    return{
        nom: "escena",
        frases: [
            {txt:'El nostre heroi estava surant per l´espai sideral quan a la llunyania va albirar una nau espacial '},
            {txt:'Sentia curiositat per l´interior de la nau i es va posar a inspeccionar-la. Va arribar a una sala amb dues portes. '},
            {txt:'L´heroi va decidir travessar la porta que el portava a casa '},
            {txt:'Mentrestant altres heroes no van tenir tanta sort en la seva elecció '}
          ],
        }
    },
    methods:{
           numfrases(){
            this.frases.length;

           }
    }




})
