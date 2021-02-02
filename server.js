const express = require('express')
const app = express()
const port = 3330;
const fs = require('fs')

app.set('view engine', 'ejs');

app.use(express.static('public'))
app.use(express.static('views'))


app.get('/', (req, res) => {
    res.render('index.ejs')
})

app.get('/free', (req,res) => {
    let info = []
    let files = fs.readdirSync('./public/articels/free')
    files.forEach(Element => {
        let fileInfo = fs.readFileSync(`./public/articels/free/${Element}`)
        let student = JSON.parse(fileInfo)
        info.push(student)
    })

    res.render('free-dw.ejs', {array: info} )
})

app.get('/premium', (req,res) => {
    let info = []
    let files = fs.readdirSync('./public/articels/premium')
    files.forEach(Element => {
        let fileInfo = fs.readFileSync(`./public/articels/premium/${Element}`)
        let student = JSON.parse(fileInfo)
        info.push(student)
    })

    res.render('premium-dw.ejs', {array: info} )
})



app.get('/articels', (req,res) => {
})




app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})