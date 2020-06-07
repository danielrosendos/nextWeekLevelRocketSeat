import express from 'express';

const app = express();

app.get('/users', (request, response) => {
    console.log('Listagem De Usuários');

    response.json([
        'Daniel',
        'Danilo',
        'Bruno'
    ]);
});

app.listen(3333);