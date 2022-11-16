require('dotenv').config();
const express = require('express');
const db = require('./db/connect');
const cors = require('cors');

//import routes
const employeeRoutes = require('./routes/employees.routes');


const app = express();

//Connecting DB
db();




app.get('/', (req, res) => {
    res.send('Welcome to my MyOrg!');
})

//Middlewares
app.use(express.json());
app.use(cors());

app.use('/api', employeeRoutes);


const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`App is running on PORT ${PORT}`);
});