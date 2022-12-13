function Add(num1,num2){
    return num1 + num2
}
const Operations ={
    //here all the functions defined
    Add(num1,num2){
        return num1 + num2;
    },    
    Total(shipping,subTotal){
        return "$" + Add(shipping,subTotal)
    },
    Multiply(num1,num2){
        return num1 * num2;
    }
}


module.exports = Operations