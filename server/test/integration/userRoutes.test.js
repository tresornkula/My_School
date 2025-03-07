// server/test/integration/userRoutes.test.js
const request = require('supertest');
const app = require('../../app'); // Assurez-vous que le chemin est correct
const User = require('../../models/User');
const { connectDB, disconnectDB } = require('../setup');

describe('Routes d\'utilisateurs', () => {
  let token;

  beforeAll(async () => {
    await connectDB();
    // Créez un utilisateur de test et obtenez un token JWT
  });

  afterAll(async () => {
    await disconnectDB();
  });

  describe('GET /api/users', () => {
    it('devrait récupérer tous les utilisateurs', async () => {
      const response = await request(app)
        .get('/api/users')
        .set('Authorization', `Bearer ${token}`);

      expect(response.status).toBe(200);
      expect(response.body).toBeInstanceOf(Array);
    });
  });

  // ... autres tests pour les routes d'utilisateurs
});