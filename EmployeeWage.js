const IS_ABSENT=0
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
const NUMBER_OF_WORKING_DAYS= 20;
const MAXIMUM_HRS_IN_MONTH = 160;
let employeeDailyWageArray=new Array();

function calculateDailyWage(employeeHrs){
    return employeeHrs*WAGE_PER_HOUR;
}

function getWorkingHours(employeeCheck){
    switch(employeeCheck) {
        case IS_PART_TIME:
            return PART_TIME_HOURS;
        case IS_FULL_TIME:
            return FULL_TIME_HOURS;
        default:
            return 0;
    }
}

let totalEmployeeHrs=0;
let totalWorkingDays=0;
let employeeHrs=0;
let employeeDailyWageMap= new Map();
while(totalEmployeeHrs <= MAXIMUM_HRS_IN_MONTH && totalWorkingDays < NUMBER_OF_WORKING_DAYS ){
    totalWorkingDays++;
    let employeeCheck = Math.floor(Math.random() * 10) % 3;
    employeeHrs=getWorkingHours(employeeCheck);
    totalEmployeeHrs+=employeeHrs;
    employeeDailyWageArray.push(calculateDailyWage(employeeHrs));
    employeeDailyWageMap.set(totalWorkingDays,calculateDailyWage(employeeHrs));
}

console.log(employeeDailyWageMap);
function totalWages(totalWage,dailyWage){
    return totalWage+dailyWage;
}
console.log("Employee wage for total hours"+Array.from(employeeDailyWageMap.values()).reduce(totalWages,0));

let employeeWage = calculateDailyWage(totalEmployeeHrs);
console.log("Total days:"+totalWorkingDays+" Total Hrs :"+ totalEmployeeHrs+" Employee Wage: "+employeeWage); 

let totalEmployeeWage = 0;
function sum(dailyWage){
    totalEmployeeWage += dailyWage;
}
employeeDailyWageArray.forEach(sum);
console.log("Total days:"+totalWorkingDays+" Total Hrs :"+ totalEmployeeHrs+" Employee Wage: "+totalEmployeeWage); 

function totalWages(totalWage, dailyWage) {
    return totalWage + dailyWage;
}
console.log("Total Wage with reduce = " + employeeDailyWageArray.reduce(totalWages, 0)); 

let dailyCounter = 0;
function mapDayWithWage(dailyWage) {
    dailyCounter++;
    return dailyCounter + " = " + dailyWage;
}

let mapDayWithWageArray = employeeDailyWageArray.map(mapDayWithWage);
console.log("Daily Wage Map", mapDayWithWageArray);

function fulltimeWage(dailyWage){
    return dailyWage.includes("160");
}
let fullDayWageArray=mapDayWithWageArray.filter(fulltimeWage);
console.log(fullDayWageArray) 

function findFulltimeWage(dailyWage){
    return dailyWage.includes("160");
}
console.log("First full time wage was earned on Day: "+mapDayWithWageArray.find(findFulltimeWage));

function isAllFullTimeWage(dailyWage){
    return dailyWage.includes("160")
}
console.log("Check if all element have Full time Wage: "+fullDayWageArray.every(isAllFullTimeWage));

function isAnyPartTimeWage(dailyWage){
    return dailyWage.includes("80");
}
console.log("Check if Any part time wage: "+mapDayWithWageArray.some(isAnyPartTimeWage));

function totalDaysWorked(numberOfDays,dailyWage){
    if(dailyWage>0) return numberOfDays+1;
    return numberOfDays;
}
console.log("Number of days employee worked: "+employeeDailyWageArray.reduce(totalDaysWorked,0)); 