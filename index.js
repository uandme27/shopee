const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors')
require('dotenv').config();
require('./config/db');

const PORT = process.env.PORT || 5000;

const indexRoute = require('./routes/indexRoute');


const app = express();
// {
//     origin: process.env.BASE_CLIENT_URL,
// }
app.use(cors())
// Sử dụng body-parser middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Sử dụng routes
app.use(indexRoute);

app.listen(PORT, () => {
    console.log("Server listening on port " + PORT);
});
