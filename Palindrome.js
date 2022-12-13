// class to check palindrome functions
class Palindrome{
    constructor() {
        console.log('Palindrome testing functions');
    }

    //Functions on Push, Pop, peek ,length --> Check words are Palindrome
    Check_Palindrome(word) {
        var letters = []
        var r_word = ""

        // Put all the letters of word in to stack
        for (var item = 0; item < word.length; item++) {
            letters.push(word[item])
        }

        // Pop off the stack in reverse order
        for (var item = 0; item < word.length; item++) {
            r_word += letters.pop();
        }

        //check Palindrome 
        if (r_word === word) {
            console.log(word + "  " + "is a Palindrome!");
            return 'palindrome'
        }
        else {
            console.log(word + "  " + 'is not Palindrome!');
            return 'not palindrome'
        }
    }
}

// Call the functions -----------------
var Testing = new Palindrome()
Testing.Check_Palindrome("biology")
Testing.Check_Palindrome("racecar")
Testing.Check_Palindrome("madam")
Testing.Check_Palindrome("radar")
Testing.Check_Palindrome("radar")
Testing.Check_Palindrome("level")
Testing.Check_Palindrome("civic")
Testing.Check_Palindrome("anna")
Testing.Check_Palindrome("bib")
Testing.Check_Palindrome("rotator")
Testing.Check_Palindrome("dewed")
Testing.Check_Palindrome("hannah")
Testing.Check_Palindrome("stats")

module.exports = Palindrome