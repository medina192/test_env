const express = require('express');
const dotenv = require('dotenv');
const path    = require('path');

dotenv.config({ path: '.env' });

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.enable('trust proxy');

app.get('*', (req, res) => {
  res.sendFile( path.resolve( __dirname, './public/index.html' ) );
});



app.listen(process.env.PORT || 3000, () => {
	console.log(`server running on port ${process.env.PORT}!`);
});

