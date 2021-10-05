const IS_ABSENT=0
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
const NUMBER_OF_WORKING_DAYS=20;

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
for(let day=0;day<NUMBER_OF_WORKING_DAYS;day++){
    let employeeCheck = Math.floor(Math.random() * 10) % 3;
    totalEmployeeHrs+=getWorkingHours(employeeCheck);
}
let employeeWage = totalEmployeeHrs * WAGE_PER_HOUR;
console.log("Total Hrs :"+ totalEmployeeHrs+" Employee Wage: "+employeeWage); 