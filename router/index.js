const animalController = require('../controllers/animalController');

module.exports = app => {
    app.get('/animals', animalController.getAll);
    app.get('/animals/:id', animalController.getById);
    app.post('/animals', animalController.create);
    app.put('/animals/:id', animalController.updateById);
    app.delete('/animals/:id', animalController.deleteById);
}