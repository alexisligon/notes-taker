const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'))

//routes

// app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'index.html')));
// app.get('/notes', (req, res) => res.sendFile(path.join(__dirname, 'notes.html')));

require('./routes/apiRoutes')(app)
require('./routes/htmlRoutes')(app)



app.listen(PORT, () => console.log('app running'))