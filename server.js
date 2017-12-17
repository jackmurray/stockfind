'use strict'

const express = require('express')
const path = require('path')
const request = require('request')

const barchartAPIKey = require('./src/settings/BarchartAPIKey')

const app = express()

app.use(express.static(path.resolve(__dirname, 'build')));

app.get('/api/stock', (req, res) => {
  request({
    url: 'https://marketdata.websol.barchart.com/getQuote.json',
    qs: { symbols: req.query.symbol, apikey: barchartAPIKey }
  }, (error, response, body) => {
    if (error) res.status(500).send(error)
    else res.send(body)
  })
})

// Usually return the main index.html, so react-router render the route in the client
// The registerServerWorker usually takes care of this anyway
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'build', 'index.html'))
})

const PORT = process.env.PORT || 9000

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`)
})
