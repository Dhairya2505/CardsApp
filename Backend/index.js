const express = require('express');
const cors = require('cors');
const signupRoute = require('./Routes/Signup.js');
const signinRoute = require('./Routes/Signin.js');

const app = express();

app.use(cors());
app.use(express.json());

app.use(signupRoute);
app.use(signinRoute);

const PORT = 8001;

app.listen(PORT,()=> {
    console.log('server started');
});