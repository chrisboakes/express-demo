const express = require('express');
const fetch = require("node-fetch");
const { FilterData } = require('../server/filter-data');
const router = express.Router();
const filter = new FilterData();

// Homepage route
router.get('/', (req, res) => {
	fetch('https://my-json-server.typicode.com/chrisboakes/express-demo/articles')
	.then((res) => res.json())
	.then(data => {
		res.render('index', {
			title: 'Home',
			description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed laoreet elit sit amet arcu lacinia, in pellentesque ex hendrerit. Aliquam dolor enim, vehicula at tellus ut, iaculis ullamcorper turpis. Morbi nec mi purus. Vestibulum ac finibus libero.',
			data
		});
	});
});

// Politics route
router.get('/politics', (req, res) => {
	fetch('https://my-json-server.typicode.com/chrisboakes/express-demo/articles')
	.then((res) => res.json())
	.then(data => {
		res.render('index', {
			title: 'Politics',
			description: 'Sit amet, consectetur adipiscing elit. Sed laoreet elit sit amet arcu lacinia, in pellentesque ex hendrerit. Aliquam dolor enim, vehicula at tellus ut, iaculis ullamcorper turpis. Morbi nec mi purus. Vestibulum ac finibus libero.',
			data: filter.filterBySection(data, 'politics')
		});
	});
});

// News route
router.get('/news', (req, res) => {
	fetch('https://my-json-server.typicode.com/chrisboakes/express-demo/articles')
		.then((res) => res.json())
		.then(data => {
			res.render('index', {
				title: 'News',
				description: 'In pellentesque sit amet, consectetur adipiscing elit. Sed laoreet elit sit amet arcu lacinia, ex hendrerit. Aliquam dolor enim, vehicula at tellus ut, iaculis ullamcorper turpis. Morbi nec mi purus. Vestibulum ac finibus libero.',
				data: filter.filterBySection(data, 'news')
			});
		});
});

// Article - news
router.get(['/news/:slug', '/politics/:slug'], (req, res) => {
	fetch(`https://my-json-server.typicode.com/chrisboakes/express-demo/${req.params.slug}`)
	.then((res) => res.json())
	.then(data => {
		res.render('article', {
			title: data.title,
			data
		});
	});
});

module.exports = router;
