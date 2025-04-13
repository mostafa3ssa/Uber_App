const captainModel = require('../models/captain.model');
const captainService = require('../services/captain.service');

module.exports.registerCaptain = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()});
    }


    const {fullName, email, password, color, plate, capacity, vechileType} = req.body;

    const isCaptainExists = await captainModel.findOne({email});
    if (isCaptainExists) {
        return res.status(400).json({message: 'Captain already exists'});
    }
    
    const hashedPassword = await captainModel.hashPassword(password);

    const captain = await captainService.createCaptain({
        fullName,
        email,
        password: hashedPassword,
        color,
        plate,
        capacity,
        vechileType
    });

    const token = captain.generateAuthToken();
    res.status(201).json({
        captain, token
    });
}

