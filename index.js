const express = require('express');

const app = express();

app.get('/', (req, res) => {
	res.send('<h1>HEY GURL</h1>');
});

// If port variable is not definied in the .env file
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${ PORT }`));
