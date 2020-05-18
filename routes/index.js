const express = require('express');
const fetch = require("node-fetch");
const router = express.Router();

// Homepage route
router.get('/', (req, res) => {
	fetch('https://my-json-server.typicode.com/chrisboakes/express-demo/articles')
	.then((res) => res.json())
	.then(data => {
		res.render('index', {
			title: 'Home Page',
			description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed laoreet elit sit amet arcu lacinia, in pellentesque ex hendrerit. Aliquam dolor enim, vehicula at tellus ut, iaculis ullamcorper turpis. Morbi nec mi purus. Vestibulum ac finibus libero.',
			data
		});
	});
});

// Article - news
router.get('/news/:slug', (req, res) => {
	fetch(`https://my-json-server.typicode.com/chrisboakes/express-demo/${req.params.slug}`)
	.then((res) => res.json())
	.then(data => {
		res.render('article', {
			data
		});
	});
});

module.exports = router;
