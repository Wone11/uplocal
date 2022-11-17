
//Functions on Push, Pop, peek ,length --> Check words are Palindrome
function Palindrom(word) {
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
        console.log(word + "  " +      "is a Palindrome!");
    }else{console.log(word + "  " +   'is not Palindrome!');}
}

// Call the functions -----------------
Palindrom("biology")
Palindrom("racecar")
Palindrom("madam")
Palindrom("radar")
Palindrom("radar")
Palindrom("level")
Palindrom("civic")
Palindrom("anna")
Palindrom("bib")
Palindrom("rotator")
Palindrom("dewed")
Palindrom("hannah")
Palindrom("stats")