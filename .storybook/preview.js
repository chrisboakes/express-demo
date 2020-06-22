import { addDecorator } from '@storybook/html';
import { withA11y } from '@storybook/addon-a11y';
import { withTests } from '@storybook/addon-jest';

import results from '../.jest-test-results.json';


addDecorator(
	withTests({
		results,
	})
);

addDecorator(withA11y);
