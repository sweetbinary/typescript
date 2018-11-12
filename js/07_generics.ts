function ex_07_generics() {
/* powerful tool to write dynamic flexible code (wut?)

the T character inside the brackets tells typescript to give me the type and I will be able to use this type*/

    function properGenericEcho<T>(data: T){
        return data;
    }

    console.log(properGenericEcho<number>(27));
    //this will get a typescript error
    //console.log(properGenericEcho<number>("27"));    

    /*typescript has some built in generics such as the array */

    const testResults: Array<number> = [1.23, 3.56];
    //this will get a typescript error
    //const testResults2: Array<number> = [1.23, 'asd'];

    function printAll<T>(args: T[]) {
        console.log(`\narray passed to printAll contains:`)
        args.forEach(
            (element, index) => {
                console.log(`${index}: ${element}`)
            }
        );
    }

    printAll<string>(['plengus','plongus']);
    /*generic types*/    
    /*==create a new constant called echo 2 and assign a type==*/
    /*==everything after the colon and before the equal is a type assignment==*/
    /*==constant echo 2 will hold a function where the input is one argument of type that the user specifies ==*/
    /*== function will return something of the specified input type==*/

    const echo2: <T>(data: T) => T = properGenericEcho;
    console.log(echo2<string>(`\n this is the string passed to echo2`));


    /*generic classes*/
    /*---you can add generic constrains by using extends---*/
    /*---we can also say T extends U but that means it should not have the same contrains but T would be the same type as U ---*/
    class Multiply2Numbers<T extends number | string, U extends number | string> {
        no1!: T;
        no2!: U;
        calculate(): number {
            /*---this wont work because T could be a value which cannot be used in this caluclation---*/
            //return this.no1 * this.no2;
            /*---to make this work you have to explicitly cast these values by adding a + in front of them---*/
            return +this.no1 * +this.no2;
        }
    }

    const simpleMath = new Multiply2Numbers<number,string>();
    simpleMath.no1 = 10;
    /*---="10" will work because we specified that Multiply2Numbers U can take both number and string---*/
    simpleMath.no2 = "10";
    console.log(`${simpleMath.no1} * ${simpleMath.no2} = ${simpleMath.calculate()}`);



}