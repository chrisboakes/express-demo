# Express

## Introduction

This POC will explore a server-side rendered application using [Express](https://expressjs.com/), which is a popular web application framework for [Node.js](https://nodejs.org/en/), combined with [express-handlebars](https://www.npmjs.com/package/express-handlebars) as a templating language.
The front-end will use vanilla CSS and JavaScript.

## Objectives

Explore server-side rendering using Express. I will predominantly be looking at:

- Scalability
- Maintainability
- Performance
- Configurability

## POC

- Project repo: [https://github.com/chrisboakes/express-demo](https://github.com/chrisboakes/express-demo)
- Built project: [https://express-demo-poc.herokuapp.com/](https://express-demo-poc.herokuapp.com/)

The application uses these mock API calls:

- [List](https://my-json-server.typicode.com/chrisboakes/express-demo/articles)
- [Article](https://my-json-server.typicode.com/chrisboakes/express-demo/coronavirus-q&a-how-will-businesses-cope)

It uses Express for:

- [Routing](https://expressjs.com/en/guide/routing.html)
- [Middleware](https://expressjs.com/en/guide/using-middleware.html)

The Politics and News pages use middleware to filter out the data from the list. In a real world scenario you would fetch this data pre-filtered from an API, this is something simple to demonstrate middleware.

The front-end uses vanilla JavaScript and CSS (combined and prefixed using PostCSS).

## Outcome

### Pros

- Can be combined with multiple view engines, allowing the use of templates, partials, components etc.
- Can be used [in conjunction with a FE framework](https://ssr.vuejs.org/guide/#installation) (if required)
- Express has good support - it's the most popular Node.js framework and is widely adopted by companies like Uber and IBM. There's a lot of [middleware](http://expressjs.com/en/resources/middleware.html) that can be used
- Less maintenance overhead as a frameworks' SSR solution often ships with client-side updates which can have an maintenance overhead as new versions are released
- Is not married to a client-side solution so the client-side JavaScript budget can be used elsewhere
- Consistency - both the back-end and front-end use the same language
- Performant - only write what we need

### Cons

- Nothing "out of the box", everything must be built custom
- Requires architectural consideration to establish scability best practices and patterns

## Improvements

- Integrate with CDN, at the moment the demo emulates a stale cache response

## Resources

- [Express Docs](https://expressjs.com/)
- [Express Handlebars](https://github.com/ericf/express-handlebars)
- [PostCSS](https://postcss.org/)

## Rendering

Most content should be served through a CDN with a reasonable [TTL](https://www.imperva.com/learn/performance/time-to-live-ttl/). For cached content:

![Cached Content](./readme/architecture-cached.jpg)

For stale content:

![Stale Content](./readme/architecture-stale.png)

## Running the project

```bash
# Install dependencies
$ npm install

# Run development mode
$ npm run dev

# Watchers for FE code
$ npm run watch

# Production build
$ npm run build
```

