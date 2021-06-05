const express = require('express')
const ejs = require('ejs')
const date = require('./date.js')
const _ = require('lodash')

const app = express()

//////////////////////////////////////////////////////////////////

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))

//////////////////////////////////////////////////////////////////

let newItems = []
let blogPosts = []


app.get('/index', (req, res) => {
    let day = date.getDate()
    res.render('index', {
        listTitle: day,
        title: 'Home',
        blogPosts: blogPosts
    })
})

app.get('/', (req, res) => {
    res.redirect('index')
})

app.get('/index/:entry', (req, res) => {
    let requestTitle = _.lowerCase(req.params.entry)

    blogPosts.forEach(blogPost => {
        let day = date.getDate()
        const storedTitle = _.lowerCase(blogPost.blogTitle)
        if (requestTitle === storedTitle) {
            res.render('post', {
                listTitle: day,
                title: 'Post',
                postTitle: blogPost.blogTitle,
                postSnippet: blogPost.snippet,
                postContent: blogPost.content
            })
        } 
    })
    
})


app.post('/blogs', (req, res) => {
    const blogPost = {
        blogTitle: req.body.blogTitle,
        snippet: req.body.snippet,
        content: req.body.content
    }
    
    blogPosts.push(blogPost)
    res.redirect('/index')
    
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
        title: 'ToDo',
        newListItems: newItems
    })
})


app.get('/notes', (req, res) => {
    let day = date.getDate()
    res.render('notes', {
        listTitle: day,
        title: 'Notes'
    })
})

app.post('/todo', (req, res) => {
    let newItem = req.body.newItem
    newItems.push(newItem)
    res.redirect('todo')
})











app.listen(8000, () => {
    console.log('Listening on port 8000')
})
