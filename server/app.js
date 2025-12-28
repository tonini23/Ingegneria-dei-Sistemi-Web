import express from 'express';
const app = express();
const port = 3000;  
//import Home from '../public/src/pagine/home';

import { profiloRouter } from './routes/profiloRouter.js';

app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));


app.get('/', function (req, res) {
    res.send('Ciao!');
    console.log('Richiesta ricevuta alla radice del sito');
});

app.use(function(req,res,next){
    res.setHeader('Content-Type', 'text/plain');
    res.status(404).send('Pagina non trovata');
}); 


app.listen(port, function () {
    console.log('Server in ascolto alla porta '+port);
});
