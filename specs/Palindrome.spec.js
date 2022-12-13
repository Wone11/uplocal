
 // imports
 var chai      =  require('chai')
 var expect    =  chai.expect

 //import test function
 var Palindrom   =  require('../Palindrome')
 var testing_palindrome = new Palindrom()

 /**
  * testinf done....
  */
 describe('Palindrome Test suits',function(){
    it('Check palindrome',function(){
        expect(testing_palindrome.Check_Palindrome('racecar')).to.be.equal('palindrome')
    })
    it('Check palindrome',function(){
        expect(testing_palindrome.Check_Palindrome('hannah')).to.be.equal('palindrome')
    }) 
    it('Check palindrome',function(){
        expect(testing_palindrome.Check_Palindrome('anna')).to.be.equal('palindrome')
    })
    it('Check palindrome',function(){
        expect(testing_palindrome.Check_Palindrome('radar')).to.be.equal('palindrome')
    })
    it('Check palindrome',function(){
        expect(testing_palindrome.Check_Palindrome('madam')).to.be.equal('palindrome')
    })
    it('Check palindrome',function(){
        expect(testing_palindrome.Check_Palindrome('rotator')).to.be.equal('palindrome')
    })
    it('Check palindrome',function(){
        expect(testing_palindrome.Check_Palindrome('dewed')).to.be.equal('palindrome')
    })
    it('Check palindrome',function(){
        expect(testing_palindrome.Check_Palindrome('stats')).to.be.equal('palindrome')
    })
    it('Check palindrome',function(){
        expect(testing_palindrome.Check_Palindrome('solomon')).to.be.equal('not palindrome')
    })
    it('Check palindrome',function(){
        expect(testing_palindrome.Check_Palindrome('Biology')).to.be.equal('not palindrome')
    })
})
