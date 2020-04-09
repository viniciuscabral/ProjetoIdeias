var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Projeto = require('./projeto');

var options = {
    user: "root",
    pass: "root"
};

mongoose.connect('mongodb://mongo:27017/proj');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;

var router = express.Router();

router.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    console.log('Working........');
    next();
});

router.get('/', function (req, res) {
    res.json({ message: 'API ok' });
});

router.route('/projetos')
    .post(function (req, res) {
        console.log(res.body);
        var projeto = new Projeto();

        projeto.title = req.body.title
        projeto.desc = req.body.desc
        projeto.link = req.body.link
        projeto.tags = req.body.tags

        console.log(projeto);
        projeto.save(function (error) {
            if (error)
                res.send(error);

            res.json({ message: 'Projeto inserido!' });
        });
    })

    /* 2) Método: Selecionar Todos (acessar em: GET http://locahost:8080/api/projetos) */
    .get(function (req, res) {
        Projeto.find(function (err, Projeto) {
            if (err)
                res.send(err);

            res.json(Projeto);
        });
    });

app.use('/api', router);

//==============================================================
app.listen(port);
console.log('Iniciando a aplicação na porta ' + port);