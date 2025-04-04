const request = require('supertest');
const app = require('../src/app');

describe('GET /api/events', () => {
  it('should return a list of events', async () => {
    const res = await request(app).get('/api/events');
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('events');
  });
});
