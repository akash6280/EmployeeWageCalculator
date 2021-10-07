class EmployeePayrollData{
   
    constructor(...params) {
        this.id=params[0];
        this.name=params[1];
        this.salary=params[2];
        this.gender=params[3];
        this.startDate=params[4];
    }

    get id() {
        return this._id;
    }

    set id(id) {
        let idRegex =RegExp('^([0-9]*[1-9]+[0-9]*)$');
        if (idRegex.test(id))  {
            this._id = id;
        }
        else  {
            throw "Id is Incorrect";
        }
    }

    get salary() {
        return this._salary;
    }

    set salary(salary) {
        let salaryRegex =RegExp('^([0-9]*[1-9]+[0-9]*)$');
        if (salaryRegex.test(salary)) {
            this._salary = salary;
        }
        else  {
            throw "Salary is Incorrect";
        }
    }

    get gender() {
        return this._gender;
    }

    set gender(gender) {
        let genderRegex = RegExp('^[M|F]$');
        if (genderRegex.test(gender)) {
            this._gender = gender;
        }
        else {
            throw "Gender is Incorrect";
        }
    }

    get startDate() {
        return this._startDate;
    }

    set startDate(startDate) {
        var now = new Date();
        if (!(startDate > now)) {
            this._startDate = startDate;

        }
        else {
            throw "Date is Incorrect";
        }
            
    }

    get name(){
        return this._name;
    }

    set name(name) {
        let nameRegex = RegExp('^[A-Z]{1}[a-z]{2,}$');
        if(nameRegex.test(name))
            this._name = name;
        else throw 'Name is Incorrect';
    }

    toString() {
        const options={year:'numeric',month:'long',day:'numeric'};
        const employeeDate=this.startDate==undefined?"undefined":
                           this.startDate.toLocaleDateString("en-us",options);
        return "id="+this.id+",name="+this.name+",salary="+this.salary+
               ",gender= "+this.gender+",startDate= "+employeeDate;  
    }
}
let employeePayrollData = new EmployeePayrollData(1, "Mark", 30000,"M",new Date());
console.log(employeePayrollData.toString());

try{
    employeePayrollData.name = "john"
    console.log(employeePayrollData.toString()); 
}catch(e){
    console.error(e);
}

try{
    employeePayrollData.id = -1;
    console.log(employeePayrollData.toString());
}
catch(e){
    console.error(e);
}
try{
    employeePayrollData.salary = 0;
    console.log(employeePayrollData.toString());
}
catch(e){
    console.error(e);
}
try{
    employeePayrollData.gender = "K";
    console.log(employeePayrollData.toString());
}
catch(e){
    console.error(e);
}
let newEmployeePayrollData= new EmployeePayrollData(1,"Terisa",30000,"F",new Date());
console.log(newEmployeePayrollData.toString());