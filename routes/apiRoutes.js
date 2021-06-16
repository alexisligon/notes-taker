const path = require('path');
const notesData = require('../db/db.json');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

// ROUTING

module.exports = (app) => {

  app.get('/api/notes', (req, res) => res.json(notesData));

  app.post('/api/notes', (req, res) => {

    //push data to database
    notesData.push(req.body);
    console.log(req.body);

    //run unique id code for the id of the body
    req.body.id = uuidv4();
    console.log('id: ', req.body.id)

    //write the file of the database, stringify for json format
    //if error, throw error
    fs.writeFile(path.join(__dirname, '../db/db.json'), JSON.stringify(notesData), function (err) {
      if (err) throw (err);
      res.json(true);
    })

  })

  app.delete('/api/notes/:id', (req, res) => {
    //put delete code here!!!
  })
}
