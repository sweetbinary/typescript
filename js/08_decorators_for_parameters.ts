function ex_08_decorators_for_parameters(){

    function aParameterDecorator(target: any, method: string, paramIndex: number){
        console.log(`target:`);
        //targer is constructor or property
        console.table(target);
        console.log(`method: ${method}`);
        //paramIndex is the index of the parameter in checkBoolean
        console.log(`paramIndex: ${paramIndex}`);
    }

    class aClass {
        //decorator @aParameterDecorator is attached to aBoolean
        checkBoolean(@aParameterDecorator aBoolean: boolean) {
            if (aBoolean) {
                console.log(`aBoolean is true (proof: ${aBoolean})`);
            }
            else {
                console.log(`aBoolean is false (proof: ${aBoolean})`);
            }
        }
    }

    const course = new aClass();
    course.checkBoolean(true);
    course.checkBoolean(false);


}
