const express = require('express')
const app = express()
const port = 3000
const path = require('path')
const fs = require('fs')

app.use('/', express.static(path.join(__dirname, 'public')))
app.use('/static/', express.static(path.join(__dirname, 'static')))

app.get('/info', (req, res) => {
	res.sendFile(path.join(__dirname + '/static/info.html'))
})

app.get('/pictures', (req, res) => {
	res.sendFile(path.join(__dirname + '/static/pictures.html'))
})

app.get('/pictures/bulld', (req, res) => {
	res.sendFile(path.join(__dirname + '/static/img/bulld.jpg'))
})

app.get('/pictures/bulldo', (req, res) => {
	res.sendFile(path.join(__dirname + '/static/img/bulldo.jpg'))
})

app.get('/pictures/bulldog', (req, res) => {
	res.sendFile(path.join(__dirname + '/static/img/bulldog.jpg'))
})

app.get('/data', (req, res) => {
	res.sendFile(path.join(__dirname + '/static/data.html'))
})

app.get('/data/petjson', (req, res) => {
	const thePet = require("./static/petObject/pet")
	res.json(thePet)
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))