Vue.component('home', {

    template:`

<div class="comp c-home maxW1200 flex center">

<div id="wellcome"  class="flex one center" v-if="!hasClicked">
<div id="user-info" class="flex one center">
<p>Benvingut user<br>
Això representa un tutorial, en el qual mitjançant dos botons els nous usuaris poden avançar o retrocedir en els consells, modificant-se el text d'ajuda i la imatge de fons.</p>
</div>
<input type=button value="INICIA EL TUTORIAL" @click="userClicked">
</div>
<div id="game" v-if="hasClicked">
    <navbotons :totalSentences="totalSentences()"
    @currentSentence="currentSentence=$event" @changetheme="changetheme" />
    <escena :frases="frases" :currentSentence="currentSentence" ></escena>
</div>

    </div>
    `,

    data(){
        return {
            nom: 'home',
            hasClicked: false,
            currentSentence: 1,
            frases: [
            {txt:'El nostre heroi estava surant per l\’espai sideral quan a la llunyania va albirar una nau espacial',
            img:'bg-1.jpg' },
            {txt:'Sentia curiositat per l\’interior de la nau i es va posar a inspeccionar-la. Va arribar a una sala amb dues portes.',
            img:'bg-2.jpg' },
            {txt:'L\’heroi va decidir travessar la porta que el portava a casa',
            img:'bg-3.jpg' },
            {txt:'Mentrestant altres heroes no van tenir tanta sort en la seva elecció',
            img:'bg-4.jpg' },
            ],
            /*
            themes: [{
                css: 'background: url(assets/bg-1.jpg);',
                css: 'background: url(assets/bg-2.jpg);',
                css: 'background: url(assets/bg-3.jpg);',
                css: 'background: url(assets/bg-4.jpg);',
              }],
            */
    }
},
    methods: {
        userClicked() {
              this.hasClicked=true;
              this.changetheme(this.currentSentence);

        },
        totalSentences(){
            return this.frases.length;
        },
        changetheme(idx){
            //console.log(this.frases[idx-1].img);
            //console.log("background: url(./assets/"+this.frases[idx-1].img+") no-repeat center center fixed;");
            document.body.style =
            "background: url(assets/"+this.frases[idx-1].img+") no-repeat center center fixed;" ;
            console.log(document.body.style.background);
        }
    },
    mounted(){
        //document.body.style = this.themes[this.currentSentence];
        //document.body.style.background = "url(assets/bg-1.jpg) no-repeat center";
        },


})
