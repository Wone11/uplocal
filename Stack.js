
//Creating a stack 
var Stack  = function(){
    this.count=0
    this.storage ={}

    // add values to the stack
    this.push = function(value){
        this.storage[this.count] = value;
        this.count ++;
        return value
    }

    //remove element from the stack 
    this.pop = function(){
        if(this.count ===0){
            return undefined
        }
        this.count--;
        var result = this.storage[this.count];
        delete this.storage[this.count];
        return result;
    }

    // the size of the stack 
    this.size  =function(){
        return this.count
    }

    // the pick stack value 

    this.peek = function(){
        return this.storage[this.count-1]
    }
}

// Test manually your work here..

var Test_Stack = new Stack()

Test_Stack.push(1)
Test_Stack.push(2)
Test_Stack.push(3)
Test_Stack.push(8)

console.log(Test_Stack.peek())
console.log(Test_Stack.size())
console.log(Test_Stack.pop())
console.log(Test_Stack.peek())

module.exports = Stack