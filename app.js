const express = require('express')
const ejs = require('ejs')
const date = require('./date.js')


const app = express()

//////////////////////////////////////////////////////////////////

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))

//////////////////////////////////////////////////////////////////

app.get('/', (req, res) => {
    let day = date.getDate()
    res.render('index', {
        listTitle: day,
        title: 'Home'
    })
})

app.get('/index', (req, res) => {
    let day = date.getDate()
    res.render('index', {
        listTitle: day,
        title: 'Home'
    })
})


app.get('/about', (req, res) => {
    let day = date.getDate()
    res.render('about', {
        listTitle: day,
        title: 'About'
    })
})

app.get('/blogs', (req, res) => {
    let day = date.getDate()
    res.render('blogs', {
        listTitle: day,
        title: 'Blogs'
    })
})

app.get('/todo', (req, res) => {
    let day = date.getDate()
    res.render('todo', {
        listTitle: day,
        title: 'ToDo'
    })
})

app.get('/notes', (req, res) => {
    let day = date.getDate()
    res.render('notes', {
        listTitle: day,
        title: 'Notes'
    })
})



app.listen(8000, () => {
    console.log('Listening on port 8000')
})
