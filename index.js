let currentDate = new Date()

const whichMonth = () => {
	const year = currentDate.getFullYear();
	const month = currentDate.getMonth()+1;
	const month31 = [1,3,5,7,8,10,12];
	const month30 = [4,6,9,11];
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

const aoran = (int) => {
	if (int === 'a' || int === 'an') {
		return 1;
	} else {
		return parseInt(int);
	}
}

function getInput(str) {
	let split = str.split(' '), quantity = aoran(split[0]), mainSTR = split[1].toLowerCase(), extra = split[3],totalQuantityMonth = 0,totalQuantityMinute = 0,result;

	if (mainSTR === 'years' || mainSTR === 'year') {
		totalQuantityMonth = quantity * 365;
	} else if (mainSTR === 'month' || mainSTR === 'months') {
		totalQuantityMonth = quantity * whichMonth();
	} else if (mainSTR === 'week' || mainSTR === 'weeks') {
		totalQuantityMonth = quantity * 7;
	} else if (mainSTR === 'day' || mainSTR === 'days') {
		totalQuantityMonth = quantity * 1;
	} else if (mainSTR === 'second' || mainSTR === 'seconds') {
		totalQuantityMinute = quantity * 1000;
	} else if (mainSTR === 'minute' || mainSTR === 'minutes') {
		totalQuantityMinute = quantity * 60 * 1000;
	} else if (mainSTR === 'hour' || mainSTR === 'hours') {
		totalQuantityMinute = (quantity*60) * 60 * 1000;
	} else {
		return undefined;
	}
	return result = convertTextToDate(totalQuantityMonth, totalQuantityMinute, extra)
}

function convertTextToDate(month, minute, extra) {
	let dateandtime = '', getYear, getMonth, getDay, getSecond, getMinute, getHour;
	if (month !== 0 && minute === 0) {
		dateandtime = currentDate.setDate(currentDate.getDate() - month);
		getYear = currentDate.getFullYear(), getMonth = currentDate.getMonth()+1, getDay = currentDate.getDate(), getSecond = currentDate.getSeconds(), getMinute = currentDate.getMinutes(), getHour = currentDate.getHours();
		currentDate = new Date();
	} else if (month === 0 && minute !== 0) {
		dateandtime = new Date(currentDate - minute);
		getYear = dateandtime.getFullYear(), getMonth = dateandtime.getMonth()+1, getDay = dateandtime.getDate(), getSecond = dateandtime.getSeconds(), getMinute = dateandtime.getMinutes(), getHour = dateandtime.getHours();
		currentDate = new Date();
	}
	if (extra) {
		return `${getDay}-${getMonth}-${getYear} 00:00:00`;
	} else {
		return `${getDay}-${getMonth}-${getYear} ${getHour}:${getMinute}:${getSecond}`;
	}
}

module.exports = getInput;