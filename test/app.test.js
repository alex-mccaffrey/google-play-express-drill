const supertest = require('supertest');
const app = require('../app');
const { expect } = require('chai');

describe('GET /apps', () => {
    it('should return an array of apps', () => {
        return supertest(app)
      .get('/apps')
      .expect(200)
      .expect('Content-Type', /json/);
    });

    it('should be 400 if sort is incorrect', () => {
        return supertest(app)
        .get('/apps')
        .query({ sort: 'MISTAKE' })
        .expect(400, 'Sort must be one of rating or app');
    });

    it('should be 400 if generes is incorrect', () => {
        return supertest(app)
        .get('/apps')
        .query({ genres: 'MISTAKE' })
        .expect(400, 'Genres must be one of Action, Puzzle, Strategy, Casual, Arcade, Card');
    });
  
  
  
  /*  it('should return an array of books', () => {
    return supertest(app)
      .get('/books')
      .expect(200)
      .expect('Content-Type', /json/);
  })

  it('should be 400 if sort is incorrect', () => {
    return supertest(app)
      .get('/books')
      .query({ sort: 'MISTAKE' })
      .expect(400, 'Sort must be one of title or rank');
  });*/

});

