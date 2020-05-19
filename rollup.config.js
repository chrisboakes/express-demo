import path from "path";
import postcss from "rollup-plugin-postcss";

export default {
	input: 'src/main.js',
	output: {
		file: 'public/dist/bundle.js',
		format: 'cjs'
	},
	plugins: [
    postcss({
		extract: path.resolve('public/dist/style.css'),
		plugins: [
			require('autoprefixer')
		]
    })
  ]
};
