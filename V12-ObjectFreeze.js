function sampleFunction(){
    "use strict";
    const MATH_CONSTANTS = {
        PI : 3.14
    };
    //below line freeze the object.
    Object.freeze(MATH_CONSTANTS);

    try{
        MATH_CONSTANTS.PI = 99;
    } catch( ex ){
        console.log(ex);
    }
    return MATH_CONSTANTS.PI;
}

const PI = sampleFunction();

console.log(PI);
