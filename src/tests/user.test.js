const request = require('supertest');
const app = require('../src/app');

describe('User Functionality', () => {
  test('should retrieve user profile', async () => {
    const login = await request(app).post('/auth/login').send({
      email: 'jane@example.com',
      password: 'password123',
    });
    const res = await request(app)
      .get('/users/profile')
      .set('Authorization', `Bearer ${login.body.token}`);
    expect(res.statusCode).toBe(200);
    expect(res.body.email).toBe('jane@example.com');
  });
});
