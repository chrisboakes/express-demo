const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const fetch = require("node-fetch");

const app = express();

// Use handlbars
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Homepage route
app.get('/', (req, res) => {
	fetch('https://my-json-server.typicode.com/chrisboakes/nuxt-vue-demo/news-articles')
	.then((res) => res.json())
	.then(data => {
		res.render('index', {
			title: 'Home Page',
			data
		});
	});
});

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

// If port variable is not definied in the .env file
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${ PORT }`));
