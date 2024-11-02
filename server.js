const express = require('express');
const connectDB = require('./config/db');
const path = require('path');

const app = express();

// Middleware to parse JSON data
app.use(express.json());

// Connect to the MongoDB database
connectDB();

// API routes here
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/orders', require('./routes/orderRoutes'));

// Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
    // Set static folder to the React build folder
    app.use(express.static(path.join(__dirname, 'frontend', 'build')));

    // Serve the index.html file for any other route
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
    });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));