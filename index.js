// Declare global variable
let currentDate = new Date();

// Get month length
const whichMonth = () => {
	const year = currentDate.getFullYear(), month = currentDate.getMonth()+1, month31 = [1,3,5,7,8,10,12], month30 = [4,6,9,11];
	if (month31.includes(month)) {
		return 31;
	} else if (month30.includes(month)) {
		return 30;
	} else {
		let x = (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
		if (x) {
			return 29;
		} else {
			return 28;
		}
	}
}

// Check if input contain a or an
const aoran = (int) => {
	if (int === 'a' || int === 'an') {
		return 1;
	} else {
		return parseInt(int);
	}
}

// Main function
function getInput(str) {
	let split = str.split(' '), quantity = aoran(split[0]), mainSTR = split[1].split(''), extra = split[3],totalQuantityMonth = 0,totalQuantityMinute = 0,result, length = mainSTR.length - 1;
	if (mainSTR[length] === 's') { mainSTR.pop(); mainSTR = mainSTR.join('');} else { mainSTR = mainSTR.join(''); }

	// Check mainSTR type
	switch (mainSTR) {
		case 'year':
			totalQuantityMonth = quantity * 365;
			break;
		case 'month':
			totalQuantityMonth = quantity * whichMonth();
			break;
		case 'week':
			totalQuantityMonth = quantity * 7;
			break;
		case 'day':
			totalQuantityMonth = quantity * 1;
			break;
		case 'second':
			totalQuantityMinute = quantity * 1000;
			break;
		case 'minute':
			totalQuantityMinute = quantity * 60 * 1000;
			break;
		case 'hour':
			totalQuantityMinute = (quantity*60) * 60 * 1000;
			break;
		default:
			return null;
			break;
	}
	return result = convertTextToDate(totalQuantityMonth, totalQuantityMinute, extra)
}

// Convert text to readable date format
function convertTextToDate(month, minute, extra) {
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

// exporting module
module.exports = getInput;