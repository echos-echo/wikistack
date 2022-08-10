const express = require('express');
const app = express();
const views = require('./views');
const { db, Page, User } = require('./models');

db.authenticate().then(() => {
    console.log('connected to database');
})

const start = async() => {
    try {
        console.log('starting');
        await db.sync({force: true});

        const port = 3000;
        app.listen(port, () => {
        console.log('Connected to port: ' + port);
})
    }
    catch(err) {
        console.log(err)
    }
}

app.use(express.urlencoded({ extended: false }));

app.use(express.static(__dirname + '/public'));

app.get('/', async (req, res) => {
    res.send(views.layout())
});

start();
