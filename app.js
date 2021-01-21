const express = require('express');
const morgan = require('morgan');
//const cors = require('cors');

//app.use(cors());
const app = express();

app.use(morgan('common'));
const apps = require('./app-list.js');

app.get('/apps', (req, res) => {
    const { search = "", sort, genres } = req.query;
  
    if (sort) {
      if (!['rating', 'app'].includes(sort)) {
        return res
          .status(400)
          .send('Sort must be one of rating or app');
      }
    }

    if (genres) {
        if (!['Action', 'Puzzle', 'Strategy', 'Casual', 'Arcade', 'Card'].includes(genres)) {
          return res
            .status(400)
            .send('Genres must be one of Action, Puzzle, Strategy, Casual, Arcade, Card');
        }
      }
  
    let results = apps
          .filter(app =>
              app
                .App
                .toLowerCase()
                .includes(search.toLowerCase()));
  
                if (sort === 'app') {
                    results = store.sort((a, b) => {
                      let x = a['App'].toLowerCase();
                      let y = b['App'].toLowerCase();
                
                      return x > y ? 1 : x < y ? -1 : 0;
                    });
                  }
                  else if (sort === 'rating') {
                    results = results.sort((a, b) => {
                      return a['Rating'] < b['Rating'] ? 1 : a['Rating'] > b['Rating'] ? -1 : 0;
                    })
                  }

      if (genres) {
        results = results.filter(app => {
          return app.Genres.toLowerCase() === genres.toLowerCase();
        });
      }
  
    res
      .json(results);
  });


  module.exports = app;