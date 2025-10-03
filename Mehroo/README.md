 here is the linke for the youtube :https://www.youtube.com/watch?v=7E6um7NGmeE&t=29595s



 // backend/server.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');


const server = express(); // Create an Express application
// Middleware
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(bodyParser.json());
server.use(cors());





// ! for this two router we alway use the Get method
// ! method 1
// Root route
server.get('/', (req, res) => {
  res.send('Server is working fine');
});



// ! method 2
// Catch-all route for 404 - Page Not Found
server.use((req, res) => {
  res.send('Page not found');
});






// MongoDB Atlas connection string (replace PASSWORD with your real password)
const uri = "mongodb+srv://azimifardeen:azimifardeen@cluster0.qypxmda.mongodb.net/Mehroo?retryWrites=true&w=majority&appName=Cluster0";

// Connect to MongoDB and start server
mongoose.connect(uri)
  .then(() => {
    console.log("✅ Connected to MongoDB Atlas");
    server.listen(5000, () => {
      console.log("🚀 Server is running on http://localhost:5000");
    });
  })
  .catch(err => console.error("❌ MongoDB connection error:", err));
