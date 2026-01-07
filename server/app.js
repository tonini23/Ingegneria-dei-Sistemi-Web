import express from 'express';
import { prenotazioniRouter } from './routes/prenotazioniRouter.js';


const app = express();
const port = 3001;  //la convenzione sarebbe usare la porta 3000, ma sul mio pc è già occupata


app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));


app.get('/', function (req, res) {
    res.sendFile('index.html', { root: 'public' });
});

app.use('/', prenotazioniRouter);

app.use(function(req,res,next){
    res.setHeader('Content-Type', 'text/plain');
    res.status(404).send('Pagina non trovata');
}); 


app.listen(port, function () {
    console.log('Server in ascolto alla porta '+port);
});
