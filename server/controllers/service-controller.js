const Service = require('../models/service-model')
const service = async (req, res) => {
    try {
        const response = await Service.find();
        if(!response){
            // handle the case where no documents was found
            res.status(404).json({message:"No service found"})
            return;
        }
        return res.status(200).json({message:"Service found successfully", data: response})
    } catch (error) {
        console.log(`Service: ${error}`);
    }
}

module.exports = service;