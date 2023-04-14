const express      =  require('express');
const cors         =  require('cors');
const connect      =  require('./database/connect');
const userRoutes   =  require('./routes/userRoutes');
const adminRoutes  =  require('./routes/adminRoutes'); 
const bookRoutes   =  require('./routes/bookRoutes');
const rentalRoutes =  require('./routes/rentalRoutes');
require('dotenv').config();
//creating the app
const app = express();

//setup
app.use(cors());
app.use(express.json());

//connecting to server
const port = 666;
app.listen(port, ()=>{ 
    //if the server has been successfully connected then we will show this function that display a message 
    console.log("=> Connected to Server");
})

//connecting to database
connect();

//creating initial routes
app.use('/user', userRoutes);
app.use('/books', bookRoutes);
app.use('/admin', adminRoutes);
app.use('/rental', rentalRoutes);

