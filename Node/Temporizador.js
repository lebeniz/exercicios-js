const schedule = require('node-schedule')

const tarefa1 = schedule.scheduleJob('*/5 * 9 * * 4', function () {//(*/5) significa que a cada segundo e 
    console.log('Executando tarefa 1!', new Date().getSeconds());//(9) as nove da manhã, (4)quinta feira
})                                                              //vai disparar a mensagem
setTimeout(() => {
   tarefa1.cancel() 
   console.log('cancelando tarefa1');
}, 20000);//(20000)cancela a tarefa depois de 20 segundos

const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [new schedule.Range(1, 5)]//(1, 5) 1=segunda, 5= sexta, ou seja de segunda a sexta 
regra.hour = 9
regra.second = 30

const tarefa2 = schedule.scheduleJob(regra, function (){
    console.log('Executando tarefa 2!', new Date().getSeconds());
})