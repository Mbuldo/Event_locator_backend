const request = require('supertest');
const app = require('../src/app');

describe('Notification System', () => {
  test('should send notification', async () => {
    const res = await request(app).post('/notifications/send').send({
      userId: 1,
      message: 'Event Reminder!',
    });
    expect(res.statusCode).toBe(200);
    expect(res.body.status).toBe('sent');
  });
});
