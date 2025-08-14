const request = require('supertest');
const app = require('./server');

describe('Horoscope API', () => {
  it('should return a rude horoscope by default', async () => {
    const res = await request(app).get('/api/horoscope');
    expect(res.statusCode).toBe(200);
    expect(res.body.tone).toBe('rude');
    expect(typeof res.body.message).toBe('string');
  });

  it('should return a horoscope for a given tone', async () => {
    const res = await request(app).get('/api/horoscope?tone=dramatic');
    expect(res.statusCode).toBe(200);
    expect(res.body.tone).toBe('dramatic');
  });

  it('should return an error for invalid tone', async () => {
    const res = await request(app).get('/api/horoscope?tone=banana');
    expect(res.statusCode).toBe(400);
    expect(res.body.error).toBe('Invalid tone. Use rude, dramatic, or motivational.');
  });
});
