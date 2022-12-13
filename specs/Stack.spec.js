
var chai     =    require('chai')
var expect   =   chai.expect;

//import Stack function
var Stack  =  require('../Stack')
var test   =  new Stack()

//test here
describe('Test Suit for Stack functions',function(){
    it('Push to stack',function(){
        expect(test.push(10)).to.be.equal(10)
    })
    it('Push to stack',function(){
        expect(test.push(100)).to.be.equal(100)
    })
    it('peek element in the stack ',function(){
        expect(test.peek()).to.be.equal(100)
    })
    it('size of the element ',function(){
        expect(test.size()).to.be.equal(2)
    })
    it('pop a value entered ',function(){
        expect(test.pop()).to.be.equal(100);
    })
    it('pop a value entered ',function(){
        expect(test.pop()).to.be.equal(10);
    })
    it('peek element in the stack ',function(){
        expect(test.peek()).to.be.equal(undefined)
    })
    it('size of the element in the stack ',function(){
        expect(test.peek()).to.be.equal(undefined)
    })
})