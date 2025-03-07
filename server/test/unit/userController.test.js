// server/test/unit/userController.test.js
const { getUsers, getUserById } = require('../../controllers/userController');
const User = require('../../models/User');

jest.mock('../../models/User');

describe('userController', () => {
  let req, res;

  beforeEach(() => {
    req = {};
    res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
  });

  describe('getUsers', () => {
    it('devrait récupérer tous les utilisateurs', async () => {
      const users = [{ email: 'test@example.com' }, { email: 'test2@example.com' }];
      User.find.mockResolvedValue(users);

      await getUsers(req, res);

      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith(users);
    });

    it('devrait gérer les erreurs', async () => {
      User.find.mockRejectedValue(new Error('Erreur de base de données'));

      await getUsers(req, res);

      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({ message: 'Erreur lors de la récupération des utilisateurs.', error: expect.any(Error) });
    });
  });

  describe('getUserById', () => {
    it('devrait récupérer un utilisateur par ID', async () => {
      const user = { email: 'test@example.com' };
      User.findById.mockResolvedValue(user);
      req.params = { id: '123' };

      await getUserById(req, res);

      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith(user);
    });

    it('devrait gérer les erreurs', async () => {
      User.findById.mockRejectedValue(new Error('Erreur de base de données'));
      req.params = { id: '123' };

      await getUserById(req, res);

      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({ message: 'Erreur lors de la récupération de l\'utilisateur.', error: expect.any(Error) });
    });
  });
});