Vue.component('navbotons', {

    template:`
    <div class="comp c-navbotons">
<!--  <button class="button btn-back" @click="torna()">Torna</button> -->
    <div class="flex center two">
    <button class="btn" @click="indexDown()">Anterior</button>
    <button class="btn" @click="indexUp()">Següent</button>
    </div>

    <h4 class="counter">Current sentence: {{currentSentence}} - Total Sentences: {{totalSentences}}</h4>
    </div>
    `,

props: ['totalSentences'],

data(){
    return {
        nom: 'navbotons',
        currentSentence: 1,

    }
},

methods : {

    indexUp(){
        this.currentSentence > this.totalSentences-1 ? this.currentSentence = 1 : this.currentSentence++ ;
        this.$emit('currentSentence', this.currentSentence);
        this.$emit('changetheme', this.currentSentence);
    },
    indexDown(){
        this.currentSentence <= 1 ? this.currentSentence = this.totalSentences : this.currentSentence-- ;
        this.$emit('currentSentence', this.currentSentence);
        this.$emit('changetheme', this.currentSentence);
    },

}


})
