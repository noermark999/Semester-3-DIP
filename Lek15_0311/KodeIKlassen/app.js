const express = require('express')
const session = require('express-session')
const app = express()
let path = require('path')


// MIDDLEWARE
app.use(express.static(__dirname + '/assets'))

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, '/views'))

app.use(session({
    secret: '1A9EFAC5-3DCD-4CE6-95B7-C3AD6291473A',
    saveUninitialized: true,
    resave: true
}))
app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))
app.use(checkSecretPages)

// ENDPOINTS/ROUTES AFDELING
app.get('/', (req, res) => {
    let isLoggedIn = false
    if (req.session.isLoggedIn) {
        isLoggedIn = true
    }
    res.render('home', {knownUser: isLoggedIn})
})

app.get('/secret', (req, res) => {
    res.render('secret', {knownUser: req.session.isLoggedIn})
})

app.get('/logout', (req, res) => {
    req.session.destroy()
    res.redirect('/')
})

app.post('/login', (req, res) => {
    const {username, password} = req.body
    if (checkUser(username, password)) {
        req.session.isLoggedIn = true;
    }
    res.redirect('/')
})

// STARTSIDE
app.listen(8080, ()=>{
    console.log('Serveren er oppe og køre på port 8080')
})

// Simuleringg af databaseopkald
function checkUser(username, password) {
    let returnvalue = false;
    if (username == 'Jakob' && password == '1234') {
        returnvalue = true;
    }
    return returnvalue;
}

// function til middleware
function checkSecretPages(req, res, next) {
    let secretPages = '/secret'
    if (req.url === secretPages) {
        if (!req.session.isLoggedIn) {
            console.log('Forsøg på ulovling indtrængen')
            res.redirect('/')
        } else {
            next()
        }
    } else {
        next()
    }
}