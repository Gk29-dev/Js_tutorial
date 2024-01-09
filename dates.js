//Dates

let myDate =  new Date();
// console.log(myDate);  //2024-01-09T12:22:47.077Z

// console.log(myDate.toString()); //Tue Jan 09 2024 17:53:59 GMT+0530 (India Standard Time)
// console.log(myDate.toDateString()); //Tue Jan 09 2024
// console.log(myDate.toLocaleString());  // 9/1/2024, 5:53:59 pm

// console.log(typeof myDate);  //Object


//Format our custom date
// let myCustomDate = new Date(2024, 2, 15); //Year, Month, Date (January => 0)
// console.log(myCustomDate.toDateString()); // Fri Mar 15 2024

// let myCustomDate = new Date(2024, 2, 15, 13, 12); 
// console.log(myCustomDate.toLocaleString()); //15/3/2024, 1:12:00 pm

// let myCustomDate = new Date("01-14-2023");  //MM-DD-YYYY
// console.log(myCustomDate.toLocaleString()); //14/1/2023, 12:00:00 am

let timeStamp = Date.now();
// console.log(timeStamp);  //Get the current time in milisecond

console.log(Math.floor(timeStamp/1000));  //Convert in second. Avoid decimal point so, use Math.floor


let currentDateTime = new Date();
console.log(currentDateTime.getTime()); //1704805344073: miliseconds

console.log(currentDateTime.getFullYear()); //2024
console.log(currentDateTime.getMonth()); //0 => Jan
console.log(currentDateTime.getDate()); //9
console.log(currentDateTime.getDay()); // 2 => Tuesday