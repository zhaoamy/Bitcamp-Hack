var express = require('express');
var exphbs = require('express-handlebars');
var bodyParser = require('body-parser');
var expstate = require('express-state');

var app = express();

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');
app.use('/public', express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
expstate.extend(app);
app.set("state namespace", 'App');

app.get('/', function(req, res) {
    res.render('start', {
        content: "test"
    });
})

app.post('/', function(req, res) {
    var user_stats = {
        gender: req.body.gender,
        weight: req.body.weight,
        height: (req.body.feet * 12) + req.body.inches,
    };

    var startTime = new Date();
    startTime.setTime(startTime.getTime() - (3*60*60*1000)) // 3 hours before current time
    var endTime = new Date();
    endTime.setTime(endTime.getTime() + (10*60*60*1000)) // 10 hours after current time

    console.log(startTime.toLocaleString())
    console.log(endTime.toLocaleString())

    res.render('graph', user_stats);
})

app.listen(3000, function() {
    console.log('App listening on port 3000!');
});
