const express = require('express');
const path = require('path');
const dotenv = require('dotenv');

dotenv.config()

const app = express()
const port = 8080
const buildPath = path.resolve(__dirname, './dist')

app.set('trust proxy', 1)
app.use(basePath, express.static(buildPath, { index: false }))

app.get(`isalive|isready`, (req, res) => {
    res.send('OK')
})

app.use(/^(?!.*\/(internal|static)\/).*$/, (req, res) => res.sendFile(`index.html`))

app.listen(port, () => {
    console.log(`ds-react-ts app listening at http://localhost:${port}`)
})