class EmployeePayrollData{
    id;
    salary;
    gender;
    startDate;

    constructor(...params) {
        this.id=params[0];
        this.name=params[1];
        this.salary=params[2];
        this.gender=params[3];
        this.startDate=params[4];
    }

    get name(){
        return this._name;
    }

    set name(name) {
        this._name=name;
    }

    toString() {
        const options={year:'numeric',month:'long',day:'numeric'};
        const employeeDate=this.startDate==undefined?"undefined":
                           this.startDate.toLocaleDateString("en-us",options);
        return "id="+this.id+",name="+this.name+",salary="+this.salary+
               ",gender= "+this.gender+",startDate= "+employeeDate;  
    }
}
let employeePayrollData = new EmployeePayrollData(1, "Mark", 30000);
console.log(employeePayrollData.toString());
employeePayrollData.name = "John"
console.log(employeePayrollData.toString()); 
let newEmployeePayrollData= new EmployeePayrollData(1,"Terisa",30000,"F",new Date());
console.log(newEmployeePayrollData.toString());