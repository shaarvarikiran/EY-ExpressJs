const express = require('express');
const morgan = require('morgan');
const app = express();

// Log HTTP requests
app.use(morgan('combined'));

// Define your routes and middleware here

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
