// Stack a data 
class Stack{
    constructor(){
        console.log("Stack by Tests instantiated...");
        this.count=0;
        this.storage={}
    }

    /**
     * Add an elements
     * @param {*} value 
     * @returns 
     */
    Push(value){
        this.storage[this.count]=value
        this.count++;
        return value
    }

    /**
     * delete an elements
     * @returns 
     */
    Pop(){
        if(this.count===0){
            return undefined
        }
        this.count--;
        var result = this.storage[this.count]
        delete this.storage[this.count]
        return result
    }

    /**
     * 
     * @returns 
     */
    Size(){
        return this.count
    }
    
    /**
     * Peek elments...
     * @returns 
     */
    Peek(){
        var result = this.storage[this.count-1]
        return result
    }
}

// test the data manually here
var Test = new Stack()
console.log(Test.Push(1));
console.log(Test.Push(2));
console.log(Test.Push(3));
console.log(Test.Push(4));
console.log(Test.Push(5));
console.log(Test.Peek());
console.log(Test.Size());
console.log(Test.Pop());
console.log(Test.Size());
