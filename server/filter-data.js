/**
 * Dummy class to demonstrate how we could integrate
 * middleware via a class
 */
class FilterData {
	constructor() {
		
	}

	/**
	 * 
	 * @param {Array} data - all data
	 * @param {String} section - the section we're filtering by
	 * @return {Array}
	 */
	filterBySection(data, section) {
		return data.filter(item => item.section === section);
	}
}

module.exports.FilterData = FilterData;
