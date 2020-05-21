const { AdoptTransaction } = require('../../models');

module.exports = {
    getAll: async (req, res) => {
        try {
            const adoptTransaction = await AdoptTransaction.find({});

            res.status(200).json({ message: 'Get all adopt transaction data', data: adoptTransaction});
        } catch (error) {
            console.log(error);
            throw error;
            
        }
    },
    create: async (req, res) => {
        try {
            const {
                userId,
                animalId,
                name,
                email,
                phone,
                message,
                amount,
                paymentMethod,
            } = req.body
        const newAdoptTrans = await AdoptTransaction.create({
                userId,
                animalId,
                name,
                email,
                phone,
                message,
                amount,
                paymentMethod,    
        });
        res.status(201).json({
            message: `New adopt transaction successfully created`,
            data: newAdoptTrans
        });
    } catch (error) {
        console.log(error);
        throw error;
    }
},
    deleteById: async (req, res) => {
        try {
            const { id } = req.params;
            const result = await AdoptTransaction.findByIdAndRemove(id);

            res.status(200).json({
                message: `Adopt Transaction by id-${id} successfully deleted`,
                data: result
            });
        } catch (error) {
            console.log(error);
            throw error;
            
        }
    },
    getById: async (req, res ) => {
        try {
            const { id } = req.params;
            const result = await AdoptTransaction.find({ userId:id });

            res.status(200).send({
                data: result
            });
        } catch (error) {
            console.log(error);
            throw error;
            
        }
    }
}