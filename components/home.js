Vue.component('home', {

    template:`
    <div class="comp c-home">

    <!--<navbotons @current="currentSentence=$event"></navbotons>-->

    <div class="comp c-navbotons">
    <div class="flex center two">
    <button class="btn" @click="indexDown()">Anterior</button>
    <button class="btn" @click="indexUp()">Següent</button>
    </div>
    </div>

    <h4 class="counter">Current sentence: {{currentSentence}} - Total Sentences: {{totalSentences()}}</h4>

    <escena :frases="frases" :current="currentSentence"></escena>

<!--<pre>{{$data}}</pre>-->

    </div>
    `,

    data(){
        return {
            nom: 'home',
            currentSentence: 1,
            frases: [
                {txt:'El nostre heroi estava surant per l´espai sideral quan a la llunyania va albirar una nau espacial '},
                {txt:'Sentia curiositat per l´interior de la nau i es va posar a inspeccionar-la. Va arribar a una sala amb dues portes. '},
                {txt:'L´heroi va decidir travessar la porta que el portava a casa '},
                {txt:'Mentrestant altres heroes no van tenir tanta sort en la seva elecció '}
              ]
    }
},
    methods: {
        totalSentences(){
            return this.frases.length;
        },
        indexUp(){
            this.currentSentence > this.frases.length-1 ? this.currentSentence = 1 : this.currentSentence++ ;
        },
        indexDown(){
            this.currentSentence <= 1 ? this.currentSentence = this.frases.length : this.currentSentence-- ;
        },
    }


})
