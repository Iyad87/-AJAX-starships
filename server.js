var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var starships = [
{
    id: 1,
    name: ''
},
{
    id: 2,
    name: ''
}
];

var currentId = 2;

var PORT = process.env.PORT || 3000;

app.use(express.static(__dirname));
app.use(bodyParser.json());

app.get('/starships', function(req, res) {
    res.send({ products: products });
});
