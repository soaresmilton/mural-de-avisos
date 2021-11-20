const PORT = 3000;
const express = require('express');
const path = require('path');
const apiRotue = require('./routes/api');

const app = express();

app.use('/api', apiRotue);
app.use(express.static(path.join(__dirname, "public")));

app.listen(PORT, () => console.log(`Server is running at http://localhost:${PORT}`));
