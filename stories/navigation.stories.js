import '../src/css/utils/reset.css';
import '../src/css/utils/generic.css';
import '../src/css/components/navigation.css';
import Navigation from "../views/partials/navigation.handlebars";

export default {
	title: 'Navigation',
};

export const navigation = () => Navigation();

export const navigationSelected = () => {
	return Navigation().replace("navigation__item", "navigation__item navigation__item--selected");
};
