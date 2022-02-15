
const express = require('express')
const app = express()
const port = 3000

//Acceso a publics:

app.use(express.static("publics"))

//Rutas:

app.get('/Home', (req, res) => {
  res.sendFile(__dirname + '/views/home.html')
})

app.get('/About', (req, res) => {
  res.sendFile(__dirname + '/views/about.html')
})

app.get('/Works', (req, res) => {
    res.sendFile(__dirname + '/views/works.html')
})

app.get('/Photo-gallery', (req, res) => {
    res.sendFile(__dirname + '/views/photo-gallery.html')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})