const express = require('express');
const { db } = require('./config/db');
const { adminUserRoutes } = require('./routes/adminUserRoute');
const app = express();
require('dotenv').config()
app.use(express.json())

db.connect();

app.use('/api/adminusers', adminUserRoutes)


app.listen(3000, () => {
    console.log('Server is running...');
})