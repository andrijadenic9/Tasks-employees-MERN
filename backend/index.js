const express = require('express');
const app = express();
const cors = require('cors');

const employeeRoutes = require('./routes/employeeRoutes');
const taskRoutes = require('./routes/taskRoutes');

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

// ROUTES
app.use('/api/v1/employee', employeeRoutes);
app.use('/api/v1/task', taskRoutes);

module.exports = app;