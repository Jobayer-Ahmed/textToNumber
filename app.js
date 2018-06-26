// Declaring global variables
let x = 0, number = 0;
const date = new Date();

// Check which month it is
const whichMonth = () => {
	const year = date.getFullYear();
	const month = date.getMonth();
	if (month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12) {
		return 31;
	} else if (month == 4 || month == 6 || month == 9 || month == 11) {
		return 30;
	}
	else {
		let x = (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0)
		if (x) {
			return 29;
		} else {
			return 28;
		}
	}
}

// Main function
function getDateFromString(str) {
	// Splitting input
	let split = str.split(' '), firsttext = split[1].toLowerCase(), result;
	// check if input's first letter contain 'a' or 'an'
	if (split[0] === 'a' || split[0] === 'an') {
		number = 1;
	} else {
		number = parseInt(split[0]);
	}

	// Get actual number from first text input
	if (firsttext === "year" || firsttext === "years") {
		x = number * 365;
		result = getDate(x);
	} else if (firsttext === "month" || firsttext === "months") {
		let monthNumber = whichMonth();
		x = number * monthNumber;
		result = getDate(x)
	} else if (firsttext === "week" || firsttext === "weeks"){
		x = number*7;
		result = getDate(x)
	} else if (firsttext === "day" || firsttext === "days") {
		x = number*1
		result = getDate(x)
	} else {
		result = getTime(number, firsttext);
	}
	return result
}

// Get time if input doesn't contain any day, week, month
function getTime(int, str) {
	let datetime = '';
	if (str === "second" || str === "seconds") {
		x = int*1000
		datetime = new Date(date - x)
	} else if (str === "minute" || str === "minutes") {
		x = int*60*1000
		datetime = new Date(date - x)
	} else if (str === "hour" || str === "hours") {
		x = (int*60)*60*1000
		datetime = new Date(date - x)
		console.log(x, datetime)
	} else {
		return undefined
	}
	let timeAndDateOnly = `${datetime.getDate()}-${datetime.getMonth()+1}-${datetime.getFullYear()} ${datetime.getHours()}:${datetime.getMinutes()}:${datetime.getSeconds()}`;
	return timeAndDateOnly
}

// Get time if input doesn't contain any second, minute, hour
function getDate(int) {
	let mainDate = date.setDate(date.getDate() - int);
	var dateMsg = date.getDate()+'/'+ (date.getMonth()+1) +'/'+date.getFullYear() + ` ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
	return dateMsg
}

// exporting module
module.exports = getDateFromString;