    const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
    const axios = require('axios')//axios é um cliente http, ele faz requisições para obter informaões 
                                  // de algo que esta remoto
axios.get(url).then(response => {
    const funcionarios = response.data
    console.log(funcionarios);
})