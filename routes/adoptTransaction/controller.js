const { AdoptTransaction } = require('../../models');

module.exports = {
    getAll: async (req, res) => {
        try {
            const AdoptTrans = await AdoptTrans.find({});

            res.status(200).json({ message: 'Get all adopt transaction data', data: AdoptTrans});
        } catch (error) {
            console.log(error);
            throw error;
            
        }
    },
    create: async (req, res) => {
        try {
            const {
                animalId,
                name,
                email,
                phone,
                message,
                amount,
                paymentMethod,
            } = req.body
        const newAdoptTrans = await AdoptTrans.create({
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
            const result = await AdoptTrans.findByIdAndRemove(id);

            res.status(200).json({
                message: `Adopt Transaction by id-${id} successfully deleted`,
                data: result
            });
        } catch (error) {
            console.log(error);
            throw error;
            
        }
    }
}