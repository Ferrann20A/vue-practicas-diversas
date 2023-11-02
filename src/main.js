import { createApp } from 'vue'
import App from './App.vue'
import router from './Router';

let app = createApp(App)

app.config.globalProperties.$filters = {
    evaluarNum(num){
        if (num % 2 === 0){
            return `<span style="color:green">${num}</span>`
        }else{
            return `<span style="color:red">${num}</span>`
        }
    },
    getTablaMultiplicar(num){
        let html = "";
        let operacion = "";
        for (let i = 1; i <= 10; i++) {
            operacion = `${num} x ${i} = ${num*i}`;
            html += `<tr>`;
            html += `<td>${operacion}</td>`
            html += `</tr>`;
        }
        return html;
    }
}

app.use(router).mount('#app')
