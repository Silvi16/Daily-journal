const express = require('express')
const ejs = require('ejs')
const date = require('./date.js')

const app = express()


app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))


app.get('/about', (req, res) => {
    res.render('about')
})

app.get('/', (req, res) => {
    let day = date.getDate()
    res.render('index', {
        listTitle: day
    })
})








app.listen(8000, () => {
    console.log('Listening on port 8000')
})
