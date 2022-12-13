
/**
 * classes for testing!!!
 */
class Test_Class{
    constructor(){
        console.log("Testing instantiated!");
    }

    /**
     * Adding two numbers
     * @param {*} num1 
     * @param {*} num2 
     * @returns 
     */
    Add(num1,num2){
        return num1 + num2
    }

    /**
     * Subtration function
     * @param {*} num1 
     * @param {*} num2 
     * @returns 
     */
    Subtract(num1,num2){
        return num1-num2
    }

    Devide(devider,devidend){
        try{
            if(devidend !==0){
                return devider /devidend
            }else{return 'Zero devision Error'}

        }catch(message){return message.message}
    }

    Total(shipping, subTotal){
        return "$" + this.Add(shipping,subTotal)
    }

    Multiply(numberOne,numberTwo){
        return numberOne * numberTwo
    }
}

module.exports = Test_Class