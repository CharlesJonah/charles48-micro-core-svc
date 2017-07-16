const dotenv = require('dotenv');

dotenv.config({
    silent: true
});

module.exports = {
    DATABASE_URL: process.env.DATABASE_URL,
}