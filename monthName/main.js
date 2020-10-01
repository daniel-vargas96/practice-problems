function monthName(num) {
  const months = {
    "1": 'January',
    "2": 'February',
    "3": 'March',
    "4": 'April',
    "5": 'May',
    "6": 'June',
    "7": 'July',
    "8": 'August',
    "9": 'September',
    "10": 'October',
    "11": 'November',
    "12": 'December'
  }
  for (const prop in months) {
    if (num == prop) {
      return months[prop];
    }
  }
}

console.log(monthName(3));
console.log(monthName(2));
console.log(monthName(8));
console.log(monthName(12));
