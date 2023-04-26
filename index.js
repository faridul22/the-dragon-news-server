const express = require('express');
var cors = require('cors')
const app = express();
const port = process.env.PORT || 5000;

const categories = require('./data/categories.json')

app.use(cors())

app.get('/categories', (req, res) => {
    res.send(categories)
})

app.get('/', (req, res) => {
    res.send('Dragon is running')
});
app.listen(port, () => {
    console.log(`dragon project is running port: ${port}`)
})