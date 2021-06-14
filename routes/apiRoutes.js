// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
const path = require('path');
const notesData = require('../db/db.json');
const fs = require('fs');

// ROUTING

module.exports = (app) => {

  app.get('/api/notes', (req, res) => res.json(notesData));

  app.post('/api/notes', (req, res) => {
    notesData.push(req.body);
    console.log('req.body: ', req.body)

    fs.writeFile(path.join(__dirname, '../db/db.json'), JSON.stringify(notesData), function(err){
      if (err) throw (err);
      res.json(true);
    })

  })}
