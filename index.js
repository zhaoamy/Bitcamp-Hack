var express = require('express');
var exphbs = require('express-handlebars');

var app = express();

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');
app.use('/public', express.static('public'));

app.get('/', function(req, res) {
    res.render('start');
})

app.listen(3000, function() {
    console.log('App listening on port 3000!');
});
