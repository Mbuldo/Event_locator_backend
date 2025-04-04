const request = require('supertest');
const app = require('../src/app');

describe('Auth Routes', () => {
  test('should register a new user', async () => {
    const res = await request(app).post('/auth/register').send({
      name: 'Jane Doe',
      email: 'jane@example.com',
      password: 'password123',
    });
    expect(res.statusCode).toBe(201);
  });

  test('should login a user', async () => {
    const res = await request(app).post('/auth/login').send({
      email: 'jane@example.com',
      password: 'password123',
    });
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('token');
  });
});
