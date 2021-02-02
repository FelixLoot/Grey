const express = require('express')
const app = express()
const port = 3330;


app.set('view engine', 'ejs');
app.use(express.static('public'))
app.use(express.static('views'))


app.get('/', (req, res) => {
    res.render('index.ejs')
})
  




app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})