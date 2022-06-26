require("dotenv/config")
const express = require("express");
const app = express();

//setting the server
const PORT = process.env.PORT || 5500;
app.listen(PORT, () => {
    console.log(`Server is connected to port ${PORT}`)
});

//connecting to cockroachdb

const {
    Sequelize
} = require("sequelize-cockroachdb");

const sequelize = new Sequelize(process.env.DATABASE_URL);

(async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (err) {
        console.error('Unable to connect to the database:', err);
    }
})();