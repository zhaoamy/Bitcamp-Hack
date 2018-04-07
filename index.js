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

//var bac_calc = require("./BACCalculations");
var misc = require("./misc");

app.get('/', function(req, res) {
    res.render('start', {
        content: "test"
    });
})


app.post('/', function(req, res) {

    var startTime = misc.roundToHour(new Date())
    startTime.setTime(startTime.getTime() - (3*60*60*1000)) // 3 hours before current time
    var endTime = new Date();
    endTime.setTime(startTime.getTime() + (10*60*60*1000)) // 12 hours after startTime

    var data = {
        gender: req.body.gender,
        weight: req.body.weight,
        height: (req.body.feet * 12) + req.body.inches,
        startTime: startTime.toLocaleString(),
        endTime: endTime.toLocaleString()
    };

    res.render('graph', data);
})

app.listen(3000, function() {
    console.log('App listening on port 3000!');
});
