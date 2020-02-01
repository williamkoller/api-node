// Importando o Express para uma constante chamada express
const express = require('express');

// Iniciando o Express em uma constante chamada app
const app = express();

// Criando a rota / e devolvendo uma resposta pra quem acessá-la
// app.get('/', (resquest, response) => {
//     return response.send('Você é especial do jeito que você é');
// });

// Criando a rota / e devolvendo uma resposta JSON pra quem acessá-la
app.get('/', (request, response) => {
    return response.json({
        name: 'William Koller',
        profession: 'Developer Backend'
    });
});


// ouvindo uma porta 3333
app.listen(3333);