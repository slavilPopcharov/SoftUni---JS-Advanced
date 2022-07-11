class Company {
  constructor(){
    this.departments = new Map();

  }

  static Employee = class Employee{
    constructor(name, salary,position){
      this.name = name;
      this.salary = salary;
      this.position = position
    }

    _validInput (value){
      if (value === ''|| value === undefined || value === null){
        throw new Error ('Invalid input!')
      }
    }

    get name (){
      return _name;
    }
    set name (value){
      this._validInput(value);
      this._name = value;
    }

    get salary (){
      return _salary
    }
    set salary (value){
      this._validInput(value);
      this._salary < 0 ? 
      new Error ('Invalid input!') : this._salary = value;
    }

    get position(){
      return this._position
    }
    set position (value){
      this._validInput(value);
      this._position = value;
    }
  }

  addEmployee(name, salary,position,department){
    if (department === ''|| department === undefined || department === null){
      throw new Error ('Invalid input!')
    }

    if (this.departments.has(department = false)){
      // create new KVP.
      this.departments.set(department, []);
    }
    //create the value //Map syntax. 
    //-We use [] instead of .get() and .set(), if we were working with an object
    let employee = new Company.Employee(name, salary, position);
    let workers = this.departments.get(department).push(employee) 
  }

  bestDepartment(){
      //like Object.entries //this.departments.keys or . values if we need one
      let sortedDepartments = [... this.departments]
          .sort(([aName, aWorker], [bName, bWorker]) => {
            return this._getAverageSalary(bName) - this._getAverageSalary(aName)
          })
          let [bestDepName, workersFromDep] = sortedDepartments[0]
    }

    _getAverageSalary(departamentName){
      // this.departments[departamentName] if we were working with an object
      //departmentWorkers = reference to the workers [].
      let departmentWorkers = this.departments.get(departamentName);
      //sum all sawaries and finde the avg salary
      let avgSalary = departmentWorkers.reduce((a,w) => a + w.salary, 0) / departmentWorkers.length
      return avgSalary;
  }
}

let c = new Company();

c.addEmployee("Stanimir", 2000, "engineer", "Construction");

c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");

c.addEmployee("Slavi", 500, "dyer", "Construction");

c.addEmployee("Stan", 2000, "architect", "Construction");

c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");

c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");

c.addEmployee("Gosho", 1350, "HR", "Human resources");

console.log(c.bestDepartment()); 

//В реален проект Employee-то ще е инпортнато от друг файил.
//Пропускаме департамента, защото за да намерим работник трябва да минем през него.
//Структурата ни е такава, че имаме Мап, където депараментите са ни клячове и съдържат в себе си работници.
//- Get and set methods  ни посволяват да правим допълнитемли неща с полетата, преди да са влязли в употреба.
//- Проверката(валидацията) я изнасяме в отделна функция, за да избегнем повторение на код и да може да бъде преизползвана.
//- За всеки сетър добавяме готовата функция: this._validInput(value)
//- this.name = name => повикване на сетъра
//- this.name => повикване на гетъра
// В тях се държи истинската стойност, която бива подадена на конструктора, след като е преминама някакви МОИ валдации и изисквания (проверки).
// Във addEmployee работим както бихме правили, ако имахме обект, само че имаме Map.
// Изнасяме методите за фа са публично достъпни за класа и да могат да се преизползват.
