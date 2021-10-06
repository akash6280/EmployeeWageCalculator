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
while(totalEmployeeHrs <= MAXIMUM_HRS_IN_MONTH && totalWorkingDays < NUMBER_OF_WORKING_DAYS ){
    totalWorkingDays++;
    let employeeCheck = Math.floor(Math.random() * 10) % 3;
    employeeHrs=getWorkingHours(employeeCheck);
    totalEmployeeHrs+=employeeHrs;
    employeeDailyWageArray.push(calculateDailyWage(employeeHrs));
}
let employeeWage = calculateDailyWage(totalEmployeeHrs);
console.log("Total days:"+totalWorkingDays+" Total Hrs :"+ totalEmployeeHrs+" Employee Wage: "+employeeWage); 