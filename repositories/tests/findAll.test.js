const { expect } = require('chai');
const animalRepository = require('../animalRepository');
const db = require('../../db');

describe('animalRepository.getAll', () => {
    beforeAll(async () => {
        await db.connect();
    });
    
    afterAll(async () => {
        await db.disconnect();
    });

    it('should return all an array', async () => {
        const animals = await animalRepository.findAll();
        expect(animals).to.be.an('array');
    });

    it('should return an array of animals, and one of the animals should be "Lion" ', async () => {
        const animals = await animalRepository.findAll();
        const lion = animals.find( animal => animal.name = "Lion");
        expect(lion.name).to.equal('Lion');
    })

})