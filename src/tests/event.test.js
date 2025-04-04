const request = require('supertest');
const app = require('../src/app');

describe('Event Management', () => {
  let token;

  beforeAll(async () => {
    const login = await request(app).post('/auth/login').send({
      email: 'jane@example.com',
      password: 'password123',
    });
    token = login.body.token;
  });

  test('should create an event', async () => {
    const res = await request(app)
      .post('/events')
      .set('Authorization', `Bearer ${token}`)
      .send({
        title: 'Tech Conference',
        location: 'Nairobi',
        date: '2025-06-20',
      });
    expect(res.statusCode).toBe(201);
  });

  test('should fetch all events', async () => {
    const res = await request(app).get('/events');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });
});
