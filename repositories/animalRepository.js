const db = require('../db/index');
const { ObjectId } = require('mongodb');
const { create, deleteById, updateById } = require('../controllers/animalController');

module.exports = {
    async findAll () {
        try {
            const animals = await db.animals.find().toArray();
            return animals;
        } catch(err) {
            console.log(err);
        }
    },

    async findById(id) {
        try {
            const animal = await db.animals.findOne({ _id: ObjectId(id)});
            return animal;
        } catch(err) {
            console.log(err);
        }
    },

    async create(newAnimal) {
        try {
            const { ops: [animal] } = await db.animals.insertOne(newAnimal);
            return animal;
        } catch(err) {
            console.log(err);
        }
    },
    async updateById(id, newData) {
        try {
            const { result } = await db.animals.updateOne(
                {_id: ObjectId(id)},
                { $set: newData }
            )
            console.log(result);
            return !!result.n;
        } catch(err) {

        }
    },
    async deleteById(id) {
        try {
            const { result } = await db.animals.deleteOne( { 
                _id: ObjectId(id)
            })
            console.log(result);
            return !!result.n;
        } catch(err) {
            console.log(err);
        }
    }
}