const express = require('express');
const { db } = require('./config/db');
const cors = require('cors')
const { adminUserRoutes } = require('./routes/adminUserRoute');
const app = express();
require('dotenv').config()
app.use(express.json())
app.use(cors());
db.connect();

app.use('/api/adminusers', adminUserRoutes)


app.listen(8080, () => {
    console.log('Server is running...');
})