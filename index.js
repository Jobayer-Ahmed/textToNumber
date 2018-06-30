/**
 * Get current date
 */
let currentDate = new Date();

/**
 * Returns current number of month
 * 
 * @returns {number} total day number of month
 * 
 */
const whichMonth = () => {
	/**
	 * array of those month position who contain 31 day
	 * @type {Array}
	 */
	const month31 = [1,3,5,7,8,10,12];
	/**
	 * array of those month position who contain 30 day
	 * @type {Array}
	 */
	const month30 = [4,6,9,11];
	/**
	 * check if current month contain 31 day
	 * @param  {number} month31.includes(month) 1 or -1
	 * @return {number}                         if 1 return 31
	 */
	if (month31.includes(currentDate.getMonth()+1)) {
		return 31;
	} 
	/**
	 * check if current month contain 30 day
	 * @param  {number} month30.includes(month) 1 or -1
	 * @return {number}                         if 1 return 30
	 */
	else if (month30.includes(currentDate.getMonth()+1)) {
		return 30;
	} else {
		/**
		 * check if current year is leap year or not
		 * @param  {bool} (year %             100 true or false
		 * @return {number}       if true return 29
		 */
		if ((currentDate.getFullYear() % 100 === 0) ? (currentDate.getFullYear() % 400 === 0) : (currentDate.getFullYear() % 4 === 0)) {
			return 29;
		} else {
			return 28;
		}
	}
}

/**
 * Check if input contains a or an
 * @param  {string} int first part of user input
 * @return {number}     if contain a or an then return 1 otherwise return number version of first part of user input
 */
function aoran (int) {
	/**
	 * check first section contain a or an
	 * @return {number}
	 */
	if (int === 'a' || int === 'an')
		return 1;
	return parseInt(int);
}

/**
 * Main function.
 * @param  {sting} str user input
 * @return {function} call convertTextToDate function
 */
const getInput = (str) => {
	/**
	 * contain all month related thing
	 * @type {Object}
	 */
	const textToMonth = { 'year': 365, 'month': whichMonth(), 'week': 7, 'day': 1 };
	/**
	 * contain all minutes related thing
	 * @type {Object}
	 */
	const textToMinute = { 'second': 1, 'minute': 60, 'hour': 3600 };
	let split = str.split(' ');
	/**
	 * first part of user input
	 * @type {string}
	 */
	let quantity = aoran(split[0]);
	/**
	 * second part of user input
	 * @type {Array}
	 */
	let mainSTR = split[1].split('');

	let = totalQuantityMonth = 0;
	/**
	 * total quantity of month
	 * @type {number}
	 */
	let totalQuantityMinute = 0;
	/**
	 * check if user input contain plural part
	 * @param  {string} mainSTR[length] 
	 * @return {string} 
	 */
	if (mainSTR[mainSTR.length - 1] === 's') { mainSTR.pop(); mainSTR = mainSTR.join('');} else { mainSTR = mainSTR.join(''); }
	if (Object.keys(textToMonth).includes(mainSTR) > 0) {
		totalQuantityMonth = quantity * textToMonth[mainSTR];
	} else if (Object.keys(textToMinute).includes(mainSTR) > 0) {
		totalQuantityMinute = quantity * textToMinute[mainSTR];
	}

	return result = convertTextToDate(totalQuantityMonth, totalQuantityMinute, split[3])
}

/**
 * Convert text to date
 *
 * @param {number} month 0 or 1
 *
 * @param {number} minute 0 or 1
 *
 * @param {number} extra 0 or 1
 *
 * @returns {string} text to date 
 */
const convertTextToDate = (month, minute, extra) => {
	let dateandtime = '', getYear, getMonth, getDay, getSecond, getMinute, getHour;
	// Check if input needs to convert date
	if (month !== 0 && minute === 0) {
		dateandtime = currentDate.setDate(currentDate.getDate() - month);
		getYear = currentDate.getFullYear(), getMonth = currentDate.getMonth()+1, getDay = currentDate.getDate(), getSecond = currentDate.getSeconds(), getMinute = currentDate.getMinutes(), getHour = currentDate.getHours();
		currentDate = new Date();
	} 
	// Check if input needs to convert time
	else if (month === 0 && minute !== 0) {
		dateandtime = new Date(currentDate - minute);
		getYear = dateandtime.getFullYear(), getMonth = dateandtime.getMonth()+1, getDay = dateandtime.getDate(), getSecond = dateandtime.getSeconds(), getMinute = dateandtime.getMinutes(), getHour = dateandtime.getHours();
		currentDate = new Date();
	}
	// Check if input contains any optional case
	if (extra) {
		return `${getDay}-${getMonth}-${getYear} 00:00:00`;
	} else {
		return `${getDay}-${getMonth}-${getYear} ${getHour}:${getMinute}:${getSecond}`;
	}
}

module.exports = getInput;

console.log(getInput('a hour ago')); //26-6-2018 2:34:26
console.log(getInput('a day ago')); //25/6/2018 3:34:54
console.log(getInput('a month ago')); //27/5/2018 3:36:5
console.log(getInput('a month ago 00:00')); //27/5/2018 3:36:5