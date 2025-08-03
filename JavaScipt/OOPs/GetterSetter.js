class Employee {
  constructor(name, salary) {
    this.name = name;
    this._salary = salary;
  }
  set salary(val) {
    if (val < 0) {
      console.log("Invalid Salary!!!!");
    } else {
      this._salary = val;
    }
  }
  get salary() {
    return this._salary;
  }
}

const emp = new Employee("raj", 10000);
emp.salary = -20;
console.log(emp.salary);
