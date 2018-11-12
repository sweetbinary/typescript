function ex_06_interfaces_and_function_types() {
    /* whatever uses this interface must be a function of this type */

    interface DoubleValueFunc {
        //this is a function type, it takes two numbers and returns a string        
        (number1: number, number2: number): string;
    }

    let myDoubleFunction: DoubleValueFunc;
    myDoubleFunction = function(value1: number, value2: number) {
        return `${value1} + ${value2} times 2 = ${(value1 + value2) * 2}`;
    }

    console.log(myDoubleFunction(5,10));
}