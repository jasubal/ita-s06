Vue.component('home', {

    template:`

    <div class="comp c-home maxW1200">

    <navbotons :totalSentences="totalSentences()"  @currentSentence= "currentSentence = $event"></navbotons>

    <escena :frases="frases" :currentSentence="currentSentence" ></escena>


    </div>
    `,

    data(){
        return {
            nom: 'home',
            currentSentence: 1,
            frases: [
                {txt:'El nostre heroi estava surant per l\’espai sideral quan a la llunyania va albirar una nau espacial '},
                {txt:'Sentia curiositat per l\’interior de la nau i es va posar a inspeccionar-la. Va arribar a una sala amb dues portes. '},
                {txt:'L\’heroi va decidir travessar la porta que el portava a casa '},
                {txt:'Mentrestant altres heroes no van tenir tanta sort en la seva elecció '}
              ]
    }
},
    methods: {
        totalSentences(){
            return this.frases.length;
        },

    }


})
