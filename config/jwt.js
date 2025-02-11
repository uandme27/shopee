const jwt = require('jsonwebtoken');

const SECRET_KEY = process.env.JWT_SECRET_KEY

const createToken = (payload) => {
    return jwt.sign(payload, SECRET_KEY, { expiresIn: '1h' });
};


const verifyToken = (token) => {
    try {
        return jwt.verify(token, SECRET_KEY);
    } catch (error) {
        return null;
    }
};

module.exports = {
    createToken,
    verifyToken,
};
