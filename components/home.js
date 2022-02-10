Vue.component('home', {

    template:
    `
    <div class="comp c-home">

    <navbotons ></navbotons>

<h4>num Frases: {{numfrases}}</h4>
<escena @numfrases="numfrases=$event"></escena>

    </div>
    `,

    data(){
        return {
            nom: 'home',
            numeroPare: 1,
            numfrases: '0',

    }}



})
