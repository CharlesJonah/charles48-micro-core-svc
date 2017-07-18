const jwt = require('jsonwebtoken'); // used to create, sign, and verify tokens
const config = require('../../server/config/config'); // get our config file
const app = require('../../app')
const bcrypt = require('bcrypt-nodejs');

module.exports = {
    verifyToken(req, res, next) {
        const token = req.body.token || req.query.token || req.headers['x-access-token'];
        if (token) {
            jwt.verify(token, config.SECRET_KEY, (err, decoded) => {
                if (err) {
                    return res.status(403).send({
                        message: 'Failed, please try to log in again.'
                    });
                } else {
                    req.decoded = decoded;
                    next();
                }
            });
        } else {
            return res.status(403).send({
                message: "No token provided."
            });
        }
    },

}