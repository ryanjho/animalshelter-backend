const animalRepository = require('../repositories/animalRepository');
const httpResponseFormatter = require('../formatters/httpResponse');

module.exports = {
    async getAll(req, res) {
        try {
            const animals = await animalRepository.findAll();
            httpResponseFormatter.formatOkResponse(res, animals);
        } catch(err) {
            console.log(err);
        }
    },
    async getById(req, res) {
        try {
            const animal = await animalRepository.findById(req.params.id);
            httpResponseFormatter.formatOkResponse(res, animal);
        } catch(err) {
            console.log(err);
        }
    },
    async create(req, res) {
        try {
            const newAnimal = await animalRepository.create(req.body);
            httpResponseFormatter.formatOkResponse(res, newAnimal);
        } catch(err) {
            console.log(err);
        }
    },
    async updateById (req,res) {
        try {
            const isUpdateSuccessful = await animalRepository.updateById(req.params.id, req.body);
            httpResponseFormatter.formatOkResponse(res, { isUpdateSuccessful});
        } catch(err) {
            console.log(err);
        }
    },
    async deleteById(req, res) {
        try {
            const isDeleteSuccessful = await animalRepository.deleteById(req.params.id);
            console.log(isDeleteSuccessful);
            httpResponseFormatter.formatOkResponse(res, {isDeleteSuccessful} );
        } catch(err) {
            console.log(err);
        }
    }
    
}