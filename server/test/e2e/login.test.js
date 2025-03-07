// server/test/e2e/login.test.js
const request = require('supertest');
const app = require('../../app'); // Assurez-vous que le chemin est correct
const { connectDB, disconnectDB } = require('../setup');

describe('Connexion', () => {
  beforeAll(async () => {
    await connectDB();
  });

  afterAll(async () => {
    await disconnectDB();
  });

  it('devrait connecter un utilisateur avec des informations d\'identification valides', async () => {
    const response = await request(app)
      .post('/api/auth/login')
      .send({ email: 'test@example.com', password: 'password' });

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('token');
  });

  it('devrait renvoyer une erreur avec des informations d\'identification invalides', async () => {
    const response = await request(app)
      .post('/api/auth/login')
      .send({ email: 'test@example.com', password: 'wrongpassword' });

    expect(response.status).toBe(401);
    expect(response.body).toHaveProperty('message', 'Email ou mot de passe incorrect.');
  });
});