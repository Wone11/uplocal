// import {Mocha}   from "mocha";
var chai        = require('chai')
var expect      = chai.expect;
var sinon       = require('sinon')

//import source files
const Test_Class = require('../src/My_Class')
const Operations  = require('../src/Classless')

//create new class object for operating...
var test = new Test_Class()

describe('Test suits',function(){
    it('Classless Test Cases For Total',function(){
        expect(Operations.Total(10,10)).to.be.equal('$20')
    })
    it('Classless Test Cases For Addition',function(){
        expect(Operations.Add(10,10)).to.be.equal(20)
    })
    it('Classless Test Cases For Multiplication',function(){
        expect(Operations.Multiply(10,10)).to.be.equal(100)
    })
    it('Test the add method',function(){
        expect(test.Add(100, 100)).to.be.equal(200);  
        expect(test.Add(100, 200)).to.be.equal(300);  
        expect(test.Add(-100, -200)).to.be.equal(-300);  
    })
    it('Test the add method for negative intigers',function(){
        expect(test.Add(-100, -10)).to.be.equal(-110);  
    })
    it('Test the add method null values',function(){
        expect(test.Add(0, 0)).to.be.equal(0.0);  
    })
    it('Test the add method float numbers',function(){
        expect(test.Add(10.1, 10.1)).to.be.equal(20.20);  
    })  
    it('Spying the add method',function(){
         var spy = sinon.spy(test,'Add');
         var numberOne =10,numberTwo=20;
         test.Add(numberOne,numberTwo);
         sinon.assert.calledOnce(spy);
    })
})

describe("Test Suits for Subtraction Method" , function(){
    it("Subtration Test suits",function(){
        expect(test.Subtract(2300,300)).to.be.equal(2000);
    })
})
describe("Test Suits for Devision",function(){
    it("Devide two numbers ",function(){
        expect(test.Devide(100,10)).to.be.equal(10);
    })
    it("Devide to zero ",function(){
        expect(test.Devide(100,0)).to.be.equal("Zero devision Error");
    })
})