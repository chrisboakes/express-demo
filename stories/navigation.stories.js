import '../src/css/utils/reset.css';
import '../src/css/utils/generic.css';
import '../src/css/components/navigation.css';

export default {
	title: 'Navigation',
};

const markup = `<nav class="navigation">
	<ul class="navigation__list">
		<li class="navigation__item"><a href='/'>Home</a></li>
		<li class="navigation__item"><a href='/politics'>Politics</a></li>
		<li class="navigation__item"><a href='/news'>News</a></li>
	</ul>
</nav>`;

export const navigation = () => markup;

export const navigationSelected = () => {
	return markup.replace('navigation__item', 'navigation__item navigation__item--selected');
};
