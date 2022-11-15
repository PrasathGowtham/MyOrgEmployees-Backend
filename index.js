require('dotenv').config();
const express = require('express');
const db = require('./db/connect');


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

//Yet to update CORS

app.use('/api', employeeRoutes);


const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`App is running on PORT ${PORT}`);
});