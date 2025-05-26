const express = require('express');
const cors = require('cors');
require('dotenv').config();
const emailRoutes = require('./routes/emailRoutes.js');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({
  origin: "https://pixel-verse-eight.vercel.app/", // frontend URL
}));
app.use(express.json());

app.use("/api/email", emailRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
