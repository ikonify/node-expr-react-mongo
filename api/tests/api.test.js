const request = require('supertest');
const mongoose = require('mongoose');
const app = require('../src/app');

afterAll(async () => {
  await mongoose.disconnect();
});

test('Should get response from /', async () => {
  await request(app).get('/').expect(200);
});
