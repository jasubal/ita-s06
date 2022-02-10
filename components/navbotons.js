Vue.component('navbotons', {

    template:
    `
    <div class="comp c-navbotons">
    <div class="flex center two">
    <button class="btn" @click="mouIndex(-1)">Anterior</button>
    <button class="btn" @click="mouIndex(1)">Següent</button>
    </div>
    </div>
    `,

    data(){
        return {
            txtIndex: 0,
        }
    },
    methods:{
           mouIndex(valor){
            valor < 0 ? this.txtIndex = 0 : this.txtIndex += valor;
        }

    }






})
