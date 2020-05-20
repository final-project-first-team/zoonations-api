const { Zoos } = require('../../models');

module.exports = {
    // GET ALL ZOOS DATA
    getAll: async (req, res) => {
        try {
            const zoos = await Zoos.find({});

            res.status(200).json({ message: 'Get all zoos data', data: zoos });
        } catch (error) {
            console.log(error);
        }
    },
    // CREATE NEW ZOOS
    create: async (req, res) => {
        try {
            const { zooName,
                photo,
                about,
                address,
                city,
                since,
                animalType,
                animalNumber
            } = req.body;
            const zoos = await Zoos.create({
                zooName,
                photo,
                about,
                address,
                city,
                since,
                animalType,
                animalNumber,
            });

            res.status(201).json({
                message: 'New zoo successfully created!',
                data: zoos
            });
        } catch (error) {
            console.log(error);
        }
    },
    // EDIT BY ID
    edit: async (req, res) => {
        try {
            const { id } = req.params;
            const { name, photo, address, city, since, animalType, animalNumber } = req.body;
            const edited = {
                name, photo, address, city, since, animalType, animalNumber
            };

            const result = await Zoos.findByIdAndUpdate(id, {
                $set: {
                    ...edited,
                },
            });

            res.status(200).json({
                message: `Zoo with ID: ${id} successfully edited`,
                data: result,
            });
        } catch (error) {
            console.log(error);
        }
    },
    // DELETE BY ID
    deleteById: async (req, res) => {
        try {
            const { id } = req.params;

            const result = await Zoos.findByIdAndRemove(id);

            res.status(200).json({
                message: `Zoo with ID: ${id} successfully deleted`,
                data: result,
            });
        } catch (error) {
            console.log(error);
        }
    },
};