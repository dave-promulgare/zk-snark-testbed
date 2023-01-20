const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors())
app.use(express.static('./../zkproofInput'));
app.listen(8000, () => console.log('Ready. Connect to http://localhost:8000'))