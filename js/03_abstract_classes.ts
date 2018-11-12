function ex_03_abstract_classes() {

/* Abstract classes are marked with the abstract keyword. They cannot be instanciated directly. You have to always inherit from them

You can also have abstract methods
*/

abstract class Project {
    projectName: string = 'Default';
    budget: number = 1;

    calcBudget() {
        return this.budget * 2;
    }

    /*---in abstract classes we only define what the function should look like and not implement any logic ---*/
    abstract changeName(name: string):void;

}

class ITProject extends Project {
    changeName(name: string): void{
        this.projectName = name;
    }
}

let newProject = new ITProject();
newProject.calcBudget();
newProject.changeName('Skynet 3.1');
console.table(newProject);
console.log(newProject.calcBudget());

}